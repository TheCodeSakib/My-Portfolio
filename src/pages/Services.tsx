import Title from "@/components/Title";
import { serviceData } from "@/data/serviceData";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

// Data type
interface ServiceType {
  id: string;
  title: string;
  desc: string;
  iamge: string;
  href: string;
}
interface ServiceSectionProps {
  service: ServiceType[];
}
const ServiceSection = ({ service }: ServiceSectionProps) => {
  return (
    <>
      <div className="py-5 md:my-10 min-h-[80vh] pt-20">
        <div className="container">
          <Title>Services I Provide</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            {service?.map((item) => (
              <div key={item?.id} className="flex flex-col p-6 rounded-lg bg-sky/5  hoverEffect group scale-97 hover:scale-100">
                <div className="flex items-center justify-between">
                  <p className="font-extrabold text-5xl text-transparent text-outline">{item?.id}</p>
                  <Link to={item?.href} target="blank">
                    <ArrowUpRight className="hover:text-hover hoverEffect" />
                  </Link>
                </div>
                <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 font-semibold mt-5">
                  {item?.title}
                </h3>
                <p className="mt-2">{item?.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default function Services() {
  return (
    <>
      <ServiceSection service={serviceData} />
    </>
  );
}
