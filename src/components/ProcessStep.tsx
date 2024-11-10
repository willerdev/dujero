interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-[#b31e32] text-white flex items-center justify-center flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;