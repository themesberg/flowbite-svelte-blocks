import { SvelteComponentTyped } from "svelte";
import type { SvelteComponent } from 'svelte';
declare const __propDef: {
    props: {
        [x: string]: any;
        Icon?: typeof SvelteComponent | undefined;
        h1Class?: string | undefined;
        pClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h1: {};
        paragraph: {};
    };
};
export type MaintenanceProps = typeof __propDef.props;
export type MaintenanceEvents = typeof __propDef.events;
export type MaintenanceSlots = typeof __propDef.slots;
export default class Maintenance extends SvelteComponentTyped<MaintenanceProps, MaintenanceEvents, MaintenanceSlots> {
}
export {};
