'use client';

import { TypewriterEffect } from '@/components/typewriter-effect';
import NoButton from './_components/no-button';
import YesButton from './_components/yes-button';
import { useState } from 'react';
import DatingForm from './_components/date-form';

export default function Home() {
  const [isYes, setIsYes] = useState(false);
  const handleYes = () => {
    setIsYes(true);
  };
  return (
    <div className='px-2 flex flex-col gap-4 items-center justify-center min-h-screen py-2'>
      {/* auto play audio */}
     
      {!isYes ? (
        <>
          <TypewriterEffect
            words={[
              {
                text: 'Phạm ',
                className: 'text-red-500',
              },
              {
                text: 'Trần',
                className: 'text-red-500',
              },
              {
                text: 'Yến',
                className: 'text-red-500',
              },
              {
                text: 'Nhi',
                className: 'text-red-500',
              },
              {
                text: ',',
              },
              {
                text: 'hẹn',
                className: 'text-red-500',
              },
              {
                text: 'hò',
                className: 'text-red-500',
              },
              {
                text: 'với',
              },
              {
                text: 'anh',
                className: 'text-red-500',
              },
              {
                text: 'nhé?',
              },
            ]}
            className='text-4xl font-bold text-center'
          />
          <div className='flex flex-row items-center justify-center space-x-4'>
            <YesButton onClick={handleYes}>Yes</YesButton>
            <NoButton />
          </div>
        </>
      ) : (
        <div>
        
          <DatingForm />
        </div>
      )}
    </div>
  );
}
