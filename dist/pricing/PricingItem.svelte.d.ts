import { SvelteComponentTyped } from "svelte";
import type { SvelteComponent } from 'svelte';
declare const __propDef: {
    props: {
        [x: string]: any;
        liClass?: string | undefined;
        Icon?: typeof SvelteComponent | undefined;
        iconSize?: number | undefined;
        iconClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type PricingItemProps = typeof __propDef.props;
export type PricingItemEvents = typeof __propDef.events;
export type PricingItemSlots = typeof __propDef.slots;
export default class PricingItem extends SvelteComponentTyped<PricingItemProps, PricingItemEvents, PricingItemSlots> {
}
export {};
