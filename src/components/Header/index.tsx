import { Link } from "react-router-dom";

type HeaderProps = {
  title?: string;
};

export const Header = ({ title = "" }: HeaderProps) => {
  return (
    <header className="bg-gray-100 py-4">
      <div className="container mx-auto text-center sm:text-left">
        <Link to="/" className="text-xl font-semibold text-secondary">
          {title}
        </Link>
      </div>
    </header>
  );
};
