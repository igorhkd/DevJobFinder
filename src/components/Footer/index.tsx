type FooterProps = {
  message?: string;
};

export const Footer = ({ message = "" }: FooterProps) => {
  return (
    <footer className="bg-gray-200 py-4 w-full mt-auto">
      <div className="container mx-auto">
        <p className="text-center text-gray-600">{message}</p>
      </div>
    </footer>
  );
};
