import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = '', containerClassName = '' }) => {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div className={`section-container ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};
