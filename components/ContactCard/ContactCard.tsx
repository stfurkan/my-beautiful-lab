import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactCard({
  type,
  contact,
} : {
  type: 'email' | 'phone' | 'address';
  contact: string;
}) {
  const typeData = {
    email: {
      title: 'Email',
      description: 'Send us an email',
      icon: <Mail size={48} />,
    },
    phone: {
      title: 'Phone',
      description: 'Give us a call',
      icon: <Phone size={48} />,
    },
    address: {
      title: 'Address',
      description: 'Visit us in person',
      icon: <MapPin size={48} />,
    },
  };

  return (
    <Card className="text-center">
      <CardHeader className="flex flex-col items-center">
        {typeData[type].icon}
        <CardTitle>{typeData[type].title}</CardTitle>
        <CardDescription>{typeData[type].description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-mono font-semibold break-words">{contact}</p>
      </CardContent>
    </Card>
  );
}
