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
    image: 'https://images.unsplash.com/photo-1709516003202-7740fae429cb?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'John Doe',
    title: 'CTO',
    description: 'John is the CTO of My Beautiful Lab.',
  },
  {
    name: 'Jill Doe',
    title: 'COO',
    description: 'Jill is the COO of My Beautiful Lab.',
    image: 'https://images.unsplash.com/photo-1709415027566-b30b04071f45?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Jack Doe',
    title: 'CFO',
    description: 'Jack is the CFO of My Beautiful Lab.',
  },
  {
    name: 'Jen Doe',
    title: 'CIO',
    description: 'Jen is the CIO of My Beautiful Lab.',
    image: 'https://images.unsplash.com/photo-1684359517532-6fbc3f0a53fd?q=80&w=2181&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Jeb Doe',
    title: 'CMO',
    description: 'Jeb is the CMO of My Beautiful Lab.',
  },
  {
    name: 'Jed Doe',
    title: 'CDO',
    description: 'Jed is the CDO of My Beautiful Lab.',
  },
  {
    name: 'Jex Doe',
    title: 'CLO',
    description: 'Jex is the CLO of My Beautiful Lab.',
    image: 'https://images.unsplash.com/photo-1709521620670-447fed310849?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Jax Doe',
    title: 'CPO',
    description: 'Jax is the CPO of My Beautiful Lab.',
  },
  {
    name: 'Jox Doe',
    title: 'CQO',
    description: 'Jox is the CQO of My Beautiful Lab.',
  },
  {
    name: 'Jux Doe',
    title: 'CRO',
    description: 'Jux is the CRO of My Beautiful Lab.',
  },
  {
    name: 'Jyx Doe',
    title: 'CSO',
    description: 'Jyx is the CSO of My Beautiful Lab.',
  },
  {
    name: 'Jez Doe',
    title: 'CTO',
    description: 'Jez is the CTO of My Beautiful Lab.',
  },
  {
    name: 'Jaz Doe',
    title: 'CVO',
    description: 'Jaz is the CVO of My Beautiful Lab.',
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
