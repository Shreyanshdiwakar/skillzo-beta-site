// Won't be used now, but could be used in the future

import React from "react";
import {
    DraggableCardBody,
    DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

interface Props {
    className: ClassValue;
    name: string;
    review: string;
    avatar?: string;
}


const DraggableItem = ({ className, name, review, avatar }: Props) => (
    <DraggableCardBody className={cn(className, "flex flex-col items-center p-6")}>
        <img
            src={avatar || "https://v0.dev/placeholder.svg?width=64&height=64"}
            alt={name}
            className="w-16 h-16 rounded-full mb-4 border-2 border-yellow-400 object-cover"
        />
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">{name}</h3>
        <p className="text-center text-neutral-600 dark:text-neutral-300 italic">"{review}"</p>
    </DraggableCardBody>
);

export function DraggableCardDemo() {
    const reviews = [
        {
            name: "Aarav Sharma",
            review: "Skillzo helped me launch my first startup while still in high school! The community is amazing.",
            className: "absolute top-8 left-8 rotate-[-8deg]",
        },
        {
            name: "Priya Patel",
            review: "The workshops and mentorship gave me real-world experience. Highly recommend!",
            className: "absolute top-8 right-8 rotate-[-12deg]",
        },
        {
            name: "Rohan Gupta",
            review: "I made friends and co-founders for life. The best teenpreneur network in India.",
            className: "absolute bottom-8 left-12 rotate-[14deg]",
        },
        {
            name: "Simran Kaur",
            review: "The exposure to industry leaders is unmatched. I feel ready for the future!",
            className: "absolute bottom-8 right-12 rotate-[10deg]",
        },
        {
            name: "Kabir Mehta",
            review: "Skillzo's events are fun and super valuable. I learned more here than anywhere else.",
            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[4deg]",
        },
    ];

    return (
        <section>
            <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
                <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
                    {/* Real reviews from our teenpreneurs */}
                </p>
                {reviews.map((r) => (
                    <DraggableItem key={r.name} name={r.name} review={r.review} className={r.className} />
                ))}
            </DraggableCardContainer>
        </section>
    );
}
