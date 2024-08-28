interface SkillItemProps {
  title: string;
  percentage: number;
}

export default function SkillItem({ title, percentage }: SkillItemProps) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-3 font-medium uppercase text-color-text tracking-wide">
        <div className="flex items-center gap-2">
          <span>{title}</span>
        </div>
        <span>{percentage}%</span>
      </div>
      <div className="w-full rounded-full h-2.5 bg-[#1D2023] py-1 flex items-center">
        <div
          className="bg-gradient-to-r from-[#fef3c7] to-primary h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
