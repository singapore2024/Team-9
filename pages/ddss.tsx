"use client"

import { useState } from "react"
import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Label } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "A multiple line chart with selectable vegetable"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Demand",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Supply",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const vegetables = [
  { value: "Bak-choy", label: "Bak Choy" },
  { value: "Spinach", label: "Spinach" },
  { value: "Lettuce", label: "Lettuce" },
]

export function DemandSupplyGraph() {
  const [selectedVegetable, setSelectedVegetable] = useState("Bak-choy")

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Demand and Supply Graph - {selectedVegetable }</CardTitle>
          <Select value={selectedVegetable} onValueChange={setSelectedVegetable}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select vegetable" />
            </SelectTrigger>
            <SelectContent>
              {vegetables.map((veg) => (
                <SelectItem key={veg.value} value={veg.value}>
                  {veg.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <CardDescription>
          {vegetables.find(v => v.value === selectedVegetable)?.label} - January to June 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              bottom: 30,
              top: 30,
            }}
          >
            <CartesianGrid vertical={false} />
            
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            >
              <Label value="Month" offset={-20} position="insideBottom" />
            </XAxis>
            
            <YAxis>
              <Label
                value="Amount of Vegetables (kg)"
                angle={-90}
                position="insideLeft"
                style={{ textAnchor: 'middle' }}
              />
            </YAxis>
            
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}