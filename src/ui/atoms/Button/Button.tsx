import React, { ReactNode } from 'react';
import s from './Button.module.css';

interface ButtonProps {
  className?: string;
  children?: ReactNode;
}

export const Button = ({ className, children }: ButtonProps) => {
  return (
    <button className={`${s.root} ${className}`}>
      {children}
    </button>
  );
};
