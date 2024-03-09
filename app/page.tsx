import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SectionCard } from "@/components/SectionCard/SectionCard";
import { HeroImage } from "@/components/HeroImage/HeroImage";

const navigationPages = [
  {
    title: "Research",
    href: "/research",
    description: "Delve into our innovative research projects and areas."
  },
  {
    title: "Publications",
    href: "/publications",
    description: "Browse our latest scientific discoveries and papers."
  },
  {
    title: "Who We Are",
    href: "/who-we-are",
    description: "Meet the team driving forward medical breakthroughs."
  },
  {
    title: "Lab Events",
    href: "/lab-events",
    description: "Join our seminars, workshops, and community outreach."
  },
];

export default function Home() {
  const words = "Welcome to My Beautiful Lab, where pioneering research meets innovation in the heart of our university. Our state-of-the-art facilities are a beacon of scientific exploration, dedicated to advancing the frontiers of medical science. Here, we're not just conducting experiments; we're shaping the future of healthcare.";
  return (
    <div>
      <HeroImage />
      <TextGenerateEffect words={words} />
      <div className="flex flex-row flex-wrap justify-between">
        {navigationPages.map((page, index) => (
          <SectionCard
            key={index}
            href={page.href}
            title={page.title}
          >
            {page.description}
          </SectionCard>
        ))}
      </div>
    </div>
  );
}
