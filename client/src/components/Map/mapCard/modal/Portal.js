import { useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, target, toggle }) => {
  let bodyRoot;

  if (target) bodyRoot = document.getElementById(target);
  else bodyRoot = document.body;

  const el = document.createElement("div");
  el.classList.add(
    "bg-gray-100",
    "absolute",
    "inset-0",
    "flex",
    "items-center",
    "justify-center"
  );
  el.style.zIndex = "9999";
  el.style.background = "#302d2d99";
  el.addEventListener("click", (event) => {
    if (event.target === el) {
      if (toggle) toggle();
      el.removeEventListener("click", toggle);
      el.remove();
    }
  });
  bodyRoot.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (toggle) toggle();
      el.removeEventListener("click", toggle);
      el.remove();
    }
  });

  useEffect(() => {
    bodyRoot.appendChild(el);

    return () => {
      el.removeEventListener("click", toggle);
      el.remove();
    };
  }, [el, bodyRoot, toggle]);

  return createPortal(children, el);
};

export default Portal;
