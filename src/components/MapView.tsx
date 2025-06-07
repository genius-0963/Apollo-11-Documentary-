const MapView = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div className="relative pb-[56.25%] h-0">
        <iframe 
          src="https://moon.nasa.gov/moon-in-motion/moon-on-the-web/#moon=true&x=1737400&y=0&z=1000000&cx=23.47297&cy=0.67408&heading=0&pitch=-90&pxppersec=0&dt=0" 
          className="absolute top-0 left-0 w-full h-full border-0"
          title="Apollo 11 Landing Site Map"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4 bg-zinc-950">
        <h4 className="text-lg font-semibold text-zinc-200 mb-2">Apollo 11 Landing Site</h4>
        <p className="text-gray-300 text-sm">
          Interactive map showing the location of Tranquility Base (0.67408° N, 23.47297° E), 
          where humans first set foot on another world.
        </p>
      </div>
    </div>
  );
};

export default MapView;