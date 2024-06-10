import { Link } from "react-router-dom";

type HeaderProps = {
  title?: string;
};

export const Header = ({ title = "" }: HeaderProps) => {
  return (
    <header className="bg-black py-4 h-16">
      <div className="container mx-auto text-center sm:text-left">
        <Link to="/" className="text-xl font-semibold text-white">
          {title}
        </Link>
      </div>
    </header>
  );
};
