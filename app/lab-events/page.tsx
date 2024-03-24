import { Metadata } from "next";
import { ImageGrid } from "@/components/ImageGrid/ImageGrid";
import { PageTitle } from "@/components/PageTitle/PageTitle";

export const metadata: Metadata = {
  title: 'Lab Events',
};

export default function LabEvents() {
  const ImageSkeleton = ({ title, description }: { title: string; description: string; }) => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">{title}</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          {description}
        </p>
      </div>
    );
  };
  
  const imageContent = [
    {
      id: 1,
      title: "House in the woods",
      description: "A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city life.",
      image: "event1.jpeg"
    },
    {
      id: 2,
      title: "House above the clouds",
      description: "Perched high above the world, this house offers breathtaking views and a unique living experience. It's a place where the sky meets home, and tranquility is a way of life.",
      image: "event2.jpeg"
    },
    {
      id: 3,
      title: "Greens all over",
      description: "A house surrounded by greenery and nature's beauty. It's the perfect place to relax, unwind, and enjoy life.",
      image: "event3.jpeg"
    },
    {
      id: 4,
      title: "Rivers are serene",
      description: "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
      image: "event4.jpeg"
    },
  ];

  const cards = imageContent.map((content, i) => {
    return {
      id: content.id,
      content: <ImageSkeleton {...content} />,
      className: i % 2 === 0 ? "md:col-span-2" : "col-span-1",
      thumbnail: `/images/events/${content.image}`,
    };
  });
  
  return (
    <div>
      <PageTitle title="Lab Events" />
      <ImageGrid cards={cards} />
    </div>
  );
}
