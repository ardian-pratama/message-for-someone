import avatar from '@/assets/avatar.png';
import ThankYouMessage from '@/components/ThankYouMessage';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { toast } from 'sonner';

export default function Message() {
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const showThankYouTimer = setTimeout(() => {
      setShowThankYou(true);
      setTimeout(() => {
        toast.message('Info', {
          description: 'Terlihat sederhana tapi ini khusus untuk mu 😇',
        });
      }, 1000);
    }, 19000);

    return () => {
      clearTimeout(showThankYouTimer);
      setShowThankYou(false);
    };
  }, []);

  const messages = [
    {
      text: 'Teruntuk Silvana Nabila Shyifa yang membaca pesan ini, terima kasih atas setiap waktu dan segala perhatian yang telah kamu berikan hingga saat ini.',
    },
    {
      text: 'Tiada hal-hal yang mampu ku lakukan saat ini, untuk membalaskan semua yang sudah kamu berikan.',
      textDelay: 10000,
      componentDelay: 9,
    },
    {
      text: 'Untuk sekarang cuma ini yang bisa ku berikan.',
      textDelay: 16000,
      componentDelay: 15,
    },
  ];

  return (
    <div className='flex flex-col gap-2'>
      {messages.map(({ text, textDelay, componentDelay }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: '50%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: componentDelay ?? 0,
          }}
          className='flex gap-2 justify-items-stretch'
        >
          <Avatar className='aspect-square h-8 w-8'>
            <AvatarImage
              src={avatar}
              alt='Me'
            />
            <AvatarFallback>TN</AvatarFallback>
          </Avatar>
          <Card className='max-w-sm p-2'>
            <CardTitle className='mb-1 text-sm'>Me</CardTitle>
            <CardDescription>
              <TypeAnimation
                sequence={[textDelay ?? 1000, text]}
                speed={50}
                cursor={false}
              />
            </CardDescription>
          </Card>
        </motion.div>
      ))}
      {showThankYou && (
        <ThankYouMessage>
          <Avatar className='aspect-square h-8 w-8'>
            <AvatarImage
              src={avatar}
              alt='Me'
            />
            <AvatarFallback>TN</AvatarFallback>
          </Avatar>
          <Card className='max-w-sm p-2'>
            <CardTitle className='mb-1 text-sm'>Me</CardTitle>
            <CardDescription>Love you ❤️</CardDescription>
          </Card>
        </ThankYouMessage>
      )}
    </div>
  );
}
