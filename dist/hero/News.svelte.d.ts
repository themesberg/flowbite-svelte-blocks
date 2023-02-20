import { SvelteComponentTyped } from "svelte";
import type { SvelteComponent } from 'svelte';
declare const __propDef: {
    props: {
        [x: string]: any;
        href?: string | undefined;
        iconSize?: string | undefined;
        iconClass?: string | undefined;
        icon?: typeof SvelteComponent | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type NewsProps = typeof __propDef.props;
export type NewsEvents = typeof __propDef.events;
export type NewsSlots = typeof __propDef.slots;
export default class News extends SvelteComponentTyped<NewsProps, NewsEvents, NewsSlots> {
}
export {};
