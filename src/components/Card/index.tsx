type CardProps = {
  imageUrl?: string;
  title?: string;
  description?: string;
};

export const Card = ({ imageUrl, title, description }: CardProps) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg h-80 hover:opacity-70 duration-150 cursor-pointer">
      <img className="w-full h-40" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};
