"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "A multiple bar chart"

const chartData = [
  { month: "January", clothing: 183, shoes: 186, bag: 80 },
  { month: "February", clothing: 183, shoes: 305, bag: 200 },
  { month: "March", clothing: 183, shoes: 237, bag: 120 },
  { month: "April", clothing: 183, shoes: 73, bag: 190 },
  { month: "May", clothing: 183, shoes: 209, bag: 130 },
  { month: "June", clothing: 183, shoes: 214, bag: 140 },
]

const chartConfig = {
  clothing: {
    label: "Clothing",
    color: "var(--chart-1)",
  },
  shoes: {
    label: "Shoes",
    color: "var(--chart-2)",
  },
  bag: {
    label: "Bags",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Bar dataKey="clothing" fill="var(--color-clothing)" radius={4} />
            <Bar dataKey="shoes" fill="var(--color-shoes)" radius={4} />
            <Bar dataKey="bag" fill="var(--color-bag)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
