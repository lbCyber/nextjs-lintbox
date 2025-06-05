"use client"

import { useState, useEffect } from "react";

export default function Modes() {

  const getPRM = () => { // Check user's prm OS preference
    return !window.matchMedia("(prefers-reduced-motion: no-preference)")
      .matches;
  }

  const [lightMode, setLightMode] = useState(false),
    [reduceMotion, setReduceMotion] = useState(getPRM)

  const lmToggle = (): void => {
    setLightMode(!lightMode)
  }

  const rmToggle = (): void => {
    setReduceMotion(!reduceMotion)
  }

  useEffect(() => {
    const currPRM: MediaQueryList = window.matchMedia("(prefers-reduced-motion: no-preference)")
    console.log(window)
    const prmListen = (e: MediaQueryListEvent) => {
      setReduceMotion(!e.matches)
    }
    currPRM.addEventListener("change", prmListen)
    return () => {
      currPRM.removeEventListener("change", prmListen)
    }
  }, [])

  return (
    <div
      className={`access
        ${reduceMotion ? " reducedMotionNoOS" : ""}
        ${lightMode ? " lightMode" : ""}`.trim()}>
      <h5 onMouseDown={lmToggle}>light mode</h5>
      <h5 onMouseDown={rmToggle}>reduce motion</h5>
    </div>
  )
}
