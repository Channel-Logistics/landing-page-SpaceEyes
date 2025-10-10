import type React from "react";
import { Customer } from "@/components/constants/Customer";

const Background = "/images/background/image-27.webp";

const Customers: React.FC = () => {

  return (
    <div className="w-screen py-16 flex justify-center overflow-x-hidden"
    style={{ backgroundImage: `url(${Background})` }}>
      <div className="flex items-center gap-6">
        {Customer.map((c, index) => {
          const scaleMap = [0.7, 0.8, 0.9, 1, 1.1, 1.1, 1, 0.9, 0.8, 0.7];
          const scale = scaleMap[index] || 1;

          return (
            <div
              key={index}
              className="transition-transform duration-300 hover:scale-110"
              style={{
                transform: `scale(${scale})`,
              }}
            >
              <img
                src={c.image}
                alt={`customer-${index + 1}`}
                className="object-contain rounded-xl shadow-lg"
                style={{
                  width: `${150 * scale}px`,
                  height: `${100 * scale}px`,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Customers; 