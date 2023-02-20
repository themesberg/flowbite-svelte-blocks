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
        default: {};
    };
};
export type ContentProps = typeof __propDef.props;
export type ContentEvents = typeof __propDef.events;
export type ContentSlots = typeof __propDef.slots;
export default class Content extends SvelteComponentTyped<ContentProps, ContentEvents, ContentSlots> {
}
export {};
