'use client'

import React, { useState } from 'react'

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
  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    if (isRequired && event.target.value.trim() === '') {
      setError('Please fill this mandatory field')
    } else {
      setError('')
    }
  }

  return (
    <div className="relative">
      <div className="grid gap-2">
        <p className="subtitle-2">
          {title}
          {isRequired && <span className="text-red"> *</span>}
        </p>
        <div className={`relative flex items-center gap-2.5`}>
          {isRequired && icon && (
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center focus:fill-lavender">
              {!error && icon}
              {error && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#E02424"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          )}
          <input
            className={`w-full py-3 px-[54px] border border-solid border-greylight focus:outline-none focus:border-lavender  ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>{error && <p className="subtitle-2 text-red">{error}</p>}</div>
    </div>
  )
}
