'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { MathOrderChallenge } from '@/components/MathOrderChallenge';

export default function MathGamePage() {
  const router = useRouter();

  return (
    <div className="w-full">
      <MathOrderChallenge onBack={() => router.push('/games')} />
    </div>
  );
}
