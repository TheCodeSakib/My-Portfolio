import { cn } from "@/lib/utils";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Title({ children, className }: TitleProps) {
  return (
    <>
      <h2 className={cn("text-xl font-bold text-sky mb-4", className)}>{children}</h2>
    </>
  );
}
