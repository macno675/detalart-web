import React, { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  price: string;
  color: string;
  description: string;
};

function hexToHSL(hex: string) {
  hex = hex.replace(/^#/, "");

  let r = parseInt(hex.substring(0, 2), 16) / 255;
  let g = parseInt(hex.substring(2, 4), 16) / 255;
  let b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToCss(h: number, s: number, l: number) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  price,
  description,
  color,
}) => {
  const { h, s, l } = hexToHSL(color);

  const base = hslToCss(h, s, l);
  const darker = hslToCss(h, s - 50, l - 55);
  const darkest = hslToCss(h, s - 35, l - 68);

  return (
    <div
      className={`w-full p-5 rounded-2xl max-w-100`}
      style={{ backgroundColor: darkest }}
    >
      <div className="flex gap-3 mb-3">
        <div
          className="p-2.5 w-13 h-13 bg-white flex items-center justify-center rounded-lg"
          style={{ backgroundColor: darker }}
        >
          <img
            src={`/icons/ico-${icon}.svg`}
            alt={`${icon} Icon`}
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="-mt-1 text-silver font-light" style={{ color: base }}>
            {price}
          </p>
        </div>
      </div>
      <p className="text-silver opacity-70 leading-6.5 font-light">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
