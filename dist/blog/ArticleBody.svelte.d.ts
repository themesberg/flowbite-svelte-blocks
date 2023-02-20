import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        h2Class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h2: {};
        paragraph: {};
    };
};
export type ArticleBodyProps = typeof __propDef.props;
export type ArticleBodyEvents = typeof __propDef.events;
export type ArticleBodySlots = typeof __propDef.slots;
export default class ArticleBody extends SvelteComponentTyped<ArticleBodyProps, ArticleBodyEvents, ArticleBodySlots> {
}
export {};
