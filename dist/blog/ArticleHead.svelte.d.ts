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
export type ArticleHeadProps = typeof __propDef.props;
export type ArticleHeadEvents = typeof __propDef.events;
export type ArticleHeadSlots = typeof __propDef.slots;
export default class ArticleHead extends SvelteComponentTyped<ArticleHeadProps, ArticleHeadEvents, ArticleHeadSlots> {
}
export {};
