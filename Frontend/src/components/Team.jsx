import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);

      // Detect scroll direction
      if (scrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else if (scrollTop < lastScrollTop) {
        setScrollDirection("up");
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const circleSize = 40; // Smaller diameter of the circle
  const strokeWidth = 4;
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercentage / 100) * circumference;

  return (
    <>
      {/* Hide default scrollbar */}
      <style>
        {
          "body { scrollbar-width: none; -ms-overflow-style: none; } body::-webkit-scrollbar { display: none; }"
        }
      </style>

      {/* Scroll Indicator */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
        <svg
          width={circleSize}
          height={circleSize}
          viewBox={`0 0 ${circleSize} ${circleSize}`}
          className="rotate-[-90deg]"
        >
          {/* Background Circle */}
          <circle
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={radius}
            fill="transparent"
            stroke="#E5E7EB"
            strokeWidth={strokeWidth}
          />
          {/* Progress Circle */}
          <circle
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={radius}
            fill="transparent"
            stroke="#2563EB"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-200"
          />
        </svg>

        {/* Arrow Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          {scrollDirection === "down" ? (
            <ChevronDown size={16} className="text-blue-600" />
          ) : (
            <ChevronUp size={16} className="text-blue-600" />
          )}
        </div>
      </div>
    </>
  );
};

export default ScrollIndicator;
