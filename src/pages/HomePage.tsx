import { ChevronDown } from 'lucide-react';

const HomePage = () => {
  const scrollToBackground = () => {
    document.getElementById('background')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Hero content */}
      <div className="z-10 px-4 max-w-4xl mx-auto fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          <span className="text-zinc-300">Apollo 11:</span> The First Moon Landing
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          July 20, 1969 — "That's one small step for man, one giant leap for mankind."
        </p>
        
        <div className="relative rounded-lg overflow-hidden mb-8 shadow-xl">
          <img 
            src="https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Apollo 11 Moon Landing" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-left">
            <p className="text-sm text-gray-300">
              The Apollo 11 mission marked the first time humans set foot on a celestial body beyond Earth.
            </p>
          </div>
        </div>
        
        <div className="prose prose-lg prose-invert mx-auto mb-12">
          <p className="lead text-gray-100">
            On July 20, 1969, NASA astronauts Neil Armstrong and Buzz Aldrin became the first humans
            to walk on the lunar surface while Michael Collins orbited above in the command module.
            This historic achievement represented the culmination of the Space Race and humanity's
            innate desire to explore the unknown.
          </p>
          
          <p className="text-gray-300">
            This educational website presents the complete story of the Apollo 11 mission — from the
            Cold War space race that propelled it, through the dramatic days of the mission itself,
            to its profound and lasting impact on human history and space exploration.
          </p>
        </div>
        
        <button 
          onClick={scrollToBackground}
          className="group flex flex-col items-center text-gray-300 hover:text-white transition animate-bounce"
        >
          <span className="mb-2">Continue Exploring</span>
          <ChevronDown size={24} className="group-hover:translate-y-1 transition" />
        </button>
      </div>
      
      {/* Large decorative moon in background */}
      <div 
        className="absolute opacity-20 w-[600px] h-[600px] rounded-full bg-gray-200 right-[-200px] top-[10%]"
        style={{ 
          boxShadow: 'inset -30px -30px 80px rgba(0,0,0,0.5), 20px 20px 80px rgba(255,255,255,0.1)'
        }}
      ></div>
    </div>
  );
};

export default HomePage;