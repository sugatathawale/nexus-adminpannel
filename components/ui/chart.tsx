"use client"

import * as React from "react"
import {
  Area,
  AreaChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Grid,
  CartesianGrid,
} from "recharts"

interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Chart = React.forwardRef<HTMLDivElement, ChartProps>(({ className, children, ...props }, ref) => {
  return (
    <div className="w-full h-full rounded-md" {...props} ref={ref}>
      {children}
    </div>
  )
})
Chart.displayName = "Chart"

interface ChartContainerProps {
  children: React.ReactNode
  data: any[]
  margin?: { top: number; right: number; bottom: number; left: number }
}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ children, data, margin }, ref) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={margin}>
          <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.1} />
          {children}
        </AreaChart>
      </ResponsiveContainer>
    )
  }
)
ChartContainer.displayName = "ChartContainer"

interface ChartTooltipProps {
  content?: React.ReactNode
}

const ChartTooltip = React.forwardRef<HTMLDivElement, ChartTooltipProps>(({ content }, ref) => {
  return <Tooltip
    content={content}
    cursor={{ stroke: "currentColor", strokeOpacity: 0.15 }}
    wrapperStyle={{ outline: "none" }}
  />
})
ChartTooltip.displayName = "ChartTooltip"

const ChartTooltipContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className="rounded-lg border bg-background p-2 shadow-sm"
        {...props}
        ref={ref}
      />
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltipContent"

interface ChartLegendProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const ChartLegend = React.forwardRef<HTMLDivElement, ChartLegendProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="flex items-center justify-center gap-4" {...props} ref={ref}>
        {children}
      </div>
    )
  }
)
ChartLegend.displayName = "ChartLegend"

interface ChartLegendItemProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  color: string
}

const ChartLegendItem = React.forwardRef<HTMLDivElement, ChartLegendItemProps>(
  ({ className, name, color, ...props }, ref) => {
    return (
      <div className="flex items-center gap-2" {...props} ref={ref}>
        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
        <span className="text-sm font-medium">{name}</span>
      </div>
    )
  }
)
ChartLegendItem.displayName = "ChartLegendItem"

interface ChartGridProps {
  horizontal?: boolean
  vertical?: boolean
}

const ChartGrid = React.forwardRef<HTMLDivElement, ChartGridProps>(
  ({ horizontal, vertical }, ref) => {
    return <CartesianGrid
      strokeDasharray="3 3"
      horizontal={horizontal}
      vertical={vertical}
      stroke="currentColor"
      strokeOpacity={0.1}
    />
  }
)
ChartGrid.displayName = "ChartGrid"

interface ChartAxisProps {
  dataKey?: string
}

const ChartXAxis = React.forwardRef<HTMLDivElement, ChartAxisProps>(
  ({ dataKey }, ref) => {
    return <XAxis
      dataKey={dataKey}
      stroke="currentColor"
      strokeOpacity={0.5}
      fontSize={12}
      tickLine={false}
      axisLine={false}
      tickMargin={8}
    />
  }
)
ChartXAxis.displayName = "ChartXAxis"

const ChartYAxis = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    return <YAxis
      stroke="currentColor"
      strokeOpacity={0.5}
      fontSize={12}
      tickLine={false}
      axisLine={false}
      tickMargin={8}
    />
  }
)
ChartYAxis.displayName = "ChartYAxis"

interface ChartAreaProps {
  dataKey: string
  fill?: string
  fillOpacity?: number
  stroke?: string
}

const ChartArea = React.forwardRef<HTMLDivElement, ChartAreaProps>(
  ({ dataKey, fill, fillOpacity, stroke }, ref) => {
    return <Area
      type="monotone"
      dataKey={dataKey}
      fill={fill}
      fillOpacity={fillOpacity || 0.2}
      stroke={stroke}
      strokeWidth={2}
    />
  }
)
ChartArea.displayName = "ChartArea"

interface ChartLineProps {
  dataKey: string
  stroke?: string
  strokeWidth?: number
}

const ChartLine = React.forwardRef<HTMLDivElement, ChartLineProps>(
  ({ dataKey, stroke, strokeWidth }, ref) => {
    return <Line
      type="monotone"
      dataKey={dataKey}
      stroke={stroke}
      strokeWidth={strokeWidth || 2}
      dot={{ strokeWidth: 2, r: 4 }}
      activeDot={{ r: 6, strokeWidth: 2 }}
    />
  }
)
ChartLine.displayName = "ChartLine"

export {
  Chart,
  ChartLegendItem,
  ChartGrid,
  ChartLine,
  ChartXAxis,
  ChartYAxis,
  ChartArea,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
}
