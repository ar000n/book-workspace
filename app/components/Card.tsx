'use client';

import Image from 'next/image';

interface CardProps {
  id: string;
  name: string;
  images: string[];
  day_pass_price: number;
  day_pass_discounts_percentage: {
    [key: string]: {
      value: number;
      message: string;
    };
  };
}

export default function Card({ id, name, images, day_pass_price, day_pass_discounts_percentage }: CardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <Image
        src={`/${images[0]}`}
        alt={name}
        width={400}
        height={250}
        className="w-full h-[250px] object-cover"
      />
      <div className="p-6">
        <h3 className="heading5 mb-4">{name}</h3>
        <div className="flex gap-4">
          <button className="flex-1 bg-[var(--primary2)] text-black py-2 px-4 rounded-md hover:opacity-90 transition-opacity">
            <span className="block text-sm">Day Pass</span>
            <span className="block font-bold">₹{day_pass_price}</span>
          </button>
          <button className="flex-1 border-2 border-[var(--primary2)] text-black py-2 px-4 rounded-md hover:bg-[var(--primary2)]/10 transition-colors">
            <span className="block text-sm">Bulk Pass</span>
            <span className="block font-bold">20% Off</span>
          </button>
        </div>
      </div>
    </div>
  );
} 