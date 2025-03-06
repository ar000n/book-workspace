import Image from 'next/image';
import Amenities from '@/app/components/Amenities';
import Cards from '@/app/components/Cards';
import DownloadApp from '@/app/components/DownloadApp';


export default function Home() {
  return (
    <div>
      <div className="flex w-full">
        <div 
          className="w-[65%] h-[500px] bg-cover bg-center bg-no-repeat relative" 
          style={{ backgroundImage: 'url("/bgImage.png")' }}
        >
          <div className="absolute top-1/2 transform -translate-y-1/2 left-12 max-w-[600px]">
            <h1 className="heading1">
              Host your meeting with world-class amenities. Starting at <span className="text-[var(--primary2)]">₹199/-!</span>
            </h1>
          </div>
        </div>
        <div className="w-[35%] flex items-center justify-center">
          <Image 
            src="/CoworkingVideo.svg"
            alt="Coworking Video"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
      <Amenities />
      <Cards />
      <DownloadApp />
    </div>
  );
}
