import React from "react";

const RotatingCarousel = () => {
  const tokens = [
    { src: "/PT-csUSDL-30OCT2025.svg", name: "csUSDL" },
    { src: "/PT-cUSD-29JAN2026.svg", name: "cUSD" },
    { src: "/PT-cUSDO-20NOV2025.svg", name: "cUSDO" },
    { src: "/PT-fxSAVE-30OCT2025.svg", name: "fxSAVE" },
    { src: "/PT-pUSDe-16OCT2025.svg", name: "pUSDe" },
    { src: "/PT-slvlUSD-25SEP2025.svg", name: "slvlUSD" },
    { src: "/PT-stcUSD-29JAN2026.svg", name: "stcUSD" },
    { src: "/PT-sUSDE-27NOV2025.svg", name: "sUSDE" },
    { src: "/PT-USDe-27NOV2025.svg", name: "USDe" },
    { src: "/PT-USR-4DEC2025.svg", name: "USR" },
  ];

  // Duplicate tokens for seamless loop
  const allTokens = [...tokens, ...tokens];

  return (
    <div className="w-full flex flex-col gap-[20px] my-[30px] mb-[120px] cursor-default p-8">
      <p className="text-gray-500 text-[18px] font-[400] mb-6 text-center">
        Assets you can loop
      </p>

      <div className="relative overflow-hidden rounded-lg">
        <div className="flex animate-scroll-left whitespace-nowrap">
          {allTokens.map((token, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mx-12 flex-shrink-0"
            >
              <img src={token.src} alt={token.name} className="w-[48px]" />
              <p className="text-2xl text-white">{token.name}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          display: flex;
          width: max-content; /* important for seamless loop */
          animation: scroll-left 30s linear infinite;
        }

        /* Faster animation for smaller screens */
        @media (max-width: 1023px) {
          .animate-scroll-left {
            animation: scroll-left 20s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default RotatingCarousel;
