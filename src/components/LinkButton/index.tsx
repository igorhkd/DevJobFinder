import { ComponentProps } from "react";
import { Link } from "react-router-dom";

export interface LinkButtonProps extends ComponentProps<typeof Link> {
  children: React.ReactNode;
}

export const LinkButton = ({ children, ...props }: LinkButtonProps) => {
  return (
    <Link
      {...props}
      className="font-medium text-xl hover:opacity-70 duration-150 flex items-center gap-2"
    >
      {children}
    </Link>
  );
};
