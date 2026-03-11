"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A multiple line chart"

const chartData = [
  { month: "January", sp: 186, cv: 80 },
  { month: "February", sp: 305, cv: 200 },
  { month: "March", sp: 237, cv: 120 },
  { month: "April", sp: 73, cv: 190 },
  { month: "May", sp: 209, cv: 130 },
  { month: "June", sp: 214, cv: 140 },
]

const chartConfig = {
  sp: {
    label: "SP",
    color: "var(--chart-1)",
  },
  cv: {
    label: "CV",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function SourceTrendChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Source Trends</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="sp"
              type="monotone"
              stroke="var(--color-sp)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="cv"
              type="monotone"
              stroke="var(--color-cv)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
