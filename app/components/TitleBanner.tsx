export default function TitleBanner() {
    return (
      <div className="flex w-full">
        <div 
          className="w-[70%] h-[450px] bg-cover bg-center bg-no-repeat relative flex items-center pl-25" 
          style={{ backgroundImage: 'url("/bgImage.png")' }}
        >
            <h1 className="heading1 max-w-[650px]">
              Host your meeting with world-class amenities. Starting at <span className="text-[var(--primary2)]">₹199/-!</span>
            </h1>
        </div>
        <div className="w-[35%] flex items-center">
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
      </div>
    );
  }