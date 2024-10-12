'use client';

import { useEffect, useRef } from 'react';

export default function PlayMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }
    };

    document.addEventListener('click', playAudio);

    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src='/music.mp3' type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}