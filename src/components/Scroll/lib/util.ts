import * as CSS from "./css";
import * as DOM from "./dom";
import UtilInterface from "@/components/Scroll/interfaces/utils";

export function toInt(x: string | null): number
{
    if (x === null) {
        return 0;
    }

    return parseInt(x, 10) || 0;
}

export function isEditable(element: HTMLElement): boolean
{
    return (
        DOM.matches(element, "input,[contenteditable]") ||
        DOM.matches(element, "select,[contenteditable]") ||
        DOM.matches(element, "textarea,[contenteditable]") ||
        DOM.matches(element, "button,[contenteditable]")
    );
}


export function outerWidth(element: HTMLElement): number
{
    const styles: CSSStyleDeclaration = CSS.get(element);

    return (
        toInt(styles.width) +
        toInt(styles.paddingLeft) +
        toInt(styles.paddingRight) +
        toInt(styles.borderLeftWidth) +
        toInt(styles.borderRightWidth)
    );
}

export const env: UtilInterface = {
    isWebKit: typeof document !== "undefined" && "WebkitAppearance" in document.documentElement.style,
    supportsTouch: typeof window !== "undefined" && ("ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
    supportsIePointer: typeof navigator !== "undefined" && navigator.msMaxTouchPoints,
    isChrome: typeof navigator !== "undefined" && /Chrome/i.test(navigator && navigator.userAgent),
};
