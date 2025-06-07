import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Timeline from '../components/Timeline';
import { timelineData } from '../data/timelineData';

const TimelineSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(timelineData[0]);

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle>Mission Timeline</SectionTitle>
        
        <div className="mb-12 slide-up">
          <p className="text-xl text-gray-200">
            The Apollo 11 mission lasted just over eight days from launch to splashdown, but those
            days were packed with historic moments and dramatic developments. Explore the key events
            of humanity's first journey to the lunar surface.
          </p>
        </div>
        
        {/* Interactive timeline component */}
        <div className="mb-12">
          <Timeline 
            events={timelineData} 
            onSelectEvent={setSelectedEvent}
            selectedEvent={selectedEvent}
          />
        </div>
        
        {/* Selected event details */}
        <div className="bg-zinc-900/20 rounded-lg overflow-hidden slide-up">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-300 mb-4">{selectedEvent.title}</h3>
              <div className="mb-4 inline-block px-3 py-1 bg-zinc-800 rounded-full text-sm">
                {selectedEvent.date} - {selectedEvent.time}
              </div>
              <p className="mb-4">{selectedEvent.description}</p>
              
              {selectedEvent.quote && (
                <div className="mt-6 border-l-4 border-zinc-500 pl-4 italic text-gray-300">
                  "{selectedEvent.quote}"
                  {selectedEvent.quoteAuthor && (
                    <div className="mt-2 text-sm text-gray-400">— {selectedEvent.quoteAuthor}</div>
                  )}
                </div>
              )}
              
              {selectedEvent.facts && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-zinc-200 mb-2">Key Facts</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {selectedEvent.facts.map((fact, index) => (
                      <li key={index}>{fact}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="bg-zinc-950">
              <img 
                src={selectedEvent.image} 
                alt={selectedEvent.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;