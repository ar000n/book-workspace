export default function TitleBanner() {
    return (
      <div className="flex flex-col md:flex-row-reverse w-full">
        
        <div className="md:w-[35%] flex items-center">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="object-contain w-[400px] h-[400px]"
          >
            <source src="/coworker.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div 
          className="md:w-[70%] h-[45  0px] bg-cover bg-center bg-no-repeat relative flex items-center pl-5 md:pl-25" 
          style={{ backgroundImage: 'url("/bgImage.png")' }}
        >
            <h1 className="text-xl md:text-5xl lg:text-6xl font-bold max-w-[650px]">
              Host your meeting with world-class amenities. Starting at <span className="text-[var(--primary2)]">₹199/-!</span>
            </h1>
        </div>
      </div>
    );
  }