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
export type TeamBodyProps = typeof __propDef.props;
export type TeamBodyEvents = typeof __propDef.events;
export type TeamBodySlots = typeof __propDef.slots;
export default class TeamBody extends SvelteComponentTyped<TeamBodyProps, TeamBodyEvents, TeamBodySlots> {
}
export {};
