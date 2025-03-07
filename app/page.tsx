import Amenities from '@/app/components/Amenities';
import Cards from '@/app/components/Cards';
import DownloadApp from '@/app/components/DownloadApp';
import TitleBanner from '@/app/components/TitleBanner';

export default function Home() {
  return (
    <>
      <TitleBanner />
      <Amenities />
      <Cards />
      <DownloadApp />
    </>
  );
}
