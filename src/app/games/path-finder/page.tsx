'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { GridPathBuilderGame } from '@/components/GridPathBuilderGame';

export default function PathFinderPage() {
  const router = useRouter();

  return (
    <div className="w-full">
      <GridPathBuilderGame onBack={() => router.push('/games')} />
    </div>
  );
}
