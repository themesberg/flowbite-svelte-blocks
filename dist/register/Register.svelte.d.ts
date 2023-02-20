import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        href?: string | undefined;
        aClass?: string | undefined;
        divClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        top: {};
        default: {};
    };
};
export type RegisterProps = typeof __propDef.props;
export type RegisterEvents = typeof __propDef.events;
export type RegisterSlots = typeof __propDef.slots;
export default class Register extends SvelteComponentTyped<RegisterProps, RegisterEvents, RegisterSlots> {
}
export {};
