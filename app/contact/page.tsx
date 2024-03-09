import { ContactCard } from "@/components/ContactCard/ContactCard";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default function Contact() {
  return (
    <div>
      <PageTitle title="Contact Us" />
      <div className="my-10 space-y-10">
        <ContactCard type="phone" contact="123-456-7890" />
        <ContactCard type="email" contact="mybeautifullab@example.com" />
        <ContactCard type="address" contact="1234 Main St, City, State 12345" />
      </div>
    </div>
  );
}
