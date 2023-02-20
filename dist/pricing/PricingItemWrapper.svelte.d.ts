import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        ulClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        btn: {};
    };
};
export type PricingItemWrapperProps = typeof __propDef.props;
export type PricingItemWrapperEvents = typeof __propDef.events;
export type PricingItemWrapperSlots = typeof __propDef.slots;
export default class PricingItemWrapper extends SvelteComponentTyped<PricingItemWrapperProps, PricingItemWrapperEvents, PricingItemWrapperSlots> {
}
export {};
