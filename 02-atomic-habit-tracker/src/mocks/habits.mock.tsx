import type {  Habit } from "../types/habits";


export const MOCK_HABITS: Habit[] = [
    {
    id: crypto.randomUUID().toString(),
    name: "Comer Saludable",
    category: "health",
    completedDates: ["2025-12-10", "2025-12-11", "2025-12-12", "2025-12-13" ],
    createdAt: new Date().toISOString(),
    },
    {
    id: crypto.randomUUID().toString(),
    name: "Comer Saludable",
    category: "health",
    completedDates: ["2025-12-20", "2025-12-21", "2025-12-22", "2025-12-23" ],
    createdAt: new Date().toISOString(),
    },
]