export function get(element) {
    return getComputedStyle(element);
}

export function set(element, obj) {
    for (const key in obj) {
        let val = obj[key];
        if (typeof val === "number") {
            val = `${val}px`;
        }
        element.style[key] = val;
    }
    return element;
}

export function isRtl(element) {
    return get(element).direction === "rtl";
}

export function isNegativeScroll(element) {
    const originalScrollLeft = element.scrollLeft;
    element.scrollLeft = -1;

    let result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;

    return result;
}

export function negativeScrollAdjustment(element, isNegativeScroll) {
    return isNegativeScroll
        ? element.scrollWidth - element.clientWidth
        : 0;
}

export function reach(element, content, container) {
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
