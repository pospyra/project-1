import '../../atoms/Typography/typography.css'

interface FooterProps {
  className?: string
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <div
      className={`bg-white py-4 max-w-screen-xl mx-auto px-[15px] sm:px-[85px] ${className}`}
    >
      <div className="container mx-auto">
        <p className="body-text text-sm sm:text-xl">
          &copy; 2022 JetRuby. All Rights Reserved
        </p>
      </div>
    </div>
  )
}
