import Header from "@/components/layout/Header";
import { Card } from "@/components/ui/card";

export default function MechanicPage() {

    return (
        <div className="grid grid-cols-2 gap-4 h-full p-4">
            <div className="grid grid-rows-2 gap-4 h-full">
                <Card className="flex flex-col h-full">
                    <p>Key Performance Indicators</p>
                    <div className="grid grid-cols-2 gap-4 p-4 flex-grow">
                        <Card className="flex-1">KP1 - Tasks Accomplished/Remaining</Card>
                        <Card className="flex-1">KP1 - Tasks Accomplished</Card>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 flex-grow">
                        <Card className="flex-1">KP1 - Performance</Card>
                        <Card className="flex-1">KP1 - Rating</Card>
                        <Card className="flex-1">KP1 - Repair Order</Card>
                    </div>
                </Card>
                <Card className="h-full">Create Repair Order Form</Card>
            </div>
            <div className="grid grid-rows-3 h-full gap-4">
                <Card className="flex-1">Tasks Assigned</Card>
                <Card className="flex-1">Something </Card>
            </div>
        </div>
    );
}
    