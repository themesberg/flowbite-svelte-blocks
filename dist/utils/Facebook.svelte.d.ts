import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        href?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FacebookProps = typeof __propDef.props;
export type FacebookEvents = typeof __propDef.events;
export type FacebookSlots = typeof __propDef.slots;
export default class Facebook extends SvelteComponentTyped<FacebookProps, FacebookEvents, FacebookSlots> {
}
export {};
