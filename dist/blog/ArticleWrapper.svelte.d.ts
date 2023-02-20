import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        articleClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ArticleWrapperProps = typeof __propDef.props;
export type ArticleWrapperEvents = typeof __propDef.events;
export type ArticleWrapperSlots = typeof __propDef.slots;
export default class ArticleWrapper extends SvelteComponentTyped<ArticleWrapperProps, ArticleWrapperEvents, ArticleWrapperSlots> {
}
export {};
