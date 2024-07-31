import React from 'react';

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, title, description }) => {
  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex grow gap-2.5 p-4 w-full bg-white rounded-lg border border-solid border-zinc-100 max-md:mt-2">
        <img loading="lazy" src={imageSrc} alt="" className="shrink-0 my-auto aspect-[1.27] w-[77px]" />
        <div className="flex flex-col flex-1">
          <h2 className="text-base font-semibold text-neutral-500">{title}</h2>
          <p className="mt-1 text-sm text-zinc-500">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default FeatureCard;