import Image from "next/image";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function VpmLogo({
  className,
  heightClass = "h-10",
}: {
  className?: string;
  heightClass?: string;
}) {
  return (
    <a
      href={site.product.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("inline-flex max-w-full", className)}
      aria-label="Virtual Property Master"
    >
      <Image
        src="/brand/vpm-logo.png"
        alt="Virtual Property Master"
        width={1152}
        height={232}
        className={cn("w-auto max-w-full", heightClass)}
      />
    </a>
  );
}
