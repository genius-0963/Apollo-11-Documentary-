export interface TimelineEvent {
  id: string;
  date: string;
  time: string;
  title: string;
  description: string;
  image: string;
  quote?: string;
  quoteAuthor?: string;
  facts?: string[];
}

export const timelineData: TimelineEvent[] = [
  {
    id: 'launch',
    date: 'July 16, 1969',
    time: '9:32 AM EDT',
    title: 'Launch from Kennedy Space Center',
    description: 'Apollo 11 launched from Cape Kennedy on a Saturn V rocket. The spacecraft carried Commander Neil Armstrong, Command Module Pilot Michael Collins, and Lunar Module Pilot Edwin "Buzz" Aldrin. Approximately 1 million spectators watched the launch from the highways and beaches around the launch site.',
    image: 'https://images.pexels.com/photos/2166/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=1600',
    quote: 'We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard.',
    quoteAuthor: 'President John F. Kennedy, 1962',
    facts: [
      'The Saturn V rocket stood 363 feet tall',
      'It generated 7.6 million pounds of thrust at liftoff',
      'The launch vehicle weighed 6.2 million pounds',
      'This was the first manned launch of the Saturn V rocket'
    ]
  },
  {
    id: 'earth-orbit',
    date: 'July 16, 1969',
    time: '9:44 AM EDT',
    title: 'Earth Orbit and Translunar Injection',
    description: 'Apollo 11 entered Earth orbit 12 minutes after launch. After one and a half orbits, the S-IVB third-stage engine pushed the spacecraft onto its trajectory toward the Moon with a burn of five minutes and 48 seconds. This maneuver, known as translunar injection, placed Apollo 11 on a path to the Moon.',
    image: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=1600',
    facts: [
      'The spacecraft reached a speed of 24,200 mph',
      'The journey to the Moon would take approximately 76 hours',
      'The spacecraft separated from the third stage 30 minutes after translunar injection',
      'The crew then extracted the Lunar Module from its housing on the S-IVB'
    ]
  },
  {
    id: 'lunar-orbit',
    date: 'July 19, 1969',
    time: '1:28 PM EDT',
    title: 'Lunar Orbit Insertion',
    description: 'After traveling 240,000 miles in 76 hours, Apollo 11 entered lunar orbit. The spacecraft circled the Moon 30 times over the next day, taking photographs of the surface and scouting the landing site in the Sea of Tranquility.',
    image: 'https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-39896.jpeg?auto=compress&cs=tinysrgb&w=1600',
    facts: [
      'The crew conducted a thorough checkout of the Lunar Module systems',
      'They made 30 orbits of the Moon before the landing',
      'The planned landing site was chosen for its relatively flat terrain',
      'The crew could see the lunar surface clearly through the windows'
    ]
  },
  {
    id: 'eagle-separation',
    date: 'July 20, 1969',
    time: '1:46 PM EDT',
    title: 'Eagle Separates from Columbia',
    description: 'The Lunar Module Eagle, with Armstrong and Aldrin aboard, separated from the Command Module Columbia, where Collins remained in orbit. Eagle began its descent to the lunar surface while Columbia continued to orbit the Moon.',
    image: 'https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg?auto=compress&cs=tinysrgb&w=1600',
    quote: 'The Eagle has wings!',
    quoteAuthor: 'Neil Armstrong',
    facts: [
      'Michael Collins was alone in the Command Module during the landing',
      'The Lunar Module had never been tested with humans aboard in the lunar environment',
      'The two spacecraft would remain separated for 21.5 hours',
      'If the landing failed, Armstrong and Aldrin would return to Columbia'
    ]
  },
  {
    id: 'landing',
    date: 'July 20, 1969',
    time: '4:17 PM EDT',
    title: 'Lunar Landing',
    description: 'Eagle landed in the Sea of Tranquility with less than 30 seconds of fuel remaining. Armstrong had to manually pilot the craft past an area strewn with boulders. Upon landing, Armstrong reported, "Houston, Tranquility Base here. The Eagle has landed." Mission Control erupted in celebration as the tension broke.',
    image: 'https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-39896.jpeg?auto=compress&cs=tinysrgb&w=1600',
    quote: 'Houston, Tranquility Base here. The Eagle has landed.',
    quoteAuthor: 'Neil Armstrong',
    facts: [
      'Armstrong had to pilot the Lunar Module manually past a boulder field',
      'Only 20 seconds of landing fuel remained when they touched down',
      'The landing site was four miles downrange from the planned location',
      'The first words spoken from the lunar surface were about the condition of the spacecraft'
    ]
  },
  {
    id: 'first-step',
    date: 'July 20, 1969',
    time: '10:56 PM EDT',
    title: 'First Steps on the Moon',
    description: 'Six and a half hours after landing, Armstrong emerged from the Eagle and deployed the TV camera for transmission of the event to Earth. As he made his way down the ladder, he declared: "That\'s one small step for man, one giant leap for mankind." Aldrin joined him on the surface about 19 minutes later.',
    image: 'https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1600',
    quote: "That's one small step for man, one giant leap for mankind.",
    quoteAuthor: 'Neil Armstrong',
    facts: [
      'Over 600 million people watched the moonwalk on television',
      'Armstrong intended to say "one small step for a man" but the "a" was not audible',
      'The astronauts spent 2 hours and 31 minutes outside the lunar module',
      'They collected 47.5 pounds (21.5 kg) of lunar samples'
    ]
  },
  {
    id: 'activities',
    date: 'July 20, 1969',
    time: '11:15 PM EDT',
    title: 'Lunar Surface Activities',
    description: 'Armstrong and Aldrin planted the U.S. flag, collected lunar soil samples, set up scientific experiments, took photographs, and spoke with President Nixon via radio. They spent a total of 2 hours and 31 minutes outside the lunar module before returning to prepare for liftoff.',
    image: 'https://images.pexels.com/photos/41005/moon-landing-apollo-11-nasa-buzz-aldrin-41005.jpeg?auto=compress&cs=tinysrgb&w=1600',
    quote: "Magnificent desolation.",
    quoteAuthor: 'Buzz Aldrin, describing the lunar landscape',
    facts: [
      'The astronauts left behind a plaque reading "We came in peace for all mankind"',
      'Scientific instruments included a seismometer and laser reflector',
      'President Nixon\'s phone call was the first made from Earth to another celestial body',
      'The flag was specially designed with a rod to make it appear to be waving in the airless environment'
    ]
  },
  {
    id: 'lunar-liftoff',
    date: 'July 21, 1969',
    time: '1:54 PM EDT',
    title: 'Lunar Liftoff and Return Journey',
    description: 'After 21 hours and 36 minutes on the lunar surface, Eagle\'s ascent stage fired its engine and lifted off. It docked with Columbia at 5:35 PM EDT. The astronauts transferred the lunar samples to the Command Module and jettisoned the Eagle, beginning their journey back to Earth.',
    image: 'https://images.pexels.com/photos/21696/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600',
    facts: [
      'The Lunar Module ascent engine had to work—there was no backup',
      'If the rendezvous with Columbia had failed, Armstrong and Aldrin would have been stranded',
      'The ascent stage of the Lunar Module was left in lunar orbit',
      'It is believed to have crashed into the lunar surface months later'
    ]
  },
  {
    id: 'splashdown',
    date: 'July 24, 1969',
    time: '12:50 PM EDT',
    title: 'Splashdown',
    description: 'Apollo 11 splashed down in the Pacific Ocean, 812 nautical miles southwest of Hawaii and 12 nautical miles from the USS Hornet. The astronauts were immediately placed in quarantine as a precaution against possible lunar pathogens. The mission was declared a complete success.',
    image: 'https://images.pexels.com/photos/40004/space-shuttle-atlantis-liftoff-mission-rocket-40004.jpeg?auto=compress&cs=tinysrgb&w=1600',
    quote: "Everything's okay. Our checklist is complete. Awaiting swimmers.",
    quoteAuthor: 'Neil Armstrong, after splashdown',
    facts: [
      'The mission lasted 8 days, 3 hours, 18 minutes, and 35 seconds',
      'The astronauts remained in quarantine until August 10, 1969',
      'President Nixon was aboard the recovery ship to welcome them back',
      'The mission achieved President Kennedy\'s goal of landing a man on the Moon and returning him safely before the end of the 1960s'
    ]
  }
];