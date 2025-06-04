/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
});

const GridGlobe = () => {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 44.7866, lng: 20.4489 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const serbiaLat = 44.7866;
  const serbiaLng = 20.4489;

  const sampleArcs = [
    {
      order: 1,
      startLat: serbiaLat,
      startLng: serbiaLng,
      endLat: 52.52, // Berlin latitude (Europe)
      endLng: 13.405, // Berlin longitude
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 2,
      startLat: serbiaLat,
      startLng: serbiaLng,
      endLat: 40.7128, // New York City (America)
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 3,
      startLat: serbiaLat,
      startLng: serbiaLng,
      endLat: 55.7558, // Moscow (Russia)
      endLng: 37.6173,
      arcAlt: 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 4,
      startLat: serbiaLat,
      startLng: serbiaLng,
      endLat: 51.5072, // London (Europe)
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 5,
      startLat: serbiaLat,
      startLng: serbiaLng,
      endLat: 34.0522, // Los Angeles (America)
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 6,
      startLat: serbiaLat,
      startLng: serbiaLng,
      endLat: 48.8566, // Paris (Europe)
      endLng: 2.3522,
      arcAlt: 0.25,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 7,
      startLat: serbiaLat,
      startLng: serbiaLng,
      endLat: 59.9343, // Saint Petersburg (Russia)
      endLng: 30.3351,
      arcAlt: 0.35,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 8,
      startLat: serbiaLat,
      startLng: serbiaLng,
      endLat: 41.8781, // Chicago (America)
      endLng: -87.6298,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 9,
      startLat: serbiaLat,
      startLng: serbiaLng,
      endLat: 60.1695, // Helsinki (Europe)
      endLng: 24.9354,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 10,
      startLat: serbiaLat,
      startLng: serbiaLng,
      endLat: 45.4215, // Ottawa (America)
      endLng: -75.6972,
      arcAlt: 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
  ];

  return (
    // remove dark:bg-black bg-white h-screen md:h-auto  w-full flex-row py-20
    // change absolute -left-5 top-36, add w-full h-full md:top-40
    <div className="flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full">
      {/* remove h-full md:h-[40rem] */}
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
        {/* remove these text divs */}
        {/* <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
            We sell soap worldwide
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
            This globe is interactive and customizable. Have fun with it, and
            don&apos;t forget to share it.
          </p>
        </motion.div> */}
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        {/* remove -bottom-20 */}
        <div className="absolute w-full h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
};
export default GridGlobe;
