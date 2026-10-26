import { SocialData } from "@/data/socialData";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

export default function SocialLink() {
  return (
    <>
      <TooltipProvider>
        <div className="">
          <ul className="flex gap-3 items-center">
            {SocialData.map((item) => (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                  <li className="text-sky/80 border border-sky/20 p-2 rounded-full hover:bg-sky/10 hoverEffect shadow-[0px_2px_2px_0px] hover:shadow-[0px_3px_9px_0px]">
                    <a href={item.link}>
                      <item.icon className="w-6 h-6" />
                    </a>
                  </li>
                </TooltipTrigger>
                <TooltipContent sideOffset={10} className="bg-blue-900 px-2 rounded-2xl font-medium">{item.name}</TooltipContent>
              </Tooltip>
            ))}
          </ul>
        </div>
      </TooltipProvider>
    </>
  );
}
