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
					description: '1.000.000 terima kasih cukup lah ye kan 😁'
				});
			}, 1000);
		}, 21000);

		return () => {
			clearTimeout(showThankYouTimer);
		};
	}, []);

	const messages = [
		{
			text: 'Teruntuk abang/kakak yang membaca pesan ini, terima kasih atas segala kebaikan dan kemurahan hatinya selama membimbing dan membantu kami dalam proses pendaftaran kip-k sampai detik ini.'
		},
		{
			text: 'Berkat bimbingan dan bantuan abang/kakak kami berhasil melalui berbagai kendala selama proses tersebut.',
			textDelay: 12000,
			componentDelay: 11
		},
		{
			text: 'Atas segala kebaikannya saya ucapkan...',
			textDelay: 19000,
			componentDelay: 18
		}
	];

	return (
		<div className='max-w-sm mx-auto'>
			<div className='flex flex-col gap-2'>
				{messages.map(({ text, textDelay, componentDelay }, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: '50%' }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 1,
							delay: componentDelay ?? 0
						}}
						className='flex gap-2 w-96'
					>
						<Avatar className='aspect-square h-8 w-8'>
							<AvatarImage
								src={avatar}
								alt='Tanpa Nama'
							/>
							<AvatarFallback>TN</AvatarFallback>
						</Avatar>
						<Card className='max-w-sm p-2'>
							<CardTitle className='mb-1 text-sm'>
								Tanpa Nama
							</CardTitle>
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
								alt='Tanpa Nama'
							/>
							<AvatarFallback>TN</AvatarFallback>
						</Avatar>
						<Card className='max-w-sm p-2'>
							<CardTitle className='mb-1 text-sm'>
								Tanpa Nama
							</CardTitle>
							<CardDescription>Terima kasih 🙏</CardDescription>
						</Card>
					</ThankYouMessage>
				)}
			</div>
		</div>
	);
}
