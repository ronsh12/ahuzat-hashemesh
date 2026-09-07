export type Review = { name: string; text: string; date?: string };
// REAL REVIEWS ONLY: Add approved guest text/name here when supplied.
// Example structure: { name: ..., text: ..., date: ... }
// Keep empty until authentic reviews are available; no fabricated ratings.
export const reviews: Review[] = [];
