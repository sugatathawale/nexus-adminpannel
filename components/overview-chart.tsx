"use client"

import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
  ChartGrid,
  ChartLine,
  ChartXAxis,
  ChartYAxis,
  ChartArea,
} from "@/components/ui/chart"

const data = [
  {
    name: "Jan",
    users: 45,
    events: 12,
    stories: 4,
  },
  {
    name: "Feb",
    users: 52,
    events: 18,
    stories: 6,
  },
  {
    name: "Mar",
    users: 61,
    events: 24,
    stories: 8,
  },
  {
    name: "Apr",
    users: 67,
    events: 28,
    stories: 10,
  },
  {
    name: "May",
    users: 90,
    events: 32,
    stories: 12,
  },
  {
    name: "Jun",
    users: 103,
    events: 45,
    stories: 14,
  },
  {
    name: "Jul",
    users: 125,
    events: 50,
    stories: 15,
  },
]

export function OverviewChart() {
  return (
    <Chart className="h-[300px]">
      <ChartLegend className="mb-4 justify-center gap-8">
        <ChartLegendItem name="Users" color="hsl(var(--primary))" />
        <ChartLegendItem name="Events" color="hsl(var(--accent))" />
        <ChartLegendItem name="Stories" color="#f8b4b4" />
      </ChartLegend>
      <ChartContainer data={data} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
        <ChartGrid horizontal vertical={false} />
        <ChartXAxis dataKey="name" />
        <ChartYAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartArea dataKey="users" fill="hsl(var(--primary))" fillOpacity={0.2} stroke="hsl(var(--primary))" />
        <ChartLine dataKey="events" stroke="hsl(var(--accent))" strokeWidth={2} />
        <ChartLine dataKey="stories" stroke="#f8b4b4" strokeWidth={2} />
      </ChartContainer>
    </Chart>
  )
}
