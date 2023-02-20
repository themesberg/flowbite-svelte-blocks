import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        hero?: "default" | "visual" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        head: {};
        default: {};
    };
};
export type HeroBodyProps = typeof __propDef.props;
export type HeroBodyEvents = typeof __propDef.events;
export type HeroBodySlots = typeof __propDef.slots;
export default class HeroBody extends SvelteComponentTyped<HeroBodyProps, HeroBodyEvents, HeroBodySlots> {
}
export {};
