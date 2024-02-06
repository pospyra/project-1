import '../../atoms/Typography/typography.css';

interface FooterProps {
  className?: string 
}

export const Footer = ({className}: FooterProps) => {
  return (
    <div className={`bg-white py-4  max-w-screen-xl mx-auto ${className}`} style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <p className='body-text-2'>&copy; 2022 JetRuby. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}