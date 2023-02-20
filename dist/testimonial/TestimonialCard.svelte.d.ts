import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        headerClass?: string | undefined;
        divClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        default: {};
    };
};
export type TestimonialCardProps = typeof __propDef.props;
export type TestimonialCardEvents = typeof __propDef.events;
export type TestimonialCardSlots = typeof __propDef.slots;
export default class TestimonialCard extends SvelteComponentTyped<TestimonialCardProps, TestimonialCardEvents, TestimonialCardSlots> {
}
export {};
