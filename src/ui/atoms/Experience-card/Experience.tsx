import React from 'react';

interface ExperienceProps {
  date: string;
  position?: string;
  company?: string;
  className?: string;
}

export const ExperienceElement = ({ date, position, company, className }: ExperienceProps) => {
  return (
    <div className={`{flex gap-4 ${className}}`}>
        <p className="body-text w-[152px]">{date}</p>

      <div className="grid gap-[8px] mb-8">
        <h3 className="subtitle">{position}</h3>
        <p className="body-text">{company}</p>
      </div>
    </div>
  );
};