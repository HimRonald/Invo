import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type BackButtonProps = {
  title: string;
  href: string;
  className?: string;
};

export const BackButton = ({ title, href, className }: BackButtonProps) => {
  return (
    <>
      <Link
        className={cn("flex items-center gap-1", className)}
        href={href}
      >
        <ArrowLeft className="size-6" />
        {title}
      </Link>
    </>
  );
};
