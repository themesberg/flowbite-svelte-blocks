import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type PricingCardProps = typeof __propDef.props;
export type PricingCardEvents = typeof __propDef.events;
export type PricingCardSlots = typeof __propDef.slots;
export default class PricingCard extends SvelteComponentTyped<PricingCardProps, PricingCardEvents, PricingCardSlots> {
}
export {};
