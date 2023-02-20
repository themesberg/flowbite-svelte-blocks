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
export type ForgotPasswordProps = typeof __propDef.props;
export type ForgotPasswordEvents = typeof __propDef.events;
export type ForgotPasswordSlots = typeof __propDef.slots;
export default class ForgotPassword extends SvelteComponentTyped<ForgotPasswordProps, ForgotPasswordEvents, ForgotPasswordSlots> {
}
export {};
