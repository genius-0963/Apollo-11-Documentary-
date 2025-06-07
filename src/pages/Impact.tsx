import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Quote from '../components/Quote';
import VideoPlayer from '../components/VideoPlayer';

const Impact = () => {
  const [activeTab, setActiveTab] = useState('legacy');
  
  const tabs = [
    { id: 'legacy', label: 'Historical Legacy' },
    { id: 'technology', label: 'Technological Impact' },
    { id: 'cultural', label: 'Cultural Influence' },
    { id: 'future', label: 'Future of Space Exploration' }
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle>Long-Term Impact</SectionTitle>
        
        <div className="mb-12 slide-up">
          <p className="text-xl text-gray-200 mb-6">
            More than five decades after Apollo 11, the first Moon landing continues to resonate
            through history. Its technological, cultural, and geopolitical impacts have shaped
            our modern world in countless ways, and it remains a defining moment in human achievement.
          </p>
          
          <Quote 
            text="We came in peace for all mankind."
            author="Inscription on the plaque left on the Moon by Apollo 11 astronauts"
          />
        </div>
        
        {/* Tab navigation */}
        <div className="mb-8 overflow-x-auto fade-in">
          <div className="flex space-x-1 p-1 bg-zinc-900/30 rounded-lg inline-flex">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === tab.id 
                    ? 'bg-zinc-700 text-white' 
                    : 'hover:bg-zinc-800/50 text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab content */}
        <div className="bg-zinc-900/20 rounded-lg p-6 slide-up">
          {activeTab === 'legacy' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-zinc-300 mb-4">A Defining Human Achievement</h3>
                  <p className="mb-4">
                    The Apollo 11 mission represents one of humanity's greatest technological and
                    exploratory achievements. It demonstrated our species' ability to overcome
                    seemingly insurmountable challenges through innovation, cooperation, and determination.
                  </p>
                  <p>
                    The iconic images of humans on another world fundamentally changed our perspective
                    of Earth and our place in the universe. The "Earthrise" and "Blue Marble" photographs
                    taken during Apollo missions are credited with catalyzing the environmental movement
                    by showing Earth as a fragile oasis in the vastness of space.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=1600" 
                      alt="Earth from space" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 bg-zinc-950 text-sm">
                      The view of Earth from space changed humanity's perspective on our home planet.
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-zinc-300 mt-6 mb-4">End of the Space Race</h3>
              <p className="mb-4">
                Apollo 11 effectively ended the Space Race, with the United States achieving
                the ultimate goal of landing humans on the Moon. After Apollo 11, five more Apollo
                missions successfully landed on the lunar surface, with the program concluding in
                December 1972 with Apollo 17.
              </p>
              <p>
                After the Apollo program, space exploration shifted from competition to collaboration.
                The Apollo-Soyuz Test Project in 1975 symbolized this transition, with American and
                Soviet spacecraft docking in orbit. This cooperation eventually evolved into the
                International Space Station program, involving 15 nations including the United States
                and Russia.
              </p>
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-zinc-300 mb-4">Historical Preservation</h3>
                <p className="mb-4">
                  Recognizing the historical significance of the Apollo landing sites, NASA has
                  established guidelines for their preservation. In 2011, the agency released
                  recommendations for protecting these sites from future lunar missions, treating
                  them as archaeological treasures.
                </p>
                <p>
                  Several organizations have proposed designating Tranquility Base as a UNESCO World
                  Heritage Site, though current treaties prevent any nation from claiming territory
                  on the Moon. The artifacts at the landing site, including the descent stage, scientific
                  equipment, and even the astronauts' footprints, remain perfectly preserved in the
                  airless, weatherless lunar environment.
                </p>
              </div>
            </div>
          )}
          
          {activeTab === 'technology' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-zinc-300 mb-4">Technological Spinoffs</h3>
                  <p className="mb-4">
                    The technology developed for the Apollo program has had far-reaching impacts on
                    everyday life. NASA has documented over 2,000 spinoff technologies originating
                    from the space program, many stemming directly from Apollo-era research.
                  </p>
                  <p>
                    These innovations include advancements in computing, materials science, healthcare,
                    and consumer products. The miniaturization requirements for spacecraft components
                    directly contributed to the development of integrated circuits that power modern
                    electronics and computers.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                      alt="Modern computer technology" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 bg-zinc-950 text-sm">
                      The Apollo program accelerated computing advancements that led to modern digital technology.
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-zinc-300 mt-6 mb-4">Practical Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-zinc-950/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-zinc-200 mb-2">Healthcare</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Digital imaging technology</li>
                    <li>Implantable heart monitors</li>
                    <li>Improved kidney dialysis machines</li>
                    <li>CAT scanners and MRI technology</li>
                  </ul>
                </div>
                
                <div className="bg-zinc-950/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-zinc-200 mb-2">Consumer Products</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Memory foam</li>
                    <li>Freeze-dried food technology</li>
                    <li>Cordless tools</li>
                    <li>Water purification systems</li>
                  </ul>
                </div>
                
                <div className="bg-zinc-950/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-zinc-200 mb-2">Safety</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Fireproof materials</li>
                    <li>Improved smoke detectors</li>
                    <li>Lightweight breathing apparatus for firefighters</li>
                    <li>Radiation barrier technology</li>
                  </ul>
                </div>
              </div>
              
              <p>
                Beyond specific products, the Apollo program pioneered systems engineering and project
                management techniques that are now standard in industries ranging from construction
                to software development. The concept of "failure is not an option" and rigorous
                testing procedures have influenced quality control and safety standards worldwide.
              </p>
            </div>
          )}
          
          {activeTab === 'cultural' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-zinc-300 mb-4">In Popular Culture</h3>
                  <p className="mb-4">
                    The Moon landing has been portrayed in numerous films, including "The Right Stuff,"
                    "Apollo 13," "First Man," and documentaries like "In the Shadow of the Moon" and
                    "Apollo 11." These works have helped preserve the memory of this achievement for
                    generations born after the event.
                  </p>
                  <p>
                    Neil Armstrong's famous words, "That's one small step for man, one giant leap for
                    mankind," have become one of the most recognized quotes in history, embedded in
                    our collective consciousness and frequently referenced in popular culture.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <VideoPlayer 
                    videoId="dQw4w9WgXcQ"
                    title="Apollo 11 Moon Landing (1969)"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-zinc-300 mt-6 mb-4">Inspiration and Education</h3>
              <p className="mb-4">
                The Apollo program inspired a generation of scientists, engineers, and explorers.
                Many leaders in technology and aerospace cite watching the Moon landing as children
                as a formative experience that shaped their career choices.
              </p>
              <p className="mb-4">
                Educational initiatives related to space exploration surged following Apollo, with
                increased emphasis on STEM education. The mission continues to serve as a powerful
                teaching tool about human ingenuity, courage, and the value of setting ambitious goals.
              </p>
              <p>
                The Moon landing also remains a powerful symbol of human potential. It is frequently
                invoked as a benchmark for ambitious technological challenges, as in the phrase,
                "If we can put a man on the Moon, why can't we...?"
              </p>
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-zinc-300 mb-4">Conspiracy Theories</h3>
                <p className="mb-4">
                  Despite overwhelming evidence, a small minority of people believe the Moon landings
                  were faked. These conspiracy theories emerged in the 1970s and persist despite
                  scientific refutation. The existence of these theories demonstrates the event's
                  significance—few historical events generate such elaborate alternative narratives.
                </p>
                <p>
                  The conspiracy theories have been thoroughly debunked by multiple lines of evidence,
                  including independent verification of lunar landings by other countries' space
                  programs, analysis of lunar samples by scientists worldwide, and the visibility of
                  landing sites by modern lunar orbiters.
                </p>
              </div>
            </div>
          )}
          
          {activeTab === 'future' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-zinc-300 mb-4">Return to the Moon</h3>
                  <p className="mb-4">
                    After decades of focusing on low Earth orbit, space agencies are once again setting
                    their sights on the Moon. NASA's Artemis program aims to land the first woman and
                    next man on the lunar surface and establish sustainable exploration by 2024.
                  </p>
                  <p>
                    Unlike Apollo, Artemis is international in scope, with contributions from the
                    European Space Agency, Japan, Canada, and other partners. The program includes
                    plans for a Lunar Gateway space station in orbit around the Moon and a sustainable
                    base camp on the lunar surface.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.pexels.com/photos/586043/pexels-photo-586043.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                      alt="Modern spacecraft concept" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 bg-zinc-950 text-sm">
                      New spacecraft are being developed to return humans to the Moon and venture beyond.
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-zinc-300 mt-6 mb-4">The Commercial Space Era</h3>
              <p className="mb-4">
                A significant difference between Apollo and modern space exploration is the emergence
                of commercial space companies. Firms like SpaceX, Blue Origin, and others are
                developing lunar landers, habitats, and transportation systems, sometimes in
                partnership with NASA and sometimes independently.
              </p>
              <p>
                This commercialization has the potential to reduce costs and increase access to space,
                possibly enabling a permanent human presence on the Moon and eventually Mars. The Apollo
                program demonstrated what was possible with government funding; the commercial space
                industry aims to make space exploration sustainable and economically viable.
              </p>
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-zinc-300 mb-4">Legacy as a Stepping Stone</h3>
                <p className="mb-4">
                  While Apollo 11 marked a pinnacle of human exploration, it was always intended as
                  a stepping stone to further space exploration. As we look toward returning to the
                  Moon and eventually sending humans to Mars, the lessons and technologies of Apollo
                  continue to inform modern mission planning.
                </p>
                <p className="mb-4">
                  The Apollo program proved that humans can travel to and work on other worlds, overcoming
                  extreme challenges of distance, environment, and technology. This fundamental
                  demonstration remains the bedrock upon which all future human exploration of the
                  solar system will be built.
                </p>
                <p>
                  As humanity contemplates establishing permanent settlements beyond Earth, the
                  achievement of Apollo 11 serves as both inspiration and instruction—a reminder of
                  what we are capable of when we direct our collective will and resources toward a
                  common, ambitious goal.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Impact;