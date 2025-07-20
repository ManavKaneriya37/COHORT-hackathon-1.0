// NeuronParticles.jsx
import React from "react";
import Particles from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";

const NeuronParticles = () => {
  const particlesInit = async (engine) => {
    await loadLinksPreset(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links",
        fullScreen: {
          enable: true,
          zIndex: -1, // FIX: Force it to the absolute background
        },
        background: {
          color: {
            value: "#fff",
          },
        },
        particles: {
          color: {
            value: "#000000", // Black particles
          },
          links: {
            color: "#000000", // Black links
            distance: 120,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
          },
          size: {
            value: 2,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "attract",
            },
          },
          modes: {
            attract: {
              distance: 150,
              duration: 0.3,
              speed: 1,
            },
          },
        },
      }}
      // The inline style prop is no longer needed and can be removed
    />
  );
};

export default NeuronParticles;