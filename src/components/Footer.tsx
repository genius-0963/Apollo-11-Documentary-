import { ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-300 py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">About This Site</h3>
            <p className="mb-4">
              This educational website was created to provide accurate, engaging information about
              the Apollo 11 Moon Landing - one of humanity's greatest achievements.
            </p>
            <p>
              Content is designed for high school students and the general public interested in space
              exploration and human achievement.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Primary Sources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.nasa.gov/mission/apollo-11/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-zinc-300 transition"
                >
                  NASA Apollo 11 Mission <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.archives.gov/research/alic/reference/space-timeline.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-zinc-300 transition"
                >
                  National Archives Space Timeline <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://history.nasa.gov/apollo11.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-zinc-300 transition"
                >
                  NASA History Office <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Additional Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.smithsonianmag.com/air-space-magazine/apollo-11s-scientific-legacy-180972581/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-zinc-300 transition"
                >
                  Smithsonian Air & Space Museum <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.space.com/apollo-11-landing-site-photos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-zinc-300 transition"
                >
                  Space.com Apollo 11 Archives <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://airandspace.si.edu/explore/stories/apollo-50-next-giant-leap" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-zinc-300 transition"
                >
                  Apollo 50: The Next Giant Leap <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-zinc-900 text-center">
          <p>
            &copy; {new Date().getFullYear()} Apollo 11 Educational Project. All sources are properly cited.
            All images are used for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;