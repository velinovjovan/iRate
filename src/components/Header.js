import { useEffect, useRef } from "react";
import gsap from "gsap";
import { colors } from "../utils/colors";

export default function Header({ phase, setPhase }) {
  const jovanRef = useRef(null);
  const ratesRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      jovanRef.current,
      { opacity: 0, x: -100, rotation: -8 },
      { opacity: 1, x: 0, rotation: -8, duration: 1.5, ease: "back.out(1.7)" }
    );

    gsap.fromTo(
      ratesRef.current,
      { opacity: 0, x: 100, rotation: 8 },
      { opacity: 1, x: 0, rotation: 8, duration: 1.5, ease: "back.out(1.7)" }
    );

    gsap.to([jovanRef.current, ratesRef.current], {
      rotation: (i) => (i === 0 ? -10 : 10),
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      delay: 1,
    });
  }, []);

  function handleOnClick() {
    setPhase((prev) => !prev);
    gsap.fromTo(
      jovanRef.current,
      { opacity: 0, x: -100, rotation: -8 },
      { opacity: 1, x: 0, rotation: -8, duration: 1.5, ease: "back.out(1.7)" }
    );
  }

  return (
    <header
      className="header"
      style={{ backgroundColor: colors.primaryLight[phase ? 0 : 1] }}
    >
      <div
        ref={jovanRef}
        style={{
          transformOrigin: "bottom right",
          color: colors.primary[phase ? 0 : 1],
          cursor: "pointer",
        }}
        onClick={handleOnClick}
      >
        {phase ? "Jovan" : "Meliii"}
      </div>
      <div
        ref={ratesRef}
        style={{ transformOrigin: "bottom left", color: "#FFFCF2" }}
      >
        Rates
      </div>
    </header>
  );
}
