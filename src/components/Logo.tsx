import { Link } from "react-router";

import { cn } from "@/lib/utils";

interface LogoProps {
  title: string;
  subtitle: string;
}
export default function Logo({ title, subtitle }: LogoProps) {
  return (
    <>
      <Link to="/">
        <h2 className={cn("font-bold text-2xl hover:text-hover hoverEffect group uppercase")}>
          {title} <span className={cn("text-sky group-hover:text-white hoverEffect ml-[-4px]")}>{subtitle}</span>
        </h2>
      </Link>
    </>
  );
}
