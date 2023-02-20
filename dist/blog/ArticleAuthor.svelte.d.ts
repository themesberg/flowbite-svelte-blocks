import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        authorDiv?: string | undefined;
        authorImgDiv?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        author: {};
        default: {};
    };
};
export type ArticleAuthorProps = typeof __propDef.props;
export type ArticleAuthorEvents = typeof __propDef.events;
export type ArticleAuthorSlots = typeof __propDef.slots;
export default class ArticleAuthor extends SvelteComponentTyped<ArticleAuthorProps, ArticleAuthorEvents, ArticleAuthorSlots> {
}
export {};
