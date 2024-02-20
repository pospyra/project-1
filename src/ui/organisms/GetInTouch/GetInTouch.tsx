import React from 'react'
import '../../atoms/Typography/typography.css'
import { Input } from '@/ui/atoms/Input'
import { Button } from '@/ui'
import styles from './GetInTouch.module.css'

interface AboutProps {
  className?: string
}

export const GetInTouch = ({ className }: AboutProps) => {
  return (
    <div className="relative flex h-[708px] justify-center items-center bg-getInTouchBg">
      <div className={`${styles['form-wrap']} bg-white`}>
        <h1 className=" mb-12 text-xl sm:text-4xl">
          Let’s discuss your project
        </h1>
        <div className="form grid gap-9  ">
          <div className="grid sm:flex gap-[24px] justify-between">
            <Input
              placeholder="Name Surname"
              title="Your full name"
              className="rounded-2xl gap-4"
              isRequired={true}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#696969"
                  color="#696969"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              }
            />
            <Input
              placeholder="name@example.com"
              title="Your email"
              className="rounded-2xl gap-4"
              isRequired={true}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#696969"
                  color="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              }
            />
          </div>
          <div className="grid gap-2">
            <p className="subtitle-2">Tell me about your project</p>
            <textarea
              placeholder="Add here a general description of your idea and target aim"
              className="w-full h-[122px] rounded-2xl py-3 px-4 border border-greylight resize-none focus:outline-none focus:border-lavender"
            ></textarea>
          </div>
          <div>
            <Button>
              <p className="subtitle-2">Sumbit</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                color="#7E3AF2"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
