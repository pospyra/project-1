import '../../atoms/Typography/typography.css';

interface AboutProps {
  className?: string 
}

export const About = ({className}: AboutProps) => {
  return (
    <div className={`bg-white py-4  ${className}`} style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center xl:pl-85">
          <p className='body-text-2'>&copy; 2022 JetRuby. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}