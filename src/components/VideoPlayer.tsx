interface VideoPlayerProps {
  videoId: string;
  title: string;
}

const VideoPlayer = ({ videoId, title }: VideoPlayerProps) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div className="relative pb-[56.25%] h-0">
        <iframe 
          src={`https://www.youtube.com/embed/${videoId}`} 
          className="absolute top-0 left-0 w-full h-full border-0"
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4 bg-zinc-950">
        <h4 className="text-lg font-semibold text-zinc-200">{title}</h4>
        <p className="text-gray-300 text-sm">
          Historical footage provides a glimpse into this momentous event.
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;