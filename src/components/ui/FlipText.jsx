import React from "react";
import { FlipWords } from "./flip-words";

export function FlipText() {
    const words = ["Connect!", "Collaborate!", "Geek Out!", "Talk!"];
    return  (
        <div>
            <div className="text-2xl md:text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                Let's
                <FlipWords words={words} /> 
            </div>
        </div>
    )
}