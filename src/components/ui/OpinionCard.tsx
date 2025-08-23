import React from 'react';
import Image from 'next/image';

type OpinionCardProps = {
  name: string;
  avatar?: string;         // URL do avatara, opcjonalny
  date: string;            // np. "2025-08-21"
  description: string;
  stars: number;           // np. 4 lub 5
};

const DEFAULT_AVATAR = '/images/avatar.png'; // ścieżka do standardowego avatara w public/

const OpinionCard: React.FC<OpinionCardProps> = ({
  name,
  avatar,
  date,
  description,
  stars,
}) => {
  return (
    <div className="flex flex-col bg-black px-6 py-5 rounded-3xl w-full max-w-90 gap-3">
      {/* Górna część: avatar + imię + data */}
      <div className="flex gap-3">
        <div className="w-10 h-10 relative rounded-full overflow-hidden">
          <Image
            src={avatar || DEFAULT_AVATAR}
            alt={`${name}.`}
            fill
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{`${name}.`}</h3>
          <p className="text-xs -mt-0.5 text-silver">{date}</p>
        </div>
      </div>

      {/* Treść opinii */}
      <p className="leading-7">{description}</p>

      {/* Gwiazdki */}
      <div className="flex gap-1 text-[15px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < stars ? 'text-accent' : 'text-silver'}>
            ★
          </span>
        ))}
      </div>

      
    </div>
  );
};

export default OpinionCard;
