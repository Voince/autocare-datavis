import { Column,Task } from "../component/kanban components/types";

export const defaultCols: Column[] = [
    {
      id: "todo",
      title: "Todo",
    },
    {
      id: "doing",
      title: "Work in progress",
    },
    {
      id: "done",
      title: "Done",
    },
];
  
export const defaultTasks: Task[] = [
  {
    id: "1",
    columnId: "todo",
    content: "Inspect and diagnose engine troubles in customer's vehicle",
  },
  {
    id: "2",
    columnId: "todo",
    content:
      "Order and install necessary replacement parts for customer's vehicle repair",
  },
  {
    id: "3",
    columnId: "doing",
    content: "Perform routine maintenance tasks on vehicles in the workshop",
  },
  {
    id: "4",
    columnId: "doing",
    content: "Conduct detailed vehicle inspections for safety and performance",
  },
  {
    id: "5",
    columnId: "done",
    content: "Complete oil change service for customer's vehicle",
  },
  {
    id: "6",
    columnId: "done",
    content: "Repair electrical system issues in a customer's car",
  },
  {
    id: "7",
    columnId: "done",
    content: "Finish brake repair job on customer's vehicle",
  },
  {
    id: "8",
    columnId: "todo",
    content: "Diagnose and fix transmission problems in vehicles",
  },
  {
    id: "9",
    columnId: "todo",
    content: "Inspect and replace worn-out tires on customer's vehicle",
  },
  {
    id: "10",
    columnId: "todo",
    content: "Perform wheel alignment and balancing for customer's vehicle",
  },
  {
    id: "11",
    columnId: "todo",
    content: "Service and recharge air conditioning systems in vehicles",
  },
  {
    id: "12",
    columnId: "doing",
    content: "Troubleshoot and repair suspension issues in vehicles",
  },
  {
    id: "13",
    columnId: "doing",
    content: "Replace damaged or malfunctioning vehicle lights",
  },
];
