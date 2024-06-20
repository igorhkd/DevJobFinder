type FooterProps = {
  message?: string;
};

export const Footer = ({ message = "" }: FooterProps) => {
  return (
    <footer className="bg-primary py-4 w-full mt-auto">
      <div className="container mx-auto">
        <p className="text-center text-white">{message}</p>
      </div>
    </footer>
  );
};
