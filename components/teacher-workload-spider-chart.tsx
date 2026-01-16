"use client"
import React from "react"
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  Legend,
  Text,
} from "recharts"

interface WorkloadDataPoint {
  activity: string
  hours: number
  fullMark: number
}

const workloadData: WorkloadDataPoint[] = [
  { activity: "Grading & Feedback", hours: 5, fullMark: 6 },
  { activity: "Planning/Preparing", hours: 5, fullMark: 6 },
  { activity: "Admin Work", hours: 3, fullMark: 6 },
  { activity: "Student Interaction (Non-Teaching)", hours: 3, fullMark: 6 },
  { activity: "Colleague Collaboration", hours: 2, fullMark: 6 },
  { activity: "Parent Communication", hours: 2, fullMark: 6 },
  { activity: "Other Work Activities", hours: 2, fullMark: 6 },
  { activity: "School Committee Work", hours: 1, fullMark: 6 },
  { activity: "Professional Development", hours: 1, fullMark: 6 },
  { activity: "Non-Curricular Activities", hours: 1, fullMark: 6 },
]

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg border border-gray-300 dark:border-slate-600">
        <p className="font-semibold text-blue-600 dark:text-blue-400">{`${label}`}</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">{`Hours: ${payload[0].value}`}</p>
      </div>
    )
  }
  return null
}

interface CustomizedLabelProps {
  x?: number
  y?: number
  cx?: number
  cy?: number
  stroke?: string
  payload?: {
    payload: WorkloadDataPoint
    value: number
    name: string
  }
  index?: number
}

const renderCustomizedLabel = (isDarkMode: boolean) => (props: CustomizedLabelProps) => {
  const { x, y, cx, cy, payload } = props

  if (!x || !y || !cx || !cy || !payload || typeof payload.value === "undefined") {
    return null
  }

  const value = payload.value
  const labelText = `${value} hr${value !== 1 ? "s" : ""}`

  const offsetX = (x - cx) * 0.15
  const offsetY = (y - cy) * 0.15

  let textAnchor: "start" | "middle" | "end" = "middle"
  if (x < cx - 1) textAnchor = "end"
  if (x > cx + 1) textAnchor = "start"

  return (
    <Text
      x={x + offsetX}
      y={y + offsetY}
      dy={y < cy ? -5 : 13}
      fill={isDarkMode ? "#ffffff" : "#1e40af"}
      fontSize={10}
      fontWeight="bold"
      textAnchor={textAnchor}
      dominantBaseline="middle"
    >
      {labelText}
    </Text>
  )
}

const TeacherWorkloadSpiderChart: React.FC = () => {
  // Check for dark mode
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  React.useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark')
      setIsDarkMode(isDark)
    }
    
    checkDarkMode()
    
    // Watch for changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    
    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full h-[400px] xs:h-[450px] sm:h-[500px] md:h-[650px] p-4 xs:p-2 sm:p-3 md:p-4 bg-white dark:bg-black rounded-2xl border border-gray-200 dark:border-gray-800">
      <h3 className="text-lg xs:text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 xs:mb-2 sm:mb-3 md:mb-4 text-center">
        Teacher Weekly Workload
      </h3>
      <ResponsiveContainer width="100%" height="90%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="70%"
          data={workloadData}
          margin={{ top: 60, right: 80, bottom: 60, left: 80 }}
        >
          <defs>
            <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={isDarkMode ? "#60a5fa" : "#60a5fa"} stopOpacity={0.7} />
              <stop offset="95%" stopColor={isDarkMode ? "#3b82f6" : "#1e40af"} stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <PolarGrid stroke={isDarkMode ? "#4b5563" : "#e5e7eb"} />
          <PolarAngleAxis
            dataKey="activity"
            stroke={isDarkMode ? "#9ca3af" : "#6b7280"}
            tick={{ fontSize: 8, fill: isDarkMode ? "#f3f4f6" : "#4b5563" }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 6]}
            stroke={isDarkMode ? "#6b7280" : "#9ca3af"}
            tick={{ fill: isDarkMode ? "#d1d5db" : "#6b7280", fontSize: 8 }}
          />
          <Radar
            name="Weekly Hours"
            dataKey="hours"
            stroke={isDarkMode ? "#60a5fa" : "#2563eb"}
            fill="url(#colorHours)"
            fillOpacity={0.75}
            strokeWidth={2.5}
            dot={{ r: 3, fill: isDarkMode ? "#60a5fa" : "#2563eb", stroke: isDarkMode ? "#93c5fd" : "#60a5fa" }}
            activeDot={{ r: 5, fill: isDarkMode ? "#3b82f6" : "#1d4ed8", stroke: isDarkMode ? "#93c5fd" : "#60a5fa" }}
            label={renderCustomizedLabel(isDarkMode)}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: isDarkMode ? "#60a5fa" : "#60a5fa", strokeDasharray: "3 3", strokeOpacity: 0.6 }}
          />
          <Legend
            wrapperStyle={{ paddingTop: "25px" }}
            formatter={(value) => <span className={isDarkMode ? "text-gray-200" : "text-gray-700"} style={{ fontSize: '12px' }}>{value}</span>}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TeacherWorkloadSpiderChart 