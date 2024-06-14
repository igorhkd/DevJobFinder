import { Link } from "react-router-dom";

export type LinkButtonProps = {
  children: React.ReactNode;
  href?: string;
};

export const LinkButton = ({ children, href = "/" }: LinkButtonProps) => {
  return (
    <Link
      to={href}
      className="font-medium text-xl hover:opacity-70 duration-150 flex items-center gap-2"
    >
      {children}
    </Link>
  );
};
