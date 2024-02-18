import React from 'react'

interface ExperienceProps {
  date: string
  position?: string
  company?: string
  className?: string
}

export const ExperienceElement = ({
  date,
  position,
  company,
  className,
}: ExperienceProps) => {
  return (
    <div className={`flex gap-4 ${className} `}>
      <p className="body-text text-sm sm:text-xl w-[152px]">{date}</p>

      <div className="grid gap-[8px] mb-8">
        <h3 className="subtitle text-sm sm:text-xl">{position}</h3>
        <p className="body-text text-sm sm:text-xl">{company}</p>
      </div>
    </div>
  )
}
