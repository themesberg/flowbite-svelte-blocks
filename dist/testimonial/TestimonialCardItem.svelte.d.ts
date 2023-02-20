import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        figureClass?: string | undefined;
        blockQuoteClass?: string | undefined;
        h3Class?: string | undefined;
        footerBlockQuoteClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h3: {};
        default: {};
        caption: {};
    };
};
export type TestimonialCardItemProps = typeof __propDef.props;
export type TestimonialCardItemEvents = typeof __propDef.events;
export type TestimonialCardItemSlots = typeof __propDef.slots;
export default class TestimonialCardItem extends SvelteComponentTyped<TestimonialCardItemProps, TestimonialCardItemEvents, TestimonialCardItemSlots> {
}
export {};
