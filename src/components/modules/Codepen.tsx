"use client";

import { useState, useEffect } from "react";

export default function Codepen() {

  const [randPen, setRandPen] = useState<string[]>([]);

  const peeks:string[][] = [
    [
      "Hallownest Respite",
      "An elaborate and layered animation I made, with over 100 unique frames but compact at 250kb",
      "../assets/codepen/cp-hr.jpg",
      "https://codepen.io/lbcyber/pen/BaLzpJY"
    ],
    [
      "Axolotl!",
      "An animated vector graphic image of an axolotl I made as my business' logo",
      "../assets/codepen/cp-axo.jpg",
      "https://codepen.io/lbcyber/pen/gOwaZzp"
    ],
    [
      "PSX Startup",
      "The original Playstation startup screen I recreated in CodePen, complete with old CRT scanline effects!",
      "../assets/codepen/cp-ps.jpg",
      "https://codepen.io/lbcyber/full/ExbmJmp"
    ],
  ]

  useEffect(() => {
    const randNum:number = Math.floor(Math.random() * peeks.length)
      setRandPen(peeks[randNum])
  },[setRandPen])

  return (
    <aside className="codePenAside">
      <div className="codePenContainer">
        <h3>While you're here, why not check out a CodePen?</h3>
        <a
          href={randPen[3]}
          className="codePenBox"
          rel="noopener noreferrer"
          target="_blank">
            <div className="codePenImage">
              <img
                src={randPen[2]}
                alt={randPen[1]} />
            </div>
            <p>{randPen[0]}</p>
        </a>
      </div>
    </aside>
  )
};
