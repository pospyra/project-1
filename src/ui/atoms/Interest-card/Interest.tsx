import React, { ReactNode } from 'react';

interface InterestProps {
  image: JSX.Element;
  title?: string;
  description?: string;
}

export const InterestsElement = ({ image, title, description }: InterestProps) => {
  return (
    <div className="flex items-center gap-4 ">
      <div className="flex items-center justify-center shrink-0 w-[60px] h-[60px] rounded-full border-2 border-lavender">
        {image}
      </div>
      <div className="grid gap-2">
        <h3 className="subtitle">{title}</h3>
        <p className="body-text">{description}</p>
      </div>
    </div>
  );
};