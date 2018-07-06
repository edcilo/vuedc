import { CssInterface, ContentInterface, ContainerInterface } from '@/components/Scroll/interfaces/css';

interface ObjString {
    [key: string]: any;
};

export function get(element: HTMLElement): CSSStyleDeclaration {
    return window.getComputedStyle(element);
}

export function set(element: HTMLElement, obj: ObjString): HTMLElement {
    for (const key in obj) {
        let val : string = obj[key];

        if (typeof val === "number") {
            val = `${val}px`;
        }

        (<any>element.style)[key] = val;
        // element.style[key] = val;
    }

    return element;
}

export function isRtl(element: HTMLElement): boolean {
    return get(element).direction === "rtl";
}

export function isNegativeScroll(element: HTMLElement): boolean {
    const originalScrollLeft = element.scrollLeft;
    element.scrollLeft = -1;

    let result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;

    return result;
}

export function negativeScrollAdjustment(element: HTMLElement, isNegativeScroll: boolean): number {
    return isNegativeScroll
        ? element.scrollWidth - element.clientWidth
        : 0;
}

export function reach(element: HTMLElement, content: ContentInterface, container: ContainerInterface): CssInterface {
    let {contentWidth, contentHeight} = content;
    let {containerWidth, containerHeight} = container;

    return {
        x: element.scrollLeft <= 0
            ? "start"
            : element.scrollLeft >= contentWidth - containerWidth
                ? "end"
                : null,
        y: element.scrollTop <= 0
            ? "start"
            : element.scrollTop >= contentHeight - containerHeight
                ? "end"
                : null,
    };
}
