import { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Research',
};

const researchs = [
  {
    title: "Unlocking the Secrets of the Genome",
    description: "Dive into our groundbreaking genetic research as we explore DNA's mysteries to pave the way for revolutionary treatments and personalized medicine. Our work aims to decode the genetic basis of diseases, bringing closer the reality of targeted gene therapies.",
  },
  {
    title: "The Next Frontier in Nanomedicine",
    description: "Explore how we're harnessing nanotechnology to transform medical diagnostics, drug delivery, and therapy. Our pioneering nanomedicine projects focus on developing nano-scale tools that could one day detect and treat diseases at their earliest stages, with unprecedented precision.",
  },
  {
    title: "Combating Diseases with AI",
    description: "Discover how artificial intelligence is becoming a powerful ally in fighting diseases. Our researchers use AI to analyze vast datasets, predict disease patterns, and design new drugs. This synergy between biology and technology opens new avenues for identifying and combating health threats faster than ever before.",
  },
]

export default function Research() {
  return (
    <div>
      <PageTitle title="Research" />

      <div className="my-10 space-y-8">
        {researchs.map((research, index) => (
          <div key={index} className="flex flex-col items-center space-y-4 pb-4 border-b last:border-none">
            <h2 className="text-xl font-bold">{research.title}</h2>
            <p className="text-center">{research.description}</p>
            <Button>Learn more</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
