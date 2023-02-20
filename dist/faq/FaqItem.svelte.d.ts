import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        h3Class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h3: {};
        default: {};
    };
};
export type FaqItemProps = typeof __propDef.props;
export type FaqItemEvents = typeof __propDef.events;
export type FaqItemSlots = typeof __propDef.slots;
export default class FaqItem extends SvelteComponentTyped<FaqItemProps, FaqItemEvents, FaqItemSlots> {
}
export {};
