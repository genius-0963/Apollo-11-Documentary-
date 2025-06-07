import SectionTitle from '../components/SectionTitle';
import Quote from '../components/Quote';
import MapView from '../components/MapView';

const Aftermath = () => {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle>Immediate Aftermath</SectionTitle>
        
        <div className="mb-12 slide-up">
          <p className="text-xl text-gray-200 mb-6">
            The successful completion of the Apollo 11 mission had immediate and far-reaching effects.
            From the jubilant celebration that followed the splashdown to the scientific analysis of
            lunar samples, the mission's aftermath was a period of intense activity and reflection.
          </p>
          
          <Quote 
            text="The important achievement of Apollo was demonstrating that humanity is not forever chained to this planet and our visions go rather further than that and our opportunities are unlimited."
            author="Neil Armstrong"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 fade-in">
          <div>
            <h3 className="text-2xl font-bold text-zinc-300 mb-4">Global Celebration</h3>
            <p className="mb-4">
              When Apollo 11 splashed down in the Pacific Ocean on July 24, 1969, it marked the
              successful completion of the most ambitious journey in human history. The astronauts
              were recovered by the USS Hornet and immediately placed in quarantine as a precaution
              against potential lunar pathogens—a reflection of how little was known about the Moon's
              environment.
            </p>
            <p className="mb-4">
              An estimated 650 million people worldwide had watched the Moon landing on television,
              and the return of the astronauts prompted global celebrations. President Nixon personally
              greeted the astronauts while they were still in their quarantine facility aboard the
              recovery ship.
            </p>
            <p>
              The astronauts were released from quarantine on August 10, 1969, and embarked on a
              world tour that took them to 24 countries in 45 days, where they were greeted by
              dignitaries and cheering crowds. They addressed a joint session of Congress and attended
              a state dinner in their honor at the Century Plaza Hotel in Los Angeles.
            </p>
          </div>
          
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg h-full">
              <img 
                src="https://images.nasa.gov/images/apollo11_parade_1969.jpg" 
                alt="Ticker tape parade for Apollo 11 astronauts" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-zinc-900/30 flex flex-col h-[calc(100%-16rem)]">
                <h4 className="text-xl font-semibold text-zinc-200 mb-2">Heroes' Welcome</h4>
                <p className="text-gray-300 flex-grow">
                  The Apollo 11 astronauts were celebrated with ticker tape parades in New York,
                  Chicago, and Los Angeles, attended by millions of people who lined the streets to
                  catch a glimpse of the men who had walked on the Moon.
                </p>
                <div className="mt-4 pt-4 border-t border-zinc-800 text-sm text-gray-400">
                  The crew was awarded the Presidential Medal of Freedom, the highest civilian honor
                  in the United States.
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-zinc-900/20 rounded-lg p-6 mb-12 slide-up">
          <h3 className="text-2xl font-bold text-zinc-300 mb-6">Scientific Discoveries</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-zinc-950/50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-zinc-200 mb-2">Lunar Samples</h4>
              <p className="text-gray-300">
                Apollo 11 returned 47.5 pounds (21.5 kg) of lunar material to Earth. Analysis revealed
                that the Moon's composition was similar to Earth's but with significantly less volatile
                elements, supporting the theory that the Moon formed from debris after a massive collision
                with Earth.
              </p>
            </div>
            
            <div className="bg-zinc-950/50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-zinc-200 mb-2">Moon's Age</h4>
              <p className="text-gray-300">
                Radiometric dating of lunar samples indicated that the Moon is about 4.5 billion years
                old, similar to Earth. This finding helped scientists refine theories about the
                formation of the solar system and provided a chronological anchor for studying
                planetary evolution.
              </p>
            </div>
            
            <div className="bg-zinc-950/50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-zinc-200 mb-2">Lunar Environment</h4>
              <p className="text-gray-300">
                The mission confirmed that the Moon has no atmosphere, magnetic field, or water.
                Its surface is covered in fine dust (regolith) created by billions of years of
                meteorite impacts. This hostile environment would present significant challenges
                for any future lunar habitation.
              </p>
            </div>
          </div>
          
          <p className="text-gray-200">
            Scientific instruments left on the lunar surface included a seismometer to detect
            moonquakes and a laser reflector array that is still used today to measure the exact
            distance between Earth and the Moon with centimeter precision. These measurements have
            revealed that the Moon is slowly drifting away from Earth at a rate of about 3.8 cm per year.
          </p>
        </div>
        
        <div className="mb-12 fade-in">
          <h3 className="text-2xl font-bold text-zinc-300 mb-6">The Landing Site</h3>
          <p className="mb-6 text-gray-200">
            Apollo 11 landed in the Sea of Tranquility (Mare Tranquillitatis), a relatively flat
            basaltic plain. The exact landing site, designated Tranquility Base, is located at
            0.67408° N, 23.47297° E. This area was chosen primarily for its flat terrain and
            relative lack of obstacles.
          </p>
          
          <MapView />
          
          <p className="mt-6 text-gray-300 text-sm">
            The landing site remains undisturbed to this day. In addition to the descent stage of
            the lunar module, the site contains scientific equipment, an American flag, and various
            discarded items including boots, tools, and waste containers. In 2011, NASA's Lunar
            Reconnaissance Orbiter captured detailed images of the site from orbit, showing the
            hardware left behind more than four decades earlier.
          </p>
        </div>
        
        <div className="bg-zinc-900/20 rounded-lg overflow-hidden slide-up">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-300 mb-4">Political Ramifications</h3>
              <p className="mb-4">
                The successful Moon landing fulfilled President Kennedy's pledge and represented a
                significant Cold War victory for the United States over the Soviet Union in the Space
                Race. Soviet Premier Alexei Kosygin sent a congratulatory telegram, and the Soviet
                press covered the mission extensively, though with less enthusiasm than Western media.
              </p>
              <p className="mb-4">
                The mission helped restore American confidence and prestige after a decade marked by
                the Vietnam War, civil unrest, and political assassinations. For a brief moment, the
                Moon landing united Americans and much of the world in celebration of a shared human
                achievement.
              </p>
              <p>
                President Nixon leveraged the success of Apollo 11 in pursuing his foreign policy
                objectives, including the opening of relations with China and détente with the Soviet
                Union. The demonstration of American technological superiority provided Nixon with
                additional diplomatic leverage in these negotiations.
              </p>
            </div>
            
            <div className="bg-zinc-950">
              <img 
                src="https://images.nasa.gov/images/apollo11_flag_1969.jpg" 
                alt="Apollo 11 astronaut with American flag on the Moon" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aftermath;