import React from 'react';
import { Card, CardHeader, CardDescription, CardTitle, CardContent, CardFooter} from "@/components/ui/card";
import { Progress } from '../ui/progress';
import { feedbacks } from "../data/MarketEffectivenessData"; // Ensure the path is correct

// Define the type for the feedback data
type Feedback = {
    feedbackID: number;
    serviceRating: number;
    completionTimeInDays: number;
    date: Date;
    sourceDescription: string;
};

// Ensure the feedbacks array is typed correctly
const feedbacksData: (Omit<Feedback, 'sourceID'> & { sourceDescription: string })[] = feedbacks;

const calculateAverageRating = (feedbacks: (Omit<Feedback, 'sourceID'> & { sourceDescription: string })[]): number => 
    {
    const totalRating = feedbacks.reduce((sum, feedback) => sum + feedback.serviceRating, 0);
    return totalRating / feedbacks.length;
};

const calculateAverageCompletionDays = (feedbacks: (Omit<Feedback, 'sourceID'> & { sourceDescription: string })[]): number => {
    const totalCompletionDays = feedbacks.reduce((sum, feedback) => sum + feedback.completionTimeInDays, 0);
    return totalCompletionDays / feedbacks.length;
};

const calculateMostEffectiveSource = (feedbacks: (Omit<Feedback, 'sourceID'> & { sourceDescription: string })[]): string => {
    const sourceGroups = feedbacks.reduce((acc, feedback) => {
        if (!acc[feedback.sourceDescription]) {
            acc[feedback.sourceDescription] = [];
        }
        acc[feedback.sourceDescription].push(feedback);
        return acc;
    }, {} as Record<string, (Omit<Feedback, 'sourceID'> & { sourceDescription: string })[]>);

    let mostEffectiveSource = '';
    let highestAverageRating = 0;

    for (const source in sourceGroups) {
        const totalRating = sourceGroups[source].reduce((sum, feedback) => sum + feedback.serviceRating, 0);
        const averageRating = totalRating / sourceGroups[source].length;

        if (averageRating > highestAverageRating) {
            highestAverageRating = averageRating;
            mostEffectiveSource = source;
        }
    }

    return mostEffectiveSource;
};

export function AverageRatingKPI() {
    const averageRating = calculateAverageRating(feedbacksData);

    return (
        <Card>
            <CardHeader className="pb-2">
                <CardDescription>Average Rating</CardDescription>
                <CardTitle className="text-4xl">{averageRating.toFixed(1)}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-xs text-muted-foreground">Average service rating from all feedbacks</div>
            </CardContent>
            <CardFooter>
                <Progress aria-label="Service rating" value={averageRating * 20} max={100} />
            </CardFooter>
        </Card>
    );
}

export function AverageCompletionDaysKPI() {
    const averageCompletionDays = calculateAverageCompletionDays(feedbacksData);

    return (
        <Card>
            <CardHeader className="pb-2">
                <CardDescription>Average Completion Days</CardDescription>
                <CardTitle className="text-4xl">{averageCompletionDays.toFixed(1)} days</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-xs text-muted-foreground">Average time taken to complete services</div>
            </CardContent>
        </Card>
    );
}

export function MostEffectiveSourceKPI() {
    const mostEffectiveSource = calculateMostEffectiveSource(feedbacksData);

    return (
        <Card>
            <CardHeader className="pb-2">
                <CardDescription>Most Effective Source</CardDescription>
                <CardTitle className="text-4xl">{mostEffectiveSource}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-xs text-muted-foreground">Source with the highest average service rating</div>
            </CardContent>
        </Card>
    );
}
