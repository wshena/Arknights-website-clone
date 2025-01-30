import Image from 'next/image';
import React, { useRef } from 'react';

const RhodesIsland3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Variabel for store rotate position
  let rotationX = 0;
  let rotationY = 0;

  // Fungsi for handle card rotation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const { left, top, width, height } = container.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // reduce sensitivity
    const xAxis = (centerX - e.clientX) / 10;
    const yAxis = (centerY - e.clientY) / 10;

    rotationX = yAxis;
    rotationY = xAxis;

    // add ratations with transform
    container.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
  };

  // Reset transform when mouse leave
  const handleMouseLeave = () => {
    const container = containerRef.current;
    if (container) {
      container.style.transform = "rotateY(0deg) rotateX(0deg)";
    }
  };

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ perspective: "1000px" }} // Perspektif for 3D effect
    >
      <div
        ref={containerRef}
        className=" md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[800px] 2xl:h-[800px] shadow-lg transform transition-transform duration-500 ease-out"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d", // keep the 3D effect
        }}
      >
        {/* rhodes island image */}
        <Image
          src="/affiliations/Rhodes_Island.png"
          alt="rhodes-island"
          width={400}
          height={400}
          className="object-cover md:w-[300px] md:h-[300px] xl:w-[400px] xl:w-[400px] 2xl:w-[800px] 2xl:h-[800px]"
        />
      </div>
    </div>
  );
};

export default RhodesIsland3D;