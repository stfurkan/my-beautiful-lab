import { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle/PageTitle";

export const metadata: Metadata = {
  title: 'Publications',
};

const publications = [
  {
    title: "Nanoparticle Delivery Systems: Revolutionizing Targeted Cancer Therapy",
    authors: "Smith J., Doe A., Patel S.",
    published: 2023,
    journal: "International Journal of Nanomedicine Research"
  },
  {
    title: "Gene Editing in Rare Genetic Disorders: CRISPR-Cas9 Approaches",
    authors: "Johnson L., O'Reilly M., Singh V.",
    published: 2022,
    journal: "Advances in Genetic Engineering"
  },
  {
    title: "Artificial Intelligence in Diagnostics: A New Era for Early Disease Detection",
    authors: "Davis R., Nguyen H., Kapoor D.",
    published: 2024,
    journal: "Journal of Medical AI Research"
  },
  {
    title: "Biodegradable Polymers for Sustained Drug Release: An In Vivo Study",
    authors: "Brown F., Green E., Lee I.",
    published: 2023,
    journal: "Polymer Science and Healthcare"
  },
  {
    title: "The Impact of Environmental Factors on Autoimmune Diseases",
    authors: "White G., Black K., Gray J.",
    published: 2022,
    journal: "Environmental Health Perspectives"
  },
  {
    title: "Advancements in 3D Bioprinting of Human Tissues for Transplantation",
    authors: "Wilson P., Martinez J., Zhao Y.",
    published: 2024,
    journal: "Journal of Biomedical Materials Research"
  },
  {
    title: "Neuroprotective Strategies Against Alzheimer's Disease: A Comprehensive Review",
    authors: "King A., Knight B., Wu C.",
    published: 2023,
    journal: "Neuroscience & Behavioral Reviews"
  },
  {
    title: "The Role of Microbiota in Human Health and Disease: Emerging Insights",
    authors: "Clark D., Kumar R., Chen M.",
    published: 2022,
    journal: "Journal of Microbiome Research"
  },
  {
    title: "Wearable Health Monitoring Devices: Technological Advances and Future Directions",
    authors: "Roberts N., Fisher S., Patel K.",
    published: 2024,
    journal: "Journal of Medical Devices"
  },
  {
    title: "Synthetic Biology in Agriculture: Creating Resilience Against Climate Change",
    authors: "Anderson T., Murphy Q., Singh L.",
    published: 2023,
    journal: "Advances in Sustainable Agriculture"
  }
];

export default function Publications() {
  return (
    <div>
      <PageTitle title="Publications" />

      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {publications.map((publication, index) => (
            <div key={index} className="bg-white shadow-lg border-2 rounded-lg p-5 flex flex-col justify-between leading-normal">
              <div>
                <h3 className="text-gray-900 font-bold text-xl mb-2">{publication.title}</h3>
                <p className="text-gray-700 text-base mb-4">{publication.authors}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600"><span className="font-semibold">Published:</span> {publication.published}</div>
                <div className="text-sm text-blue-500">{publication.journal}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
