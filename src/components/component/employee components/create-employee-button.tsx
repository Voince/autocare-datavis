"use client";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ToastAction } from "../../ui/toast"
import { toast } from "../../ui/use-toast"
import { Textarea } from "../../ui/textarea";

export function CreateEmployeeButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Employee</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Employee</DialogTitle>
          <DialogDescription>
            Input information to create a employee file. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Juan Dela Cruz"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Issue
            </Label>
            <Textarea
              id="issue"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button 
            type="submit"
            onClick={() =>{
              toast({
                title: "Employee Created",
                description: "Your employee has been successfully created.",
                action: (
                  <ToastAction altText="Undo creation">Undo</ToastAction>
                ),
              });
            }}
            >Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
