import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type BlogBodyWrapperProps = typeof __propDef.props;
export type BlogBodyWrapperEvents = typeof __propDef.events;
export type BlogBodyWrapperSlots = typeof __propDef.slots;
export default class BlogBodyWrapper extends SvelteComponentTyped<BlogBodyWrapperProps, BlogBodyWrapperEvents, BlogBodyWrapperSlots> {
}
export {};
