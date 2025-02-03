import React, { useState } from 'react';
import { Heart, X, Music } from 'lucide-react';

function App() {
  const [name, setName] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showError, setShowError] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.toLowerCase() === 'haero') {
      setIsUnlocked(true);
      setShowError(false);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    }
  };

  const dateItinerary = [
    {
      time: "10:00 AM",
      activity: "Morning Picnic at Cherry Blossom Park",
      description: "Starting our day with fresh pastries and hot chocolate under blooming cherry trees",
      image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&q=80&w=800",
      position: "left"
    },
    {
      time: "12:30 PM",
      activity: "Art Gallery Visit",
      description: "Exploring the new contemporary art exhibition together",
      image: "https://images.unsplash.com/photo-1577720643272-265f09367456?auto=format&fit=crop&q=80&w=800",
      position: "right"
    },
    {
      time: "3:00 PM",
      activity: "Private Concert Experience",
      description: "A magical musical journey featuring our special songs:\n\n♪ Can't Help Falling in Love\n♪ Perfect\n♪ All of Me",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=800",
      position: "center"
    },
    {
      time: "6:00 PM",
      activity: "Sunset Rooftop Dinner",
      description: "Romantic dinner with city views and live music",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
      position: "left"
    },
    {
      time: "8:30 PM",
      activity: "Stargazing",
      description: "Ending our perfect day under the stars",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800",
      position: "right"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12">
      {!isUnlocked ? (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-32">
              <img 
                src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80&w=800"
                alt="Cute bunny pattern"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            <div className="relative">
              <h1 className="text-3xl font-bold text-pink-600 text-center mb-6">
                Our Special Date ♥
              </h1>
              <p className="text-gray-600 text-center mb-8">
                To unlock our magical day together, please enter your name
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border-2 border-pink-200 focus:border-pink-400 focus:outline-none"
                  placeholder="Enter your name..."
                />
                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2"
                >
                  <Heart size={20} />
                  Unlock Our Date
                </button>
              </form>
              {showError && (
                <div className="mt-4 p-3 bg-red-100 text-red-600 rounded-lg flex items-center gap-2">
                  <X size={18} />
                  <span>That's not your name, silly!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-pink-600 text-center mb-12">
            Our Magical Day Together ♥
          </h1>
          <div className="max-w-6xl mx-auto relative">
            {/* Background road */}
            <div className="absolute top-1/2 left-0 right-0 -z-10">
              <div className="road"></div>
            </div>

            {dateItinerary.map((item, index) => (
              <div 
                key={index}
                className={`
                  relative mb-24 perspective-1000
                  ${item.position === 'left' ? 'ml-0 mr-auto' : 
                    item.position === 'right' ? 'ml-auto mr-0' : 'mx-auto'}
                  ${item.position === 'center' ? 'max-w-[250px]' : 'max-w-[250px]'}
                `}
                style={{
                  transform: `
                    ${item.position === 'left' ? 'translateX(15%) rotate(-3deg)' :
                    item.position === 'right' ? 'translateX(-15%) rotate(3deg)' : 'rotate(0deg)'}
                  `
                }}
              >
                <div 
                  className="relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div 
                    className={`
                      transform-style-3d transition-all duration-500 h-[400px]
                      ${hoveredCard === index ? 'rotate-y-180 scale-105' : ''}
                      cursor-pointer
                    `}
                  >
                    {/* Front of the polaroid */}
                    <div className="absolute w-full h-full backface-hidden polaroid">
                      <div className="relative h-full">
                        <img 
                          src={item.image}
                          alt={item.activity}
                          className="w-full h-[85%] object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
                          <p className="text-pink-500 font-medium text-sm">{item.time}</p>
                          <h3 className="font-handwriting text-lg font-bold text-gray-800 truncate">
                            {item.activity}
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* Back of the polaroid */}
                    <div className="absolute w-full h-full backface-hidden rotate-y-180 polaroid bg-pink-50">
                      <div className="h-full flex flex-col justify-center items-center text-center p-4">
                        <div className="bg-pink-100 rounded-full p-3 mb-4">
                          {index === 2 ? (
                            <Music className="text-pink-500" size={24} />
                          ) : (
                            <Heart className="text-pink-500" size={24} />
                          )}
                        </div>
                        <p className="font-handwriting text-lg text-gray-800 leading-relaxed whitespace-pre-line">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;