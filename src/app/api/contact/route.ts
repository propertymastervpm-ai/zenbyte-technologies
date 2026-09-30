import { enquiryServices, type EnquiryPayload, type EnquiryService } from "@/data/contact";
import { site } from "@/lib/site";

function isService(value: string): value is EnquiryService {
  return enquiryServices.includes(value as EnquiryService);
}

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let payload: Partial<EnquiryPayload> & { website?: string };

  try {
    payload = (await request.json()) as Partial<EnquiryPayload> & { website?: string };
  } catch {
    return Response.json({ ok: false, error: "Invalid enquiry." }, { status: 400 });
  }

  if (payload.website) {
    return Response.json({ ok: true });
  }

  const name = clean(payload.name, 100);
  const company = clean(payload.company, 120);
  const email = clean(payload.email, 160);
  const phone = clean(payload.phone, 40);
  const message = clean(payload.message, 2000);
  const service = clean(payload.service, 80);

  if (name.length < 2 || message.length < 10 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !isService(service)) {
    return Response.json({ ok: false, error: "Please check the form and try again." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || site.email;

  if (!apiKey || !from) {
    return Response.json({ ok: false, fallback: true }, { status: 501 });
  }

  const text = [
    `Name: ${name}`,
    `Company: ${company || "-"}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    `Service: ${service}`,
    "",
    message,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Website enquiry from ${name}`,
      text,
    }),
  });

  if (!response.ok) {
    return Response.json(
      { ok: false, error: "Email delivery failed. Please write to us directly." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
