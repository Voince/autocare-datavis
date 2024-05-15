"use client";

import { DragEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CardContent, Card } from '@/components/ui/card';
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon, CalendarDaysIcon, LayoutGridIcon, PlusIcon } from 'lucide-react';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Calendar() {
  const [events, setEvents] = useState([
    { id: 1, title: 'Weekly Team Meeting', time: '10:00 AM - 11:00 AM' },
    { id: 2, title: 'Design Review', time: '2:00 PM - 3:00 PM' },
    { id: 3, title: 'Client Presentation', time: '4:00 PM - 5:00 PM' }
  ]);

const handleDragStart = (event: DragEvent<HTMLDivElement>, eventId: number) => {
    event.dataTransfer.setData('eventId', eventId.toString());
};

const handleDrop = (event: { dataTransfer: { getData: (arg0: string) => any; }; }) => {
    const eventId = event.dataTransfer.getData('eventId');
    const eventIndex = events.findIndex(item => item.id.toString() === eventId);
    if (eventIndex !== -1) {
        const newEvents = [...events];
        newEvents.splice(eventIndex, 1);
        setEvents(newEvents);
    }
};

  const renderCalendarDays = () => {
    return DAYS_OF_WEEK.map(day => (
      <div key={day} className="bg-gray-100 px-3 py-2 text-center text-xs font-medium dark:bg-gray-800 dark:text-gray-400">
        {day}
      </div>
    ));
  };

  const renderCalendarEvents = () => {
    return events.map(event => (
      <div key={event.id} draggable onDragStart={(e) => handleDragStart(e, event.id)} className="bg-white px-3 py-4 text-gray-900 dark:bg-gray-950 dark:text-gray-50">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white">
          <CalendarIcon className="h-full w-full" />
        </div>
        <div className="mt-2 grid gap-1">
          <div className="text-sm font-medium">{event.title}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">{event.time}</div>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex h-full w-full" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
      <div className="flex-1">
        {/* Calendar Header */}
        <div className="flex h-16 items-center justify-between border-b px-4 dark:border-gray-700">
          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost">
              <ChevronLeftIcon className="h-5 w-5" />
              <span className="sr-only">Previous month</span>
            </Button>
            <h3 className="text-lg font-medium">May 2023</h3>
            <Button size="icon" variant="ghost">
              <ChevronRightIcon className="h-5 w-5" />
              <span className="sr-only">Next month</span>
            </Button>
          </div>
          {/* View Buttons */}
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost">
              <CalendarDaysIcon className="h-5 w-5" />
              <span className="sr-only">Today</span>
            </Button>
            <Button size="icon" variant="ghost">
              <LayoutGridIcon className="h-5 w-5" />
              <span className="sr-only">View</span>
            </Button>
          </div>
        </div>
        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-px bg-gray-200 dark:bg-gray-700">
          {renderCalendarDays()}
          {/* Calendar Dates */}
          {[...Array(31)].map((_, index) => (
            <div key={index} className="bg-white px-3 py-4 text-gray-500 dark:bg-gray-950 dark:text-gray-400">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Events Sidebar */}
      <div className="w-[300px] shrink-0 border-l bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex h-16 items-center justify-between border-b px-4 dark:border-gray-700">
          <h3 className="text-lg font-medium">Events</h3>
          <Button size="icon" variant="ghost">
            <PlusIcon className="h-5 w-5" />
            <span className="sr-only">Add event</span>
          </Button>
        </div>
        <div className="h-[calc(100vh-4rem)] overflow-auto p-4">
          {renderCalendarEvents()}
        </div>
      </div>
    </div>
  );
}
