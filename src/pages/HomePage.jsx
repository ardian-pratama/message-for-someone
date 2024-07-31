import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Button className='m-auto w-fit' asChild>
      <Link to='/message'>
        <Mail className='mr-2 h-4 w-4' /> Open Messages
      </Link>
    </Button>
  );
}
