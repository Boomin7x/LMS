"use client"
import React, { useEffect, useId, useRef, useState } from 'react'
import { useOutsideClick } from './use-outside-click';

type Props = {
    cards:any[]
}

const useAnimatedGrid = ({cards}: Props) => {
   const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return {id, ref, active, setActive }
}

export default useAnimatedGrid