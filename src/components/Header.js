import { useEffect, useRef } from "react";
import gsap from "gsap";
import { colors } from "../utils/colors";

export default function Header({ phase, setPhase }) {
  const jovanRef = useRef(null);
  const ratesRef = useRef(null);
  const emojiRef1 = useRef(null);
  const emojiRef2 = useRef(null);

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

    gsap.fromTo(
      emojiRef2.current,
      { opacity: 0, scale: 0.5, rotation: 0, y: -100, x: 0 },
      {
        opacity: 1,
        scale: 0.8,
        rotation: 360,
        y: 25,
        x: 15,
        duration: 2.5,
        ease: "back.out(1.7)",
      }
    );

    gsap.fromTo(
      emojiRef1.current,
      { opacity: 0, scale: 0.5, rotation: 0, y: -100, x: 0 },
      {
        opacity: 1,
        scale: 0.8,
        rotation: -360,
        y: 25,
        x: -15,
        duration: 2.5,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  function handleOnClick() {
    setPhase((prev) => !prev);
    gsap.fromTo(
      jovanRef.current,
      { opacity: 0, x: -100, rotation: -8 },
      { opacity: 1, x: 0, rotation: -8, duration: 1.5, ease: "back.out(1.7)" }
    );
    gsap.fromTo(
      emojiRef1.current,
      { opacity: 0, scale: 0.5, rotation: 0, y: -100, x: 0 },
      {
        opacity: 1,
        scale: 0.8,
        rotation: -360,
        y: 25,
        x: -15,
        duration: 2.5,
        ease: "back.out(1.7)",
      }
    );
  }

  return (
    <header
      className="header"
      style={{ backgroundColor: colors.primaryLight[phase ? 0 : 1] }}
    >
      <span ref={emojiRef1}></span>
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
      <span ref={emojiRef2}></span>
    </header>
  );
}
