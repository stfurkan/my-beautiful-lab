import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Mail, Twitter } from 'lucide-react';


type PersonType = {
  name: string;
  title: string;
  description: string;
  image?: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
};

export function PersonCard({ person }: { person: PersonType }) {
  return (
    <Card className="">
      <CardHeader className="flex flex-col items-center">
        <Avatar className="h-32 w-32">
          <AvatarImage src={`/images/people/${person.image}`} />
          <AvatarFallback className="text-4xl">{person.name.slice(0,2)}</AvatarFallback>
        </Avatar>
        <CardTitle>{person.name}</CardTitle>
        <CardDescription>{person.title}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p>{person.description}</p>
      </CardContent>
      <CardFooter className="flex flex-row items-center justify-end space-x-4 border-t pt-4">
        {person.email && (
          <a href={`mailto:${person.email}`}>
            <Mail size={24} className="hover:text-slate-500 hover:cursor-pointer" />
          </a>
        )}
        {person.linkedin && (
          <a href={person.linkedin}>
            <Linkedin size={24} className="hover:text-slate-500 hover:cursor-pointer" />
          </a>
        )}
        {person.twitter && (
          <a href={person.twitter}>
            <Twitter size={24} className="hover:text-slate-500 hover:cursor-pointer" />
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
