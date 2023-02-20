import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        sectionClass?: string | undefined;
        name?: "blog" | "cta" | "ctawithimg" | "contact" | "content" | "contentwithimg" | "default" | "faq" | "feature" | "forgotpassword" | "headingwithctabutton" | "heroDefault" | "heroVisual" | "login" | "logos" | "maintenance" | "newsletter" | "none" | "page500" | "page404" | "pricing" | "register" | "reset" | "social" | "tableheader" | "team" | "testimonial" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SectionProps = typeof __propDef.props;
export type SectionEvents = typeof __propDef.events;
export type SectionSlots = typeof __propDef.slots;
export default class Section extends SvelteComponentTyped<SectionProps, SectionEvents, SectionSlots> {
}
export {};
