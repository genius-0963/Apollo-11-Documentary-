import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold inline-block px-4 py-2 border-b-4 border-zinc-500 text-white">
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;