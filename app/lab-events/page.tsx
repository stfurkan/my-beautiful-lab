import { Metadata } from "next";
import { ImageGrid } from "@/components/ImageGrid/ImageGrid";
import { PageTitle } from "@/components/PageTitle/PageTitle";

export const metadata: Metadata = {
  title: 'Lab Events',
};

export default function LabEvents() {
  return (
    <div>
      <PageTitle title="Lab Events" />
      <ImageGrid />
    </div>
  );
}
