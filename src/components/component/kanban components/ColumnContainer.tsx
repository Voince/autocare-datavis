"use client";

import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { TrashIcon,PlusIcon } from "lucide-react"
import { Column, Id, Task } from "./types";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import TaskCard from "./TaskCard";
import { Card } from "../../ui/card"; 
import { Button } from "../../ui/button";
import { ScrollArea } from "../../ui/scroll-area";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;

  createTask: (columnId: Id) => void;
  updateTask: (id: Id, content: string) => void;
  deleteTask: (id: Id) => void;
  tasks: Task[];
}

function ColumnContainer({
  column,
  deleteColumn,
  updateColumn,
  createTask,
  tasks,
  deleteTask,
  updateTask,
}: Props) {
  const [editMode, setEditMode] = useState(false);

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };


  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
          bg-columnBackgroundColor
          opacity-40
          border-2
          border-pink-500
          w-[350px]
          h-[800px]
          max-h-[800px]
          rounded-md
          flex
          flex-col
          "
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="
        m-4
        w-[350px]
        h-[800px]
        max-h-[800px]
        rounded-md
        flex
        flex-col
        "
    >
      {/* Column title */}
      <Card
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditMode(true);
        }}
        className="
          text-md
          h-[60px]
          cursor-grab
          rounded-b-none
          p-8
          font-bold
          flex
          items-center
          justify-between
          bg-muted
          mb-2
          "
        >
        <div className="flex gap-2">
          <div className="
            flex
            justify-center
            items-center
            bg-columnBackgroundColor
            px-2
            py-1
            text-sm
            rounded-full
            "
          >
            5
          </div>
          {!editMode && column.title}
          {editMode && (
            <input
              className="bg-black focus:border-rose-500 border rounded outline-none px-2"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
            />
          )}
        </div>
          <Button
            variant="secondary"
            onClick={() => {
              deleteColumn(column.id);
            }}
          >
            <TrashIcon className="size-4"/>
          </Button>
      </Card>

      {/* Column task container */}
      <ScrollArea>
        <div className="flex flex-grow flex-col gap-4 p-2 pr-4 overflow-x-hidden overflow-y-auto">
          <SortableContext items={tasksIds}>
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            ))}
          </SortableContext>
        </div>
      </ScrollArea>

      {/* Column footer */}
      <Button
        variant="outline"
        className="
        flex 
        gap-4 
        m-2
        items-center 
        rounded-md 
        p-4 
      hover:text-rose-500 
        "
        onClick={() => {
          createTask(column.id);
        }}
      >
        <PlusIcon />
        Add task
      </Button>
    </div>
  );
}

export default ColumnContainer;
