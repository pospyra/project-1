import React from 'react';
import '../../atoms/Typography/typography.css';
import styles from './About.module.css';
import Image from "next/image";

import avatarImage from '../../../assets/images/photo-avatar.png';
import backgroundImage from '../../../assets/images/ellipse-background.png';
import { Button } from '@/ui';
import { InterestsElement } from '@/ui/atoms/Interest-card';
import { ExperienceElement } from '@/ui/atoms/Experience-card';


interface AboutProps {
  className?: string;
}

export const About = ({ className }: AboutProps) => {
  return (
    <div className="relative lg:px-20 md:px-[39px] lg:mb-[100px] sm:px-[39px] px-[15px] md:mb-[80px]">
      <div>
        <h2 className='text-xl mb-[36px] sm:text-4xl sm:mb-[80px] '>About me</h2>
        <div className="grid sm:flex w-full items-center justify-center sm:justify-between lg:gap-40 gap-[44px] lg:mb-[80px] md:mb-[60px] mb-[36px]">
          <div className={`${styles.background}`}>
            <div className={`${styles.container}`}>
              <Image src={backgroundImage} alt="Background Avatar" className={`${styles.outerAvatar} `} />
              <div className={`${styles.innerAvatar}`}>
                <Image src={avatarImage} alt="Avatar" className={`${styles.innerAvatar}`} />
              </div>
            </div>
          </div>
          <div >
            <div className='grid gap-4 max-w-[290px] mb-16 lg:max-w-[537px] md:max-w-[380px]'>
              <div className="h-0.5 bg-lavender w-6"></div>
              <p className="body-text text-sm sm:text-xl text-greydark">
                <span className="subtitle text-black">Nick Richardson</span> - specialist in Frontend development. Clear code is my passion. <br /> Solving issues through negotiations
              </p>
            </div>
            <Button>
              <p className='subtitle-2'>Get in touch</p>
              <svg xmlns="http://www.w3.org/2000/svg" color="#7E3AF2" fill="white" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
            </Button>
          </div>
        </div>
        <div className={`${styles.information} grid gap-[48px] items-start lg:flex lg:gap-[217px] sm:gap-[80px] `}>
          <div className={`${styles.interests} grid gap-11`}>
            <h3 className='text-xl md:text-2xl'>Interests</h3>
            <div className={`${styles['interests-element']}`}>
              <InterestsElement
                image={(
                  <svg xmlns="http://www.w3.org/2000/svg" color="#7E3AF2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                  </svg>
                )}
                title="Music"
                description="Indie rock | Reggae"
              />
            </div>
            <div className={`${styles['interests-element']} flex gap-4`}>
              <InterestsElement
                image={(
                  <svg xmlns="http://www.w3.org/2000/svg" color="#7E3AF2" fill="#7E3AF2" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                  </svg>
                )}
                title="Art"
                description="Edvard Munch | Frida Kahlo"
              />
            </div>
            <div className={`${styles['interests-element']}`}>
              <InterestsElement
                image={(
                  <svg xmlns="http://www.w3.org/2000/svg" color="#7E3AF2" fill="#7E3AF2" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                )}
                title="Photography"
                description="Portraits"
              />
            </div>
          </div>
          <div className={`${styles.experience} grid gap-11`}>
            <h3 className='text-xl md:text-2xl'>Education & Experience</h3>
            <div className='grid gap-6'>
              <ExperienceElement
                className='border-b '
                date="2008 - Present"
                position="Middle Frontend developer"
                company="Ozon"
              />
              <ExperienceElement
                className='border-b '
                date="2006 - 2007"
                position="Frontend development courses"
                company="Stepik"
              />
              <ExperienceElement
                date="2000 - 2005"
                position="Frontend developer"
                company="Saint Petersburg State University"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
