import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        outerDivClass?: string | undefined;
        innerDivClass?: string | undefined;
        contentDivClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type PopupProps = typeof __propDef.props;
export type PopupEvents = typeof __propDef.events;
export type PopupSlots = typeof __propDef.slots;
export default class Popup extends SvelteComponentTyped<PopupProps, PopupEvents, PopupSlots> {
}
export {};
