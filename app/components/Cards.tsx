'use client';

import Card from './Card';
import { useCenter } from '@/context/centerContext';

export default function Cards() {
  const { centerData, loading } = useCenter();

  if (loading) {
    return (
      <div className="py-16 px-25">
        <h2 className="heading2 mb-12 text-[var(--primary-text)]">Our Space Overview</h2>
        <div className="flex justify-center">
          Loading centers...
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-25">
      <h2 className="heading2 mb-12 text-[var(--primary-text)]">Our Space Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {centerData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
} 