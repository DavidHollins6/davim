
import { writable } from 'svelte/store';
import type { Command } from '../schema/commands';

export const command = writable<Command>();
export const allCommands = writable<Command[]>();
