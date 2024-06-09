type HeaderProps = {
  title?: string;
};

export const Header = ({ title = "" }: HeaderProps) => {
  return (
    <header className="bg-gray-100 py-4">
      <div className="container mx-auto">
        <h1 className="text-xl font-semibold text-gray-800 text-center sm:text-left">
          {title}
        </h1>
      </div>
    </header>
  );
};
