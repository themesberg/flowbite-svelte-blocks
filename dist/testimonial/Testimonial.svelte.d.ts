import { SvelteComponentTyped } from "svelte";
import type { SvelteComponent } from 'svelte';
declare const __propDef: {
    props: {
        [x: string]: any;
        icon?: typeof SvelteComponent | null | undefined;
        figureClass?: string | undefined;
        figureFooterClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        footer: {};
    };
};
export type TestimonialProps = typeof __propDef.props;
export type TestimonialEvents = typeof __propDef.events;
export type TestimonialSlots = typeof __propDef.slots;
export default class Testimonial extends SvelteComponentTyped<TestimonialProps, TestimonialEvents, TestimonialSlots> {
}
export {};
