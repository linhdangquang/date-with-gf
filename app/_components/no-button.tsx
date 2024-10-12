'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
export default function NoButton() {
  // if mouse on button change direction of button so user can't click on it
  const buttonRef = useRef<HTMLButtonElement>(null);
  const moveButton = () => {
    if (buttonRef.current) {
      const button = buttonRef.current;
      const randomX = Math.floor(Math.random() * window.innerWidth);
      const randomY = Math.floor(Math.random() * window.innerHeight);
      button.style.position = 'absolute';
      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    }
  };
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      <button
        ref={buttonRef}
        onMouseOver={moveButton}
        onTouchStart={moveButton}
        // style pink color
        className=' text-white font-bold px-10 py-4 rounded shadow-red-300 drop-shadow-lg
        from-red-500 to-red-700 bg-gradient-to-r hover:from-red-700 hover:to-red-500
      '
      >
        No
      </button>
    </motion.div>
  );
}
