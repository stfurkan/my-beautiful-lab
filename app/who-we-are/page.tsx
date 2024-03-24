import { Metadata } from "next";
import { PersonCard } from "@/components/PersonCard/PersonCard";
import { PageTitle } from "@/components/PageTitle/PageTitle";

export const metadata: Metadata = {
  title: 'Who We Are',
};

const examplePeople = [
  {
    name: 'Jane Doe',
    title: 'CEO',
    description: 'Jane is the CEO of My Beautiful Lab.',
    image: 'person1.jpeg',
    email: 'exampleemail@example.com',
    linkedin: 'https://www.linkedin.com/in/example123asdsadsa',
    twitter: 'https://twitter.com/example123asdsadsa',
  },
  {
    name: 'John Doe',
    title: 'CTO',
    description: 'John is the CTO of My Beautiful Lab.',
    email: 'exampleemail@example.com',
  },
  {
    name: 'Jill Doe',
    title: 'COO',
    description: 'Jill is the COO of My Beautiful Lab.',
    image: 'person2.jpeg',
  },
];

export default function WhoWeAre() {
  return (
    <div>
      <PageTitle title="Who We Are" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
        {examplePeople.map((person, index) => (
          <PersonCard key={index} person={person} />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-8">
    </div>
    </div>
  );
}
