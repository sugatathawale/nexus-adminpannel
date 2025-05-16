"use client"

import * as React from "react"
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

interface PieChartProps {
    data: {
        name: string
        value: number
        color: string
    }[]
}

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
}: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
            className="text-xs font-medium"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    )
}

export function PieChart({ data }: PieChartProps) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RechartsPieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                <Tooltip
                    content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                            return (
                                <div className="rounded-lg border bg-background p-2 shadow-sm">
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="h-2 w-2 rounded-full"
                                                style={{ backgroundColor: payload[0].payload.color }}
                                            />
                                            <span className="font-medium">{payload[0].payload.name}</span>
                                        </div>
                                        <div className="text-right font-medium">{payload[0].value}</div>
                                    </div>
                                </div>
                            )
                        }
                        return null
                    }}
                />
                <Legend
                    verticalAlign="bottom"
                    height={36}
                    content={({ payload }) => {
                        if (payload && payload.length) {
                            return (
                                <div className="flex justify-center gap-4">
                                    {payload.map((entry: any, index: number) => (
                                        <div key={`legend-${index}`} className="flex items-center gap-2">
                                            <div
                                                className="h-3 w-3 rounded-full"
                                                style={{ backgroundColor: entry.color }}
                                            />
                                            <span className="text-sm font-medium">{entry.value}</span>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                        return null
                    }}
                />
            </RechartsPieChart>
        </ResponsiveContainer>
    )
} 