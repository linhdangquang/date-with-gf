'use client';

import { useState } from 'react';
import { CalendarIcon, Clock, Heart } from 'lucide-react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { saveDatingData } from '../actions';
import { TypewriterEffect } from '@/components/typewriter-effect';

const activities = [
  { id: 'xem-phim', label: 'Xem phim' },
  { id: 'choi-game', label: 'Chơi game' },
  { id: 'di-ca-phe', label: 'Đi cà phê' },
  { id: 'an-uong', label: 'Ăn uống' },
  { id: 'khac', label: 'Khác' },
];

const hours = Array.from({ length: 24 }, (_, i) => i);

export default function DatingForm() {
  const [date, setDate] = useState<Date>();
  const [hour, setHour] = useState<string>();
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [isSubmitCompleted, setIsSubmitCompleted] = useState(false);
  const handleActivityChange = (activityId: string) => {
    setSelectedActivities((prev) =>
      prev.includes(activityId)
        ? prev.filter((id) => id !== activityId)
        : [...prev, activityId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Selected activities:', selectedActivities);
    console.log('Selected date:', date);
    console.log('Selected hour:', hour);
    // Here you can add logic to send the data to a server or perform other actions
    const res = await saveDatingData({
      activities: selectedActivities,
      date: date?.toISOString(),
      hour: hour,
    });
    console.log('Submit result:', res);
    if (res) {
      alert('❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️');

      setIsSubmitCompleted(true);
    }
  };

  if (isSubmitCompleted) {
    return (
      <>
        <TypewriterEffect
          words={[
            // Cảm ơn em đã chấp nhận lời mời của anh
            {
              text: 'Cảm',
              className: 'text-red-500',
            },
            {
              text: 'ơn',
              className: 'text-red-500',
            },
            {
              text: 'em',
            },
            {
              text: 'đã',
            },
            {
              text: 'đồng',
            },
            {
              text: 'ý',
            },
            {
              text: 'đi',
            },
            {
              text: 'hẹn',
            },
            {
              text: 'hò',
            },
            {
              text: 'với',
            },
            {
              text: 'anh',
            },
            {
              text: '!',
            }
          ]}
          className='text-2xl text-red-400 font-bold text-center'
        />
        <Heart className='size-40 mx-auto text-red-500 animate-pulse' fill='currentColor' />
      </>
    );
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 1,
      }}
      className='space-y-4'
    >
      <TypewriterEffect
        words={[
          {
            text: 'Cảm',
            className: 'text-red-500',
          },
          {
            text: 'ơn',
            className: 'text-red-500',
          },
          {
            text: 'em',
            className: 'text-red-600',
          },
          {
            text: 'đã',
          },
          {
            text: 'đồng',
          },
          {
            text: 'ý',
          },
          {
            text: 'đi',
          },
          {
            text: 'hẹn',
          },
          {
            text: 'hò',
          },
          {
            text: 'với',
          },
          {
            text: 'anh',
          },
          {
            text: '!',
          },
        ]}
        className='text-4xl font-bold text-center'
      />
      <p className='text-sm text-center text-gray-400 py-2'>
        <Heart
          className='size-20 inline  animate-bounce text-red-500'
          fill='currentColor'
        />
        ️
      </p>
      <form onSubmit={handleSubmit} className='space-y-8'>
        <div className='space-y-4'>
          <Label className='text-base'>
            Em thích làm gì vào buổi hẹn hò này?
          </Label>
          <div className='grid grid-cols-2 gap-4'>
            {activities.map((activity) => (
              <div key={activity.id} className='flex items-center space-x-2'>
                <Checkbox
                  id={activity.id}
                  checked={selectedActivities.includes(activity.id)}
                  onCheckedChange={() => handleActivityChange(activity.id)}
                />
                <Label htmlFor={activity.id}>{activity.label}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className='space-y-4'>
          <Label className='text-base'>
            Em muốn hẹn hò vào ngày nào và lúc mấy giờ?
          </Label>
          <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2'>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-full sm:w-[240px] justify-start text-left font-normal',
                    !date && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className='mr-2 h-4 w-4' />
                  {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0'>
                <Calendar
                  mode='single'
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  required
                />
              </PopoverContent>
            </Popover>

            <Select onValueChange={setHour} required>
              <SelectTrigger className='w-full sm:w-[180px]'>
                <SelectValue placeholder='Select hour'>
                  {hour ? (
                    <>
                      <Clock className='mr-2 h-4 w-4 inline' />
                      {hour}:00
                    </>
                  ) : (
                    'Select hour'
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {hours.map((h) => (
                  <SelectItem key={h} value={h.toString()}>
                    {h.toString().padStart(2, '0')}:00
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button type='submit' className='w-full'>
          Submit
        </Button>
      </form>
    </motion.div>
  );
}
