import React from 'react';
import Image from 'next/image';

type OpinionCardProps = {
  name: string;
  avatar?: string;         // URL do avatara, opcjonalny
  date: string;            // np. "2025-08-21"
  description: string;
  stars: number;           // np. 4 lub 5
};

const DEFAULT_AVATAR = '/avatar-default.png'; // ścieżka do standardowego avatara w public/

const OpinionCard: React.FC<OpinionCardProps> = ({
  name,
  avatar,
  date,
  description,
  stars,
}) => {
  return (
    <div className="">
      {/* Górna część: avatar + imię + data */}
      <div className="">
        <div className="">
          <Image
            src={avatar || DEFAULT_AVATAR}
            alt={`${name}.`}
            fill
            className=""
          />
        </div>
        <div>
          <p className="">{`${name}.`}</p>
          <p className="">{date}</p>
        </div>
      </div>

      {/* Treść opinii */}
      <p className="">{description}</p>

      {/* Gwiazdki */}
      <div className="">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < stars ? 'text-yellow-400' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>

      
    </div>
  );
};

export default OpinionCard;
