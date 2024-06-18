import { writable } from 'svelte/store';

export const user = writable({
    id: null,
    name: null,
    email: null,
    picture: null
});