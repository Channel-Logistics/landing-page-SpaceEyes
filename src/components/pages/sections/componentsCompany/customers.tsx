import type React from "react";
import { Customer } from "@/components/constants/Customer";

const Background = "/images/background/image-27.webp";

const Customers: React.FC = () => {
  const duplicatedCustomers = [...Customer, ...Customer];

  return (
    <div
      className="w-screen py-16 flex justify-center overflow-hidden relative bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <style>
        {`
          @keyframes scroll-infinite {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .carousel-track {
            display: flex;
            gap: 2rem;
            animation: scroll-infinite 50s linear infinite;
            width: max-content;
          }

          .carousel-container:hover .carousel-track {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="carousel-container w-full flex items-center">
        <div className="carousel-track">
          {duplicatedCustomers.map((c, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-shrink-0 shadow-md hover:scale-105 transition-transform"
              style={{
                width: "6%",
                height: "6%",
              }}
            >
              <img
                src={c.image}
                alt={`customer-${index + 1}`}
                className="object-contain w-full h-full rounded-3xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;
