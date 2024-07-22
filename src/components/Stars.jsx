import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadStarsPreset } from "@tsparticles/preset-stars";

const Stars = ({ children }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadStarsPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const options = useMemo(
    () => ({
      preset: "stars",
      particles: {
        move: {
          speed: 2, // Increase the speed of particles
          direction: "bottom", // Direction can be "none", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left"
          enable: true, // Enable the movement
          outModes: {
            default: "out", // What happens when particles reach the edge, "out" makes them disappear, other options can be "bounce", "destroy"
          },
        },
      },
    }),
    []
  );
  

  if (init) {
    return (
      <div className='fixed w-full h-full top-0 left-0 -z-10'>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        {children}
      </div>
    );
  }

  return <></>;
};

export default Stars;
