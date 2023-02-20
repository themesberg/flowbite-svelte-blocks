import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        dlClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SocialProps = typeof __propDef.props;
export type SocialEvents = typeof __propDef.events;
export type SocialSlots = typeof __propDef.slots;
export default class Social extends SvelteComponentTyped<SocialProps, SocialEvents, SocialSlots> {
}
export {};
