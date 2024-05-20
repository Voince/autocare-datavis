import KanbanBoard from "@/components/component/kanban components/KanbanBoard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function KanbanPage() {
    return (
      <main className="h-full">
          <div className="grid p-4 grid-cols-4 gap-4">
            <div className="grid col-start-1 col-span-3">
              <KanbanBoard />
            </div>
            <div className="grid grid-rows-3 gap-4">
              <Card className="grid row-start-1">
                <CardHeader className="flex flex-row items-start bg-muted/50">Active Mechanics</CardHeader>
                <CardContent className="p-6 text-sm">Name: John Doe Active Status: O</CardContent>
                <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                  <div className="text-xs text-muted-foreground">
                    Updated: <time dateTime="2023-11-23">November 23, 2023</time>
                  </div>
                  <Pagination className="ml-auto mr-0 w-auto">
                    <PaginationContent>
                      <PaginationItem>
                        <Button className="h-6 w-6" size="icon" variant="outline">
                          <ChevronLeftIcon className="h-3.5 w-3.5" />
                          <span className="sr-only">Previous Employee</span>
                        </Button>
                      </PaginationItem>
                      <PaginationItem>
                        <Button className="h-6 w-6" size="icon" variant="outline">
                          <ChevronRightIcon className="h-3.5 w-3.5" />
                          <span className="sr-only">Next Employee</span>
                        </Button>
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </CardFooter>
              </Card>
              <Card className="grid row-start-2 row-span-2">
                <CardHeader className="flex flex-row items-start bg-muted/50">Task Card</CardHeader>
                <CardContent className="p-6 text-sm">Task Info</CardContent>
              </Card>
            </div>
          </div>
      </main>
    );
}