import { Toaster } from '@/components/ui/sonner';
import { Outlet } from 'react-router-dom';

export default function App() {
	return (
		<div className='bg-muted/40 text-sm'>
			<Toaster position='top-right' />
			<div className='w-full h-dvh max-w-sm mx-auto p-5'>
				<Outlet />
			</div>
		</div>
	);
}
