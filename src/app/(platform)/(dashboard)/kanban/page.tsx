import KanbanBoard from "@/components/kanban/KanbanBoard";

export default function KanbanPage() {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Kanban Board</h1>
        <br/>
        <KanbanBoard />
      </div>
    );
}