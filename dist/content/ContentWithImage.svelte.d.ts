import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        h2Class?: string | undefined;
        imgDivClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h2: {};
        default: {};
        image: {};
    };
};
export type ContentWithImageProps = typeof __propDef.props;
export type ContentWithImageEvents = typeof __propDef.events;
export type ContentWithImageSlots = typeof __propDef.slots;
export default class ContentWithImage extends SvelteComponentTyped<ContentWithImageProps, ContentWithImageEvents, ContentWithImageSlots> {
}
export {};
