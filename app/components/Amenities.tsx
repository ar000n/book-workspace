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
    <div className="py-16 px-12 bg-gray-50">
      <h2 className="heading2 mb-12">Why Choose us?</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {amenitiesList.map((amenity, index) => (
          <div key={index} className="flex flex-col text-center group relative">
            <div className="flex items-center gap-2 mb-2">
              <Image 
                src={amenity.icon} 
                alt={amenity.title} 
                width={24} 
                height={24} 
              />
              <h5 className="heading5">{amenity.title}</h5>
            </div>
            <p className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-full left-0 right-0 bg-white p-2 shadow-lg rounded-md">
              {amenity.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}