import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        h2Class?: string | undefined;
        pClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h2: {};
        paragraph: {};
        default: {};
    };
};
export type ContactProps = typeof __propDef.props;
export type ContactEvents = typeof __propDef.events;
export type ContactSlots = typeof __propDef.slots;
export default class Contact extends SvelteComponentTyped<ContactProps, ContactEvents, ContactSlots> {
}
export {};
