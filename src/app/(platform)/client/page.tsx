import { Card } from "@/components/ui/card";

export default function ClientPage() {
    return (
        <div className="grid grid-cols-2 gap-4 h-full p-4">
            <div className="grid grid-rows-3 h-full gap-4">
                <Card className="row-span-1">Tasks Assigned</Card>
                <Card className="row-span-2">Something </Card>
            </div>
            <Card>Repair Update</Card>
        </div>
    );
}
    