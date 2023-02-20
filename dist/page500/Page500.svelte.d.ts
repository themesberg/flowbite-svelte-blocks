import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        h1Class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h1: {};
        paragraph: {};
    };
};
export type Page500Props = typeof __propDef.props;
export type Page500Events = typeof __propDef.events;
export type Page500Slots = typeof __propDef.slots;
export default class Page500 extends SvelteComponentTyped<Page500Props, Page500Events, Page500Slots> {
}
export {};
