interface TimelineEvent {
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

interface TimelineProps {
  events: TimelineEvent[];
  selectedEvent: TimelineEvent;
  onSelectEvent: (event: TimelineEvent) => void;
}

const Timeline = ({ events, selectedEvent, onSelectEvent }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Horizontal line */}
      <div className="absolute h-1 bg-zinc-700 top-8 left-0 right-0 z-0"></div>
      
      {/* Timeline events */}
      <div className="flex justify-between relative overflow-x-auto pb-6">
        {events.map((event, index) => (
          <div 
            key={event.id}
            className="flex flex-col items-center mx-2 min-w-[120px]"
          >
            <div 
              className={`w-16 h-16 rounded-full flex items-center justify-center z-10 transition-all cursor-pointer mb-4 ${
                selectedEvent.id === event.id
                  ? 'bg-zinc-500 scale-110'
                  : 'bg-zinc-900 hover:bg-zinc-700'
              }`}
              onClick={() => onSelectEvent(event)}
            >
              <span className="text-white font-bold">{index + 1}</span>
            </div>
            <p className="text-center text-sm">
              <span className="block font-semibold text-zinc-300">{event.date}</span>
              <span className="block text-gray-400">{event.time}</span>
            </p>
            <p className={`text-center text-xs mt-1 max-w-[120px] ${
              selectedEvent.id === event.id ? 'text-white' : 'text-gray-400'
            }`}>
              {event.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;