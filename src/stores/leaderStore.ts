import { writable } from 'svelte/store';

export const leaderKey = writable("SPACE");
export const hasLeaderBeenSelected = writable(false);
