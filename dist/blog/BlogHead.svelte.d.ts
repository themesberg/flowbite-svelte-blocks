import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        h2Class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h2: {};
        paragraph: {};
    };
};
export type BlogHeadProps = typeof __propDef.props;
export type BlogHeadEvents = typeof __propDef.events;
export type BlogHeadSlots = typeof __propDef.slots;
export default class BlogHead extends SvelteComponentTyped<BlogHeadProps, BlogHeadEvents, BlogHeadSlots> {
}
export {};
