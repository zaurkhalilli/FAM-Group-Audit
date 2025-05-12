import React, { useEffect, useState } from "react";
import '../HomeProyekt/Homeproyekt.scss'
import { GoProjectSymlink } from "react-icons/go";
import { PiHandHeartFill } from "react-icons/pi";
const Homeproyekt = () => {
    const [projectsCount, setProjectsCount] = useState(0);
    const [partnersCount, setPartnersCount] = useState(0);
    const targetProjects = 55;
    const targetPartners = 40;

  useEffect(() => {
    if (projectsCount < targetProjects) {
      const interval = setInterval(() => {
        setProjectsCount(prev => {
          if (prev < targetProjects) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [projectsCount]);

  useEffect(() => {
    if (partnersCount < targetPartners) {
      const interval = setInterval(() => {
        setPartnersCount(prev => {
          if (prev < targetPartners) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [partnersCount]);


  return (
    <section className="animation-section">
        <div className="tamamlanmis-layiheler">
        <div className="counter">{projectsCount}+</div>
        <div className="label">Tamamlanmış Proyektlər <GoProjectSymlink />
</div>
      </div>
      <div className="tamamlanmis-layiheler">
        <div className="counter">{partnersCount}+</div>
        <div className="label">Partnyorlarımız  <PiHandHeartFill />
</div>
      </div>
    </section>
  );
};
export default Homeproyekt;
