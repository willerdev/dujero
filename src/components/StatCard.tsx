import { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const StatCard = ({ icon, title, description }: StatCardProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default StatCard;