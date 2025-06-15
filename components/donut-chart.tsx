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
  const radius = outerRadius + 15
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  const textAnchor = x > cx ? "start" : "end"
  const percentage = (value).toFixed(0) + "%"

  return (
    <g>
      {/* Label text - closer to chart */}
      <text
        x={x}
        y={y}
        fill="#374151"
        className="dark:fill-slate-300"
        textAnchor={textAnchor}
        dominantBaseline="central"
        fontSize="10px"
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
    <div className="w-full h-[350px] xs:h-[280px] sm:h-[320px] md:h-[350px] flex flex-col items-center">
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              innerRadius="45%"
              outerRadius="65%"
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
          <p className="text-lg xs:text-sm sm:text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200 leading-tight">
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