'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect user to home after small delay
    const timeout = setTimeout(() => {
      router.replace('/');
    }, 100);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="h-screen flex items-center justify-center bg-[#0a1420] text-white">
      <p className="text-lg font-light">
        Redirecting to <span className="bg-gradient-to-r from-royalblue to-white bg-clip-text text-transparent font-medium">Home</span>...
      </p>
    </div>
  );
}
