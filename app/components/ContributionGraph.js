"use client";

import { useEffect, useState } from "react";
import { contribLevels } from "@/lib/data";

export default function ContributionGraph() {
  const [cells, setCells] = useState([]);

  useEffect(() => {
    setCells(
      Array.from({ length: 52 }, (_, i) => ({
        color: contribLevels[Math.floor(Math.random() * contribLevels.length)],
        delay: `${i * 0.02}s`
      }))
    );
  }, []);

  return (
    <div className="grid grid-cols-[repeat(26,1fr)] gap-[3px] overflow-x-auto">
      {cells.map((cell, i) => (
        <div
          key={i}
          className="contrib-cell"
          style={{ background: cell.color, animationDelay: cell.delay }}
        />
      ))}
    </div>
  );
}
