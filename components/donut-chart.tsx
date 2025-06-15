"use client"
import React from "react"
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts"

interface DonutChartProps {
  data: Array<{ name: string; value: number }>
  colors: string[]
  centerTitle: string
}

const RADIAN = Math.PI / 180

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name, value }: any) => {
  const radius = outerRadius + 30
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  // Arrow line coordinates
  const lineStartRadius = outerRadius + 5
  const lineEndRadius = outerRadius + 25
  const lineStartX = cx + lineStartRadius * Math.cos(-midAngle * RADIAN)
  const lineStartY = cy + lineStartRadius * Math.sin(-midAngle * RADIAN)
  const lineEndX = cx + lineEndRadius * Math.cos(-midAngle * RADIAN)
  const lineEndY = cy + lineEndRadius * Math.sin(-midAngle * RADIAN)

  const textAnchor = x > cx ? "start" : "end"
  const percentage = (value).toFixed(0) + "%"

  return (
    <g>
      {/* Arrow line */}
      <line
        x1={lineStartX}
        y1={lineStartY}
        x2={lineEndX}
        y2={lineEndY}
        stroke="#374151"
        strokeWidth={1}
        className="dark:stroke-slate-300"
      />
      {/* Arrow marker */}
      <circle
        cx={lineEndX}
        cy={lineEndY}
        r={2}
        fill="#374151"
        className="dark:fill-slate-300"
      />
      {/* Label text */}
      <text
        x={x}
        y={y}
        fill="#374151"
        className="dark:fill-slate-300"
        textAnchor={textAnchor}
        dominantBaseline="central"
        fontSize="11px"
        fontWeight="500"
      >
        {`${name}: ${percentage}`}
      </text>
    </g>
  )
}

const CustomTooltipContent: React.FC<any> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0]
    const total = payload[0].payload.total || 100
    const percentage = ((data.value / total) * 100).toFixed(0)
    
    return (
      <div className="bg-white dark:bg-slate-800 px-2 py-1 rounded shadow-lg border border-blue-300 dark:border-blue-600">
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{`${percentage}%`}</p>
      </div>
    )
  }
  return null
}

const DonutChart: React.FC<DonutChartProps> = ({ data, colors, centerTitle }) => {
  return (
    <div className="w-full h-[350px] flex flex-col items-center">
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 40, right: 40, bottom: 40, left: 40 }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              innerRadius="45%"
              outerRadius="70%"
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
              nameKey="name"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip 
              content={<CustomTooltipContent />} 
              cursor={{ fill: "rgba(59, 130, 246, 0.1)" }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            pointerEvents: "none",
            maxWidth: "120px",
          }}
        >
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 leading-tight">
            {centerTitle.split(" ").map((word, index) => (
              <React.Fragment key={index}>
                {word}
                {index < centerTitle.split(" ").length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DonutChart 