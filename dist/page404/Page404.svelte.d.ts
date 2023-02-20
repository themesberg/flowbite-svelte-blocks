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
export type Page404Props = typeof __propDef.props;
export type Page404Events = typeof __propDef.events;
export type Page404Slots = typeof __propDef.slots;
export default class Page404 extends SvelteComponentTyped<Page404Props, Page404Events, Page404Slots> {
}
export {};
