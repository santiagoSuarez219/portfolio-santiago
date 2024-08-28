interface TrainingItemProps {
  title: string;
  place: string;
  description: string;
  date: string;
}

export default function TrainingItem({
  title,
  place,
  description,
  date,
}: TrainingItemProps) {
  return (
    <li>
      <div className="relative ml-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-white/15 before:content-[''] md:grid-cols-2 md:gap-10 md:space-x-4">
        <div className="relative pb-4 lg:pb-12 ">
          <div className="sticky top-0 ">
            <span className="text-primary -left-[44px] absolute rounded-full text-6xl">
              &bull;
            </span>

            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              {title}
            </h3>
            <h4 className="font-semibold text-lg md:text-xl text-gray-600 dark:text-white">
              {place}
            </h4>
            <time className="p-0 m-0 text-white/80">{date}</time>
          </div>
        </div>
        <div className="relative flex flex-col gap-2 pb-4 text-gray-300 lg:text-lg ">
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
}
