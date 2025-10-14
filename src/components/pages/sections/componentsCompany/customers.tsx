import type React from "react";
import { Customer } from "@/components/constants/Customer";

const Background = "/images/background/image-27.webp";

const Customers: React.FC = () => {
  const duplicatedCustomers = [...Customer, ...Customer, ...Customer];

  return (
    <div
      className="w-screen py-16 flex justify-center overflow-hidden relative"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <style>
        {`
          @keyframes scroll-infinite {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 3));
            }
          }

          .carousel-track {
            display: flex;
            gap: 2.25rem;
            animation: scroll-infinite 40s linear infinite;
            will-change: transform;
          }

          .carousel-container:hover .carousel-track {
            animation-play-state: paused;
          }

          .carousel-item {
            flex-shrink: 0;
          }
        `}
      </style>

      <div className="carousel-container w-full flex items-center">
        <div className="carousel-track">
          {duplicatedCustomers.map((c, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{
                transform: "scale(1)",
                width: "8%",
                height: "8%",
              }}
            >
              <img
                src={c.image}
                alt={`customer-${index + 1}`}
                className="rounded-4xl shadow-lg h-26 w-26 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;
