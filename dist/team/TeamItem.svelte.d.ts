import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        imgClass?: string | undefined;
        h3Class?: string | undefined;
        spanClass?: string | undefined;
        href?: string | undefined;
        src?: string | undefined;
        alt?: string | undefined;
        name?: string | undefined;
        jobTitle?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        social: {};
    };
};
export type TeamItemProps = typeof __propDef.props;
export type TeamItemEvents = typeof __propDef.events;
export type TeamItemSlots = typeof __propDef.slots;
export default class TeamItem extends SvelteComponentTyped<TeamItemProps, TeamItemEvents, TeamItemSlots> {
}
export {};
