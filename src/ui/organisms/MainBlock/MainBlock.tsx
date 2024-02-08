import React from 'react';
import { Button } from "@/ui";
import styles from './MainBlock.module.css';

export const MainBlock = () => {
  return (
    <div className="relative px-20">
      <div className="pt-40" style={{ height: '770px' }}>
        <div className="max-w-md">
          <div className="mb-24 gap-1">
            <h1>Hey, I’m Nick</h1>
            <p className="body-text text-greydark">Frontend developer</p>
          </div>
          <div className="grid gap-6 mb-16">
            <div className="h-0.5 bg-lavender w-6"></div>
            <p className="body-text text-greydark">
              Help you to create high-quality digital products that your clients will love and let your business thrive
            </p>
          </div>
          <Button>
            <p className='subtitle-2'>Get in touch </p>
            <svg xmlns="http://www.w3.org/2000/svg" color="#7E3AF2" fill="white" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </Button>
        </div>
      </div>

      <div className={`${styles.background} bg-gradient`}>
        <div className={`${styles.avatar}`}>
        </div>
      </div>

    </div>
  );
};
