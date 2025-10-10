import type React from "react";

const customer1 = "/images/customer1.webp";
const customer2 = "/images/customer2.webp";
const customer3 = "/images/customer3.webp";
const customer4 = "/images/customer4.webp";
const customer5 = "/images/customer5.webp";
const customer6 = "/images/customer6.webp";
const customer7 = "/images/customer7.webp";
const customer8 = "/images/customer8.webp";
const customer9 = "/images/customer9.webp";
const customer10 = "/images/customer10.webp";
const Background = "/images/background/image-27.webp";

const Customers: React.FC = () => {
  const customers = [
    customer1,
    customer2,
    customer3,
    customer4,
    customer5,
    customer6,
    customer7,
    customer8,
    customer9,
    customer10,
  ];

  return (
    <div className="w-screen py-16 flex justify-center overflow-x-hidden"
    style={{ backgroundImage: `url(${Background})` }}>
      <div className="flex items-center gap-6">
        {customers.map((img, index) => {
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
                src={img}
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