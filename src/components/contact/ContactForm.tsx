"use client";

import { FormEvent, useState } from "react";
import { enquiryServices, type EnquiryService } from "@/data/contact";
import { site } from "@/lib/site";
import { SubmitButton } from "@/components/ui/Button";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

const initial = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "Custom Software" as EnquiryService,
  message: "",
  website: "",
};

function mailtoHref(values: typeof initial) {
  const subject = `Website enquiry from ${values.name || "Zenbyte website"}`;
  const body = [
    `Name: ${values.name}`,
    `Company: ${values.company || "-"}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "-"}`,
    `Service: ${values.service}`,
    "",
    values.message,
  ].join("\n");

  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function update<K extends keyof typeof initial>(key: K, value: (typeof initial)[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (values.name.trim().length < 2 || values.message.trim().length < 10) {
      setError("Please add your name and a message of at least 10 characters.");
      setStatus("error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { ok?: boolean; fallback?: boolean; error?: string };

      if (data.ok) {
        setStatus("sent");
        setValues(initial);
        return;
      }

      if (data.fallback || response.status === 501) {
        window.location.href = mailtoHref(values);
        setStatus("mailto");
        return;
      }

      setError(data.error || "We could not send the enquiry. Please email us directly.");
      setStatus("error");
    } catch {
      window.location.href = mailtoHref(values);
      setStatus("mailto");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-7" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" value={values.name} onChange={(value) => update("name", value)} required autoComplete="name" />
        <Field label="Company" name="company" value={values.company} onChange={(value) => update("company", value)} autoComplete="organization" />
        <Field label="Email" name="email" type="email" value={values.email} onChange={(value) => update("email", value)} required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" value={values.phone} onChange={(value) => update("phone", value)} autoComplete="tel" />
      </div>

      <label className="mt-4 block text-sm font-medium text-slate-200" htmlFor="service">
        Service interested in
      </label>
      <select
        id="service"
        name="service"
        value={values.service}
        onChange={(event) => update("service", event.target.value as EnquiryService)}
        className="mt-2 w-full rounded-xl border border-white/10 bg-[#0c1424] px-3 py-3 text-sm text-white"
      >
        {enquiryServices.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>

      <label className="mt-4 block text-sm font-medium text-slate-200" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={6}
        value={values.message}
        onChange={(event) => update("message", event.target.value)}
        className="mt-2 w-full rounded-xl border border-white/10 bg-[#0c1424] px-3 py-3 text-sm text-white"
      />

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <SubmitButton disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send Enquiry"}</SubmitButton>
        <p className="text-xs leading-5 text-slate-400">
          Enquiries go to {site.email}. If email delivery is not configured, your email app opens instead.
        </p>
      </div>

      <div aria-live="polite" className="mt-4 text-sm">
        {status === "sent" ? (
          <p className="text-emerald-200">Thank you. Your enquiry has been sent.</p>
        ) : null}
        {status === "mailto" ? (
          <p className="text-cyan-100">
            Your email app should open with this enquiry. If it does not, write to{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        ) : null}
        {status === "error" ? <p className="text-rose-200">{error}</p> : null}
      </div>
      <noscript>
        <p className="mt-4 text-sm text-slate-300">
          Email {site.email} directly if the form cannot run.
        </p>
      </noscript>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const id = `contact-${name}`;
  return (
    <div>
      <label className="block text-sm font-medium text-slate-200" htmlFor={id}>
        {label}
        {required ? <span className="text-cyan-200"> *</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-xl border border-white/10 bg-[#0c1424] px-3 py-3 text-sm text-white"
      />
    </div>
  );
}
