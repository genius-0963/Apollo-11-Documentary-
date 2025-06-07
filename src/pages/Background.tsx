import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Quote from '../components/Quote';

const Background = () => {
  const [activeTab, setActiveTab] = useState('space-race');
  
  const tabs = [
    { id: 'space-race', label: 'The Space Race' },
    { id: 'cold-war', label: 'Cold War Context' },
    { id: 'nasa', label: 'NASA & Apollo Program' },
    { id: 'preparation', label: 'Mission Preparation' }
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle>Background & Context</SectionTitle>
        
        <div className="mb-12 slide-up">
          <p className="text-xl text-gray-200 mb-6">
            The Apollo 11 mission didn't happen in isolation. It was the culmination of years of scientific
            advancement, political tension, and human ambition. Understanding the historical context
            helps us appreciate the true significance of this monumental achievement.
          </p>
          
          <Quote 
            text="We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard."
            author="President John F. Kennedy, 1962"
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
          {activeTab === 'space-race' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-zinc-300 mb-4">The Space Race Begins</h3>
                  <p className="mb-4">
                    The Space Race began in earnest with the Soviet Union's launch of Sputnik 1, the world's
                    first artificial satellite, on October 4, 1957. This technological achievement shocked
                    the United States and ignited fears of Soviet technological superiority during the
                    height of the Cold War.
                  </p>
                  <p>
                    What followed was an intense competition between the two superpowers to achieve
                    increasingly ambitious milestones in space exploration. The Soviets initially led
                    with a series of firsts: first animal in orbit (Laika, 1957), first human in space
                    (Yuri Gagarin, 1961), and first woman in space (Valentina Tereshkova, 1963).
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.pexels.com/photos/23769/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600" 
                      alt="Rocket launch representing the Space Race" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 bg-zinc-950 text-sm">
                      The launch of powerful rockets became a symbol of national technological prowess
                      during the Space Race.
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-zinc-300 mt-6 mb-4">Kennedy's Challenge</h3>
              <p className="mb-4">
                After Soviet cosmonaut Yuri Gagarin became the first human in space on April 12, 1961,
                President John F. Kennedy sought a space achievement that could leapfrog the Soviet Union.
                On May 25, 1961, in an address to Congress, Kennedy committed the United States to the
                ambitious goal of "landing a man on the Moon and returning him safely to the Earth" before
                the end of the decade.
              </p>
              <p>
                This bold declaration transformed the Space Race from a series of incremental firsts to
                a focused lunar objective. It galvanized American scientific and engineering talent and
                resulted in unprecedented funding for space exploration through NASA.
              </p>
            </div>
          )}
          
          {activeTab === 'cold-war' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-zinc-300 mb-4">Superpower Rivalry</h3>
                  <p className="mb-4">
                    The Apollo program emerged during one of the most tense periods of the Cold War. The 1960s
                    saw the Cuban Missile Crisis, the construction of the Berlin Wall, and escalating
                    involvement in Vietnam. Space exploration became a crucial arena for demonstrating
                    technological and ideological superiority.
                  </p>
                  <p>
                    For both the United States and Soviet Union, achievements in space carried significant
                    propaganda value. They demonstrated not just scientific capability, but also implied
                    military potential through rocket technology that could be applied to intercontinental
                    ballistic missiles.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.pexels.com/photos/158729/rock-landscape-rocks-moon-158729.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                      alt="The Moon surface" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 bg-zinc-950 text-sm">
                      The Moon became the ultimate prize in the Cold War competition between superpowers.
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-zinc-300 mt-6 mb-4">Political Significance</h3>
              <p className="mb-4">
                The Moon landing represented an opportunity to demonstrate Western technological
                superiority and the effectiveness of democratic capitalism against Soviet communism.
                The political stakes were enormous, with international prestige and geopolitical
                influence hanging in the balance.
              </p>
              <p>
                The investment in Apollo—which would eventually cost approximately $25.4 billion
                (about $150 billion in today's dollars)—was justified to the American public primarily
                on the basis of national security and global leadership, not scientific discovery.
              </p>
            </div>
          )}
          
          {activeTab === 'nasa' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-zinc-300 mb-4">NASA's Formation and Growth</h3>
                  <p className="mb-4">
                    The National Aeronautics and Space Administration (NASA) was established in 1958 as
                    a direct response to Sputnik. The new civilian agency quickly absorbed existing
                    research organizations and began an ambitious program of human spaceflight.
                  </p>
                  <p>
                    Under the pressure of Kennedy's lunar deadline, NASA's budget and workforce expanded
                    dramatically. At its peak in 1966, NASA employed nearly 36,000 people directly, with
                    400,000 more working for contractors on space-related projects.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1600" 
                      alt="NASA astronaut in space" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 bg-zinc-950 text-sm">
                      NASA astronauts trained extensively for the challenges of space exploration and lunar missions.
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-zinc-300 mt-6 mb-4">The Apollo Program</h3>
              <p className="mb-4">
                The Apollo program was announced in 1960 as a follow-up to Project Mercury, but it was
                Kennedy's 1961 address that defined its ultimate goal. Before Apollo 11 could make its
                historic journey, NASA had to develop entirely new technologies, procedures, and
                capabilities.
              </p>
              <p className="mb-4">
                Early Apollo development was marred by tragedy when Apollo 1 astronauts Gus Grissom,
                Ed White, and Roger Chaffee died in a cabin fire during a launch rehearsal test on
                January 27, 1967. This disaster led to major redesigns and a renewed commitment to
                astronaut safety.
              </p>
              <p>
                Subsequent missions tested components and procedures incrementally. Apollo 8 orbited
                the Moon in December 1968, and Apollo 10 performed a "dress rehearsal" in May 1969,
                testing all components except the actual landing. These successes paved the way for
                Apollo 11's historic mission.
              </p>
            </div>
          )}
          
          {activeTab === 'preparation' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-zinc-300 mb-4">The Crew Selection</h3>
                  <p className="mb-4">
                    The Apollo 11 crew was officially announced on January 9, 1969, consisting of
                    Commander Neil Armstrong, Command Module Pilot Michael Collins, and Lunar Module
                    Pilot Edwin "Buzz" Aldrin. All three were experienced pilots and had flown on
                    previous Gemini missions.
                  </p>
                  <p>
                    Armstrong, a former naval aviator and test pilot, was selected as commander and
                    would become the first person to step on the lunar surface. This decision was
                    officially explained as being based on the physical configuration of the lunar
                    module's hatch, but also reflected Armstrong's seniority and temperament.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                      alt="Apollo 11 astronaut on the lunar surface" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 bg-zinc-950 text-sm">
                      The Apollo 11 astronauts underwent rigorous training for their historic mission.
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-zinc-300 mt-6 mb-4">Training and Preparation</h3>
              <p className="mb-4">
                The astronauts underwent intensive training for every aspect of the mission. They
                practiced in lunar module simulators, studied geology to prepare for lunar sample
                collection, and rehearsed contingency procedures for countless potential emergencies.
              </p>
              <p className="mb-4">
                NASA engineers and scientists selected the Sea of Tranquility as the landing site for
                its relatively flat terrain. Five potential landing areas were identified, with the
                final choice to be made based on lighting conditions at the time of arrival.
              </p>
              <p>
                The Saturn V rocket—still the most powerful ever flown successfully—underwent extensive
                testing. Standing 363 feet tall and generating 7.6 million pounds of thrust at launch,
                it represented the culmination of rocket development under the direction of Wernher
                von Braun and his team.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Background;