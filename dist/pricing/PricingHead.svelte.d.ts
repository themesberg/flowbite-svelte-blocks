import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        h2Class?: string | undefined;
        pClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h2: {};
        paragraph: {};
    };
};
export type PricingHeadProps = typeof __propDef.props;
export type PricingHeadEvents = typeof __propDef.events;
export type PricingHeadSlots = typeof __propDef.slots;
export default class PricingHead extends SvelteComponentTyped<PricingHeadProps, PricingHeadEvents, PricingHeadSlots> {
}
export {};
