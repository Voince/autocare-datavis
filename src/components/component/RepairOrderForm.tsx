"use client";

import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function RepairOrderForm() {
  return (
    <div className="flex justify-center items-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Report an Issue</CardTitle>
          <CardDescription>Please provide details about the issue you are experiencing.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              className="min-h-[100px]"
              id="description"
              placeholder="Describe the issue you are experiencing"
            />
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button type="submit">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  )
}