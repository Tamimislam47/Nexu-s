import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({ children, className }) => {
  return <div className={cn("h-full w-full text-lg", className)}>{children}</div>;
};

export default MaxWidthWrapper;
