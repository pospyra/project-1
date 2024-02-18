import React from 'react'

interface InputProps {
  placeholder: string
  icon?: React.ReactNode
  className?: string
  title?: string
  isRequired: boolean
}

export const Input = ({
  placeholder,
  icon,
  className,
  title,
  isRequired,
}: InputProps) => {
  return (
    <div className="grid gap-2">
      <p className="subtitle-2">
        {title}
        {isRequired && <span className="text-red"> *</span>}
      </p>
      <div className={`relative flex items-center gap-2.5`}>
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center focus:fill-lavender">
            {icon}
          </div>
        )}
        <input
          className={`w-full py-3 px-[54px] border border-solid border-greylight focus:outline-none focus:border-lavender  ${className}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}
