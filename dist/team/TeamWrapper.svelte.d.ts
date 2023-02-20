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
export type TeamWrapperProps = typeof __propDef.props;
export type TeamWrapperEvents = typeof __propDef.events;
export type TeamWrapperSlots = typeof __propDef.slots;
export default class TeamWrapper extends SvelteComponentTyped<TeamWrapperProps, TeamWrapperEvents, TeamWrapperSlots> {
}
export {};
