import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        ctatype?: "default" | "none" | "image" | "heading" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        img: {};
        h2: {};
        default: {};
    };
};
export type CtaProps = typeof __propDef.props;
export type CtaEvents = typeof __propDef.events;
export type CtaSlots = typeof __propDef.slots;
export default class Cta extends SvelteComponentTyped<CtaProps, CtaEvents, CtaSlots> {
}
export {};
