'use client';
import { motion } from 'framer-motion';
type YesButtonProps = {
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export default function YesButton({
  children,
  onClick,
  ...props
}: YesButtonProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{ scale: 1.1 }}
    >
      <button
        type='button'
        onClick={onClick}
        {...props}
        // style pink color
        className=' text-white font-bold px-10 py-4 rounded shadow-md shadow-red-300 drop-shadow-lg
        from-red-500 to-red-700 bg-gradient-to-r hover:from-red-700 hover:to-red-500
      '
      >
        {children}
      </button>
    </motion.div>
  );
}
