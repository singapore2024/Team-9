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

type VegetableData = {
  [key: string]: { month: string; desktop: number; mobile: number }[];
};

const vegetableData: VegetableData = {
  "Bak-choy": [
    { month: "January", desktop: 150, mobile: 100 },
    { month: "February", desktop: 220, mobile: 180 },
    { month: "March", desktop: 130, mobile: 90 },
    { month: "April", desktop: 175, mobile: 110 },
    { month: "May", desktop: 200, mobile: 140 },
    { month: "June", desktop: 190, mobile: 150 },
  ],
  "Spinach": [
    { month: "January", desktop: 300, mobile: 150 },
    { month: "February", desktop: 290, mobile: 160 },
    { month: "March", desktop: 280, mobile: 190 },
    { month: "April", desktop: 270, mobile: 180 },
    { month: "May", desktop: 265, mobile: 170 },
    { month: "June", desktop: 250, mobile: 175 },
  ],
  "Lettuce": [
    { month: "January", desktop: 80, mobile: 60 },
    { month: "February", desktop: 95, mobile: 85 },
    { month: "March", desktop: 105, mobile: 75 },
    { month: "April", desktop: 115, mobile: 90 },
    { month: "May", desktop: 130, mobile: 100 },
    { month: "June", desktop: 140, mobile: 110 },
  ],
};

export function DemandSupplyGraph() {
  const [selectedVegetable, setSelectedVegetable] = useState("Bak-choy");

  const chartData:any = vegetableData[selectedVegetable];

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Demand and Supply Graph - {selectedVegetable}</CardTitle>
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
                style={{ textAnchor: "middle" }}
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
  );
}
