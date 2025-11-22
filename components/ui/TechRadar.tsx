"use client";

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = [
  { subject: "AI/LLMs", A: 95, fullMark: 100 },
  { subject: "Backend", A: 90, fullMark: 100 },
  { subject: "Data Eng", A: 85, fullMark: 100 },
  { subject: "Cloud", A: 80, fullMark: 100 },
  { subject: "Frontend", A: 75, fullMark: 100 },
  { subject: "DevOps", A: 70, fullMark: 100 },
];

export default function TechRadar() {
  return (
    <div className="w-full h-[300px] md:h-[400px] bg-black/40 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center">
      <h3 className="text-xl font-bold text-white mb-4">Skill Radar</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#333" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: "#9CA3AF", fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Skills"
            dataKey="A"
            stroke="#3B82F6"
            strokeWidth={2}
            fill="#3B82F6"
            fillOpacity={0.3}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: "#18181B", borderColor: "#333", color: "#fff" }}
            itemStyle={{ color: "#3B82F6" }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
