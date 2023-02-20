import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        h1Class?: string | undefined;
        h2Class?: string | undefined;
        pClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h1: {};
        h2: {};
        paragraph: {};
        default: {};
    };
};
export type HeroHeaderProps = typeof __propDef.props;
export type HeroHeaderEvents = typeof __propDef.events;
export type HeroHeaderSlots = typeof __propDef.slots;
export default class HeroHeader extends SvelteComponentTyped<HeroHeaderProps, HeroHeaderEvents, HeroHeaderSlots> {
}
export {};
