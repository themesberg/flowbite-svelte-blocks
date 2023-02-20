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
export type FeatureDefaultProps = typeof __propDef.props;
export type FeatureDefaultEvents = typeof __propDef.events;
export type FeatureDefaultSlots = typeof __propDef.slots;
export default class FeatureDefault extends SvelteComponentTyped<FeatureDefaultProps, FeatureDefaultEvents, FeatureDefaultSlots> {
}
export {};
