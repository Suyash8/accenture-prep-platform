'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { LockKeyMemoryGame } from '@/components/LockKeyMemoryGame';

export default function MemoryMazePage() {
  const router = useRouter();

  return (
    <div className="w-full">
      <LockKeyMemoryGame onBack={() => router.push('/games')} />
    </div>
  );
}
