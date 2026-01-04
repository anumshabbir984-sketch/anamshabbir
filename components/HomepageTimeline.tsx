"use client";

import { Calendar, Code, FileText, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
    {
        id: 1,
        title: "Planning",
        date: "Phase 1",
        content: "Project planning and requirements gathering phase.",
        category: "Planning",
        icon: Calendar,
        relatedIds: [2],
        status: "completed" as const,
        energy: 100,
    },
    {
        id: 2,
        title: "Design",
        date: "Phase 2",
        content: "UI/UX design and system architecture.",
        category: "Design",
        icon: FileText,
        relatedIds: [1, 3],
        status: "completed" as const,
        energy: 90,
    },
    {
        id: 3,
        title: "Development",
        date: "Phase 3",
        content: "Core features implementation and testing.",
        category: "Development",
        icon: Code,
        relatedIds: [2, 4],
        status: "in-progress" as const,
        energy: 60,
    },
    {
        id: 4,
        title: "Testing",
        date: "Phase 4",
        content: "User testing and bug fixes.",
        category: "Testing",
        icon: User,
        relatedIds: [3, 5],
        status: "pending" as const,
        energy: 30,
    },
    {
        id: 5,
        title: "Release",
        date: "Phase 5",
        content: "Final deployment and release.",
        category: "Release",
        icon: Clock,
        relatedIds: [4],
        status: "pending" as const,
        energy: 10,
    },
];

export default function HomepageTimeline() {
    return (
        <div className="h-[600px] md:h-[800px] relative">
            <RadialOrbitalTimeline timelineData={timelineData} />
        </div>
    );
}
