import "./style.css";
import { useState, useEffect } from "react";

export default function Icone() {
  const [visivel, setVisivel] = useState(true);

  function rodarScroll() {
    if (window.scrollY === 0) {
      setVisivel(false);
    } else {
      setVisivel(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", rodarScroll);

    return () => {
      window.removeEventListener("scroll", rodarScroll);
    };
  }, []);

  return (
    <a className={`btn-fixed ${visivel ? "visible" : ""}`} href="#topo">
      <span class="material-symbols-outlined">arrow_upward</span>
    </a>
  );
}
