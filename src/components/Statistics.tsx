import { statusData } from "@/data/heroSecData";
import CountUp from "react-countup";

export default function Statistics() {
  return (
    <>
      <div className="flex items-center flex-col md:flex-row gap-2.5 md:gap-5 mt-4">
        {statusData.map((item, index) => (
          <div key={index} className="flex gap-2.5 items-center md:gap-4 flex-col md:flex-row justify-center lg:justify-start">
            <CountUp end={item?.num} duration={7} delay={2} className="text-4xl md:text-6xl font-extrabold" />
            <p className=" leading-snug text-white/70 text-sm">{item?.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
