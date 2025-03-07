import Image from 'next/image';

const amenitiesList = [
  {
    icon: '/icons/event.svg',
    title: 'Community Events',
    description: 'One liner detail about the feature'
  },
  {
    icon: '/icons/gym.svg',
    title: 'Gym Facilities',
    description: 'One liner detail about the feature'
  },
  {
    icon: '/icons/wifi.svg',
    title: 'High-Speed WiFi',
    description: 'One liner detail about the feature'
  },
  {
    icon: '/icons/tea.svg',
    title: 'Cafe & Tea Bar',
    description: 'One liner detail about the feature'
  },
  {
    icon: '/icons/rupee.svg',
    title: 'Affordable',
    description: 'One liner detail about the feature'
  },
  {
    icon: '/icons/lounge.svg',
    title: 'Comfort Lounges',
    description: 'One liner detail about the feature'
  },
  {
    icon: '/icons/timer.svg',
    title: 'Quick Booking',
    description: 'One liner detail about the feature'
  },
  {
    icon: '/icons/sport.svg',
    title: 'Sports Area',
    description: 'One liner detail about the feature'
  }
];

export default function Amenities() {
  return (
    <div className="py-16 px-5 md:px-25 bg-gray-50">
      <h2 className="heading2 text-[var(--primary-text)] mb-12">Why Choose us?</h2>
      <div className="grid grid-cols-2 px-5 md:grid-cols-4">
        {amenitiesList.map((amenity, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row justify-center items-center shadow-lg md:shadow-none group hover:bg-white hover:shadow-lg p-3 hover:rounded transition-all duration-300
              ${index % 2 !== 1 ? 'md:border-r border-gray-200' : ''} 
              ${index < amenitiesList.length - 4 ? 'md:border-b border-gray-200' : ''}
              md:border-r md:border-gray-200 md:last:border-r-0
              md:nth-4:border-r-0
              ${index < amenitiesList.length - 4 ? 'md:border-b' : ''}
            `}
          >
            <div className="px-4 ">
              <Image 
                src={amenity.icon} 
                alt={amenity.title} 
                width={28} 
                height={28} 
              />
            </div>
            <div className="flex flex-col pt-3 md:pt-6">
              <h5 className="heading5 text-center md:text-left group-hover:font-bold group-hover:-translate-y-2 transition-all duration-300">
                {amenity.title}
              </h5>
            <p className="text-sm text-gray-600 hidden lg:block group-hover:opacity-100 opacity-0 transition-opacity duration-300 bg-white">
              {amenity.description}
            </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}