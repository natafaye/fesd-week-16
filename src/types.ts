export type Habit = {
  id: number;
  streakLength: number;
  name: string;
  category: string;
  targetStreakLength: number;
  monday: boolean;
  tuesday: boolean
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
};

export type Day = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"
