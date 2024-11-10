import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading = ({ title, subtitle, className = '' }: SectionHeadingProps) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="heading-lg mb-4">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;