'use client';

import Image from 'next/image';

export default function DownloadApp() {
  return (
    <div className="py-12 px-12">
      <h2 className="heading2 mb-50">Download our app now</h2>
      <div className=" w-full h-[265px] bg-white relative border border-[#EEE7E7CC] rounded-[18px] shadow-[0_0_10px_rgba(0,0,0,0.06)]">
        <div className="w-1/2 absolute bottom-0 left-10">
          <Image 
            src="/mobileScreen.svg"
            alt="BHIVE Mobile App"
            width={400}
            height={600}
            className="object-contain"
          />
        </div>
        <div className="w-1/2 flex float-right flex-col justify-center px-12">
          <div className="max-w-[500px]">
            <p className="text-xl mb-8">
              Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.
            </p>
            <div className="flex gap-6">
              <Image 
                src="/appstore.png"
                alt="Download on App Store"
                width={135}
                height={40}
                className="cursor-pointer hover:opacity-90 transition-opacity"
              />
              <Image 
                src="/googlePlay.png"
                alt="Get it on Google Play"
                width={135}
                height={40}
                className="cursor-pointer hover:opacity-90 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 