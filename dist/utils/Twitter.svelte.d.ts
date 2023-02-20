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
export type TwitterProps = typeof __propDef.props;
export type TwitterEvents = typeof __propDef.events;
export type TwitterSlots = typeof __propDef.slots;
export default class Twitter extends SvelteComponentTyped<TwitterProps, TwitterEvents, TwitterSlots> {
}
export {};
