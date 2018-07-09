import { setScrollingClassInstantly } from "@/components/Scroll/lib/class-names";
import { DataInterface } from '@/components/Scroll/interfaces/data';

function createEvent(name: string): CustomEvent
{
    if (typeof window.CustomEvent === "function") {
        return new CustomEvent(name);
    } else {
        const evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(name, false, false, undefined);
        return evt;
    }
}

export default function(i: DataInterface, axis: string, diff: number, useScrollingClass: boolean = true, forceFireReachEvent: boolean = false): void
{
    let fields!: Array<string>;

    if (axis === "top") {
        fields = [
            "contentHeight",
            "containerHeight",
            "scrollTop",
            "y",
            "up",
            "down",
        ];
    } else if (axis === "left") {
        fields = [
            "contentWidth",
            "containerWidth",
            "scrollLeft",
            "x",
            "left",
            "right",
        ];
    } else {
        throw new Error("A proper axis should be provided");
    }

    processScrollDiff(i, diff, fields, useScrollingClass, forceFireReachEvent);
}

function processScrollDiff(
    i: DataInterface,
    diff: number,
    [contentHeight, containerHeight, scrollTop, y, up, down]: Array<string>,
    useScrollingClass: boolean = true,
    forceFireReachEvent: boolean = false
) {
    const element = i.element;

    // reset reach
    i.reach[y] = null;

    // 1 for subpixel rounding
    if (element[scrollTop] < 1) {
        i.reach[y] = "start";
    }

    // 1 for subpixel rounding
    if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
        i.reach[y] = "end";
    }

    if (diff) {
        element.dispatchEvent(createEvent(`ps-scroll-${y}`));

        if (diff < 0) {
            element.dispatchEvent(createEvent(`ps-scroll-${up}`));
        } else if (diff > 0) {
            element.dispatchEvent(createEvent(`ps-scroll-${down}`));
        }

        if (useScrollingClass) {
            setScrollingClassInstantly(i, y);
        }
    }

    if (i.reach[y] && (diff || forceFireReachEvent)) {
        element.dispatchEvent(createEvent(`ps-${y}-reach-${i.reach[y]}`));
    }
}
