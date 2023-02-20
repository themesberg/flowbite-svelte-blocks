import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        h2Class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h2: {};
        default: {};
    };
};
export type NewsletterProps = typeof __propDef.props;
export type NewsletterEvents = typeof __propDef.events;
export type NewsletterSlots = typeof __propDef.slots;
export default class Newsletter extends SvelteComponentTyped<NewsletterProps, NewsletterEvents, NewsletterSlots> {
}
export {};
