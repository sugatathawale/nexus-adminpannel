"use client"

import * as React from "react"

const Chart = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return <div className="rounded-md border bg-card text-card-foreground" {...props} ref={ref} />
})
Chart.displayName = "Chart"

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { data: any[]; margin?: any }
>(({ className, ...props }, ref) => {
  return <div {...props} ref={ref} />
})
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { content?: React.ReactNode }
>(({ className, content, ...props }, ref) => {
  return (
    <div {...props} ref={ref}>
      {content}
    </div>
  )
})
ChartTooltip.displayName = "ChartTooltip"

const ChartTooltipContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div className="px-2 py-1 rounded-md bg-popover text-popover-foreground border" {...props} ref={ref} />
  },
)
ChartTooltipContent.displayName = "ChartTooltipContent"

const ChartLegend = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div className="flex items-center" {...props} ref={ref} />
  },
)
ChartLegend.displayName = "ChartLegend"

const ChartLegendItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { name: string; color: string }
>(({ className, name, color, ...props }, ref) => {
  return (
    <div className="flex items-center gap-2" {...props} ref={ref}>
      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
      <span>{name}</span>
    </div>
  )
})
ChartLegendItem.displayName = "ChartLegendItem"

const ChartGrid = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div {...props} ref={ref} />
  },
)
ChartGrid.displayName = "ChartGrid"

const ChartLine = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div {...props} ref={ref} />
  },
)
ChartLine.displayName = "ChartLine"

const ChartXAxis = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div {...props} ref={ref} />
  },
)
ChartXAxis.displayName = "ChartXAxis"

const ChartYAxis = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div {...props} ref={ref} />
  },
)
ChartYAxis.displayName = "ChartYAxis"

const ChartArea = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div {...props} ref={ref} />
  },
)
ChartArea.displayName = "ChartArea"

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
