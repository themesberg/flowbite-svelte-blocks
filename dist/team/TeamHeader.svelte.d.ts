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
        label: {};
        default: {};
    };
};
export type TeamHeaderProps = typeof __propDef.props;
export type TeamHeaderEvents = typeof __propDef.events;
export type TeamHeaderSlots = typeof __propDef.slots;
export default class TeamHeader extends SvelteComponentTyped<TeamHeaderProps, TeamHeaderEvents, TeamHeaderSlots> {
}
export {};
