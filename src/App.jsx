import { Toaster } from '@/components/ui/sonner';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className='flex min-h-dvh flex-col bg-muted/40 p-5 text-sm'>
      <Toaster position='top-right' />
      <div className="w-full max-w-sm mx-auto">
      <Outlet />
      </div>
    </div>
  );
}
