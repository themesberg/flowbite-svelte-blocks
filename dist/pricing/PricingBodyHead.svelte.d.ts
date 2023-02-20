import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        h3Class?: string | undefined;
        pClass?: string | undefined;
        priceClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h3: {};
        paragraph: {};
        price: {};
    };
};
export type PricingBodyHeadProps = typeof __propDef.props;
export type PricingBodyHeadEvents = typeof __propDef.events;
export type PricingBodyHeadSlots = typeof __propDef.slots;
export default class PricingBodyHead extends SvelteComponentTyped<PricingBodyHeadProps, PricingBodyHeadEvents, PricingBodyHeadSlots> {
}
export {};
