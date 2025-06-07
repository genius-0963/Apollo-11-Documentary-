interface QuoteProps {
  text: string;
  author: string;
}

const Quote = ({ text, author }: QuoteProps) => {
  return (
    <blockquote className="relative p-6 italic bg-zinc-900/30 rounded-lg">
      <div className="absolute text-zinc-400 text-6xl opacity-30 top-2 left-2">"</div>
      <p className="relative z-10 text-xl text-gray-200 mb-4">{text}</p>
      <footer className="text-right text-zinc-300">— {author}</footer>
    </blockquote>
  );
};

export default Quote;