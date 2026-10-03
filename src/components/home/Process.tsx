import { ProcessTrack } from "@/components/home/ProcessTrack";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="Process"
          title="A clear path from idea to running software."
        />
      </Reveal>
      <div className="mt-10">
        <ProcessTrack />
      </div>
    </Section>
  );
}
