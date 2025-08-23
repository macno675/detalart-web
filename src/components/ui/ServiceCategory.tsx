import React, { ReactNode } from "react";

type ServiceCategoryProps = {
  color: string;
  title: string;
  children: ReactNode;
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

const ServiceCategory: React.FC<ServiceCategoryProps> = ({
  color,
  title,
  children,
}) => {
  const { h, s, l } = hexToHSL(color);

  const base = hslToCss(h, s, l);
  const darker = hslToCss(h, s - 50, l - 55);

  return (
    <section className="my-4">
      <div className="flex items-center gap-3 md:gap-5 p-2">
        <div
          className={`border-3 w-12 h-12 rounded-full`}
          style={{ backgroundColor: darker, borderColor: base }}
        ></div>
        <h2
          className="uppercase font-bold"
          style={{
            color: base,
            fontSize: "clamp(0.5rem, 4.5vw, 2rem)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 mt-3 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-300">
        {children}
      </div>
    </section>
  );
};

export default ServiceCategory;
