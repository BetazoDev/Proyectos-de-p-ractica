export type HabitCategory = "health" |  "work" | "learning" | "fitness";

export interface Habit {
    id: string,
    name: string,
    category: HabitCategory,
    completedDates: string[],
    createdAt: string,
}



