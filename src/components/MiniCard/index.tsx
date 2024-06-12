import { Link } from "react-router-dom";

type MiniCardProps = {
  title?: string;
  subtitle?: string;
  linkUrl?: string;
  badges?: {
    id: number;
    name: string;
    color: string;
  }[];
};

export const MiniCard = ({
  title = "",
  subtitle = "",
  badges,
  linkUrl,
}: MiniCardProps) => {
  return (
    <Link
      to={linkUrl!}
      className="w-full min-h-28 bg-primary p-4 rounded-lg hover:opacity-70 duration-150 cursor-pointer"
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <p className="font-semibold text-lg">{title}</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {badges?.map((item) => (
              <span
                key={item.id}
                className="min-w-14 text-center px-2 py-1 rounded-full font-medium"
                style={{ backgroundColor: `#${item.color}` }}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
        {subtitle && (
          <div className="mt-2">
            <p className="text-sm text-gray-600">{subtitle}</p>
          </div>
        )}
      </div>
    </Link>
  );
};
