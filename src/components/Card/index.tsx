import { Link } from "react-router-dom";

type CardProps = {
  imageUrl?: string;
  title?: string;
  description?: string;
  redirectUrl: string;
};

export const Card = ({
  imageUrl,
  title,
  description,
  redirectUrl,
}: CardProps) => {
  return (
    <Link
      to={redirectUrl}
      className="max-w-xs rounded overflow-hidden shadow-lg h-80 hover:opacity-70 duration-150 cursor-pointer"
    >
      <img className="w-full h-40" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-secondary text-base">{description}</p>
      </div>
    </Link>
  );
};
