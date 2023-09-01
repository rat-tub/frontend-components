import { writable } from "svelte/store";
import type { FlexBoxInterface } from "./box";

export let boxAdjust = writable<FlexBoxInterface>();
export let count = writable(0);
export let toggle = writable(false);
