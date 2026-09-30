import {
  Blocks,
  Building2,
  Cable,
  Code2,
  Layers3,
  RefreshCw,
  Sparkles,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIcon } from "@/data/services";

const icons: Record<ServiceIcon, LucideIcon> = {
  code: Code2,
  app: Blocks,
  layers: Layers3,
  building: Building2,
  plug: Cable,
  workflow: Workflow,
  spark: Sparkles,
  refresh: RefreshCw,
  wrench: Wrench,
};

export function ServiceIconMark({ name }: { name: ServiceIcon }) {
  const Icon = icons[name];

  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-200/20 bg-cyan-200/10 text-cyan-100">
      <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
    </span>
  );
}
