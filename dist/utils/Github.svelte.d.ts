import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        href?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GithubProps = typeof __propDef.props;
export type GithubEvents = typeof __propDef.events;
export type GithubSlots = typeof __propDef.slots;
export default class Github extends SvelteComponentTyped<GithubProps, GithubEvents, GithubSlots> {
}
export {};
