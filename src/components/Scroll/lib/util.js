import * as CSS from "./../lib/css";
import * as DOM from "./../lib/dom";

export function toInt(x) {
    if (x === null) {
        return 0;
    }

    return parseInt(x, 10) || 0;
}

export function isEditable(element) {
    return (
        DOM.matches(element, "input,[contenteditable]") ||
        DOM.matches(element, "select,[contenteditable]") ||
        DOM.matches(element, "textarea,[contenteditable]") ||
        DOM.matches(element, "button,[contenteditable]")
    );
}


export function outerWidth(element) {
    const styles = CSS.get(element);

    return (
        toInt(styles.width) +
        toInt(styles.paddingLeft) +
        toInt(styles.paddingRight) +
        toInt(styles.borderLeftWidth) +
        toInt(styles.borderRightWidth)
    );
}

export const env = {
    isWebKit: typeof document !== "undefined" && "WebkitAppearance" in document.documentElement.style,
    supportsTouch: typeof window !== "undefined" && ("ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
    supportsIePointer: typeof navigator !== "undefined" && navigator.msMaxTouchPoints,
    isChrome: typeof navigator !== "undefined" && /Chrome/i.test(navigator && navigator.userAgent),
};
