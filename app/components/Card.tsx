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

export default function Card({ name, images, day_pass_price, day_pass_discounts_percentage }: CardProps) {
return (
    <div className="rounded-lg max-w-[380px] overflow-hidden border border-[#EEE7E7CC] shadow-md">
    <div className="p-3">
        <div className="flex pb-2 place-content-between">

        <h4 className="heading4 mb-4  w-[80%]">{name}</h4>
        <div className="flex flex-col p-2 justify-center items-center border border-[#EEE7E7] bg-[#F9F9F9] h-[50px] max-w-[50px] w-[20%] rounded p-1">
            <Image
                src={'/icons/direction.svg'}
                alt={name}
                width={18}
                height={18}
            />
            <p className="text-xs pt-1 text-[#26323880]">6 km</p>
        </div>
        </div>

    <Image
        src={`/${images[0]}`}
        alt={name}
        width={400}
        height={250}
        className="w-full h-[250px] max-h-[220px] object-cover rounded"
    />
    <div className="pt-6">
        <div className="flex gap-4">
        <button className="flex-1 flex gap-2 place-content-between text-[##F9F9F9] border border-[#EEE7E7] py-2 px-4 rounded-md hover:opacity-90 transition-opacity">
        <div>
            <span className="block text-sm ">Day Pass</span>
            <span className="text-[var(--primary-text)] font-bold">₹{day_pass_price}</span> <span className="text-xs">/Day</span>
        </div>
            <Image src={'/icons/arrow.svg'} alt={"arrow"} width={12} height={12} />
        </button>
        <button className="flex-1 flex gap-2 place-content-between relative border-2 border-[#FFC422] bg-[var(--light-yellow)] text-black py-2 px-4 rounded-md hover:bg-[var(--primary2)]/10 transition-colors">
            <div>
                <span className="block text-sm text-left">Bulk Pass</span>
                <span className="text-[var(--primary-text)] font-bold">₹{day_pass_price*10}</span> <span className="text-xs text-left">/ 10 Days</span>
                <span className=" absolute top-0 -mt-2 left-1/2 -translate-x-1/2 bg-[var(--primary-text)] text-[#F9F9F9] text-[8px] rounded-md px-2 py-1 ">{day_pass_discounts_percentage[10].value}% Discount</span>
            </div>
            <Image src={'/icons/arrow.svg'} alt={"arrow"} width={12} height={12} />
        </button>
        </div>
    </div>
    </div>

    </div>
);
} 