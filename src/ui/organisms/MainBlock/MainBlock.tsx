import React from 'react';
import { Button } from "@/ui";
import styles from './MainBlock.module.css';
import '../../atoms/Typography/typography.css';


export const MainBlock = () => {
  return (
  <div className={`${styles['block-wrap']} responsive flex pl-3.5 lg:pl-20 md:pl-10 sm:pl-3.5`}>
      <div className=" pt-[27px] lg:pt-40 md:pt-11 sm:pt-[27px]">
        <div className=" md:w-[420px] w-[290px] ">
          <div className="grid gap-1 mb-[38px] lg:mb-[96px] md:mb-[36px] sm:mb-[38px]">
            <h1 className='text-2xl md:text-6xl'>Hey, I’m Nick</h1>
            <p className="body-text text-sm text-greydark sm:text-xl ">Frontend developer</p>
          </div>
          <div className="grid gap-4 lg:gap-6 lg:mb-16 md:gap-4 md:mb-11 mb-[27px] sm:gap-6">
            <div className="h-0.5 bg-lavender w-6"></div>
            <p className="body-text text-sm sm:text-xl text-greydark max-w-[420px]">
              Help you to create high-quality digital products that your clients will love and let your business thrive
            </p>
          </div>
          <Button >
            <p className='subtitle-2 text-sm sm:text-base'>Get in touch </p>
            <svg xmlns="http://www.w3.org/2000/svg" color="#7E3AF2" fill="white" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 sm:w-6 sm:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </Button>
        </div>
      </div>

      <div className={`${styles['background-wrap']} relative w-full lg:w-[1070px] lg:h-[864px] md:w-[681px] md:h-[551px] h-[345px] w-[537px]`}>
        <div className={`${styles.background} bg-gradient `}>
          <div className={`${styles.avatar}`}>
          </div>
        </div>
      </div>


    </div>
  );
};
