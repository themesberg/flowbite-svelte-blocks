import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        aClass?: string | undefined;
        imgClass?: string | undefined;
        src?: string | undefined;
        href?: string | undefined;
        alt?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ForgotPasswordHeaderProps = typeof __propDef.props;
export type ForgotPasswordHeaderEvents = typeof __propDef.events;
export type ForgotPasswordHeaderSlots = typeof __propDef.slots;
export default class ForgotPasswordHeader extends SvelteComponentTyped<ForgotPasswordHeaderProps, ForgotPasswordHeaderEvents, ForgotPasswordHeaderSlots> {
}
export {};
