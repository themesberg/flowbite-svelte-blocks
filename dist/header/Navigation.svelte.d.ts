import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        navClass?: string | undefined;
        divClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type NavigationProps = typeof __propDef.props;
export type NavigationEvents = typeof __propDef.events;
export type NavigationSlots = typeof __propDef.slots;
export default class Navigation extends SvelteComponentTyped<NavigationProps, NavigationEvents, NavigationSlots> {
}
export {};
