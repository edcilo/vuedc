import { DataInterface } from '@/components/Scroll/interfaces/data';
import railOffsetInterface from '@/components/Scroll/interfaces/updateGeometry';
import * as CSS from "@/components/Scroll/lib/css";
import cls from "@/components/Scroll/lib/class-names";

export default function(i: DataInterface) {
    if (i.element === null) {
        throw new Error("No HTMLElement selected");
    }

    const element: HTMLElement = i.element;

    const roundedScrollTop = Math.floor(element.scrollTop);
    i.containerWidth = element.clientWidth;
    i.containerHeight = element.clientHeight;
    i.contentWidth = element.scrollWidth;
    i.contentHeight = element.scrollHeight;

    if (!i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth) {
        i.scrollbarXActive = true;
        i.railXWidth = i.containerWidth - i.railXMarginWidth;
        i.railXRatio = i.containerWidth / i.railXWidth;
        i.scrollbarXWidth = getThumbSize(i, i.railXWidth * i.containerWidth / i.contentWidth);
        i.scrollbarXLeft = (i.negativeScrollAdjustment + element.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth);
    } else {
        i.scrollbarXActive = false;
    }

    if (!i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight) {
        i.scrollbarYActive = true;
        i.railYHeight = i.containerHeight - i.railYMarginHeight;
        i.railYRatio = i.containerHeight / i.railYHeight;
        i.scrollbarYHeight = getThumbSize(i, i.railYHeight * i.containerHeight / i.contentHeight);
        i.scrollbarYTop = roundedScrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight);
    } else {
        i.scrollbarYActive = false;
    }

    if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
        i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
    }

    if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
        i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
    }

    updateCss(element, i);

    if (i.scrollbarXActive) {
        element.classList.add(cls.state.active("x"));
    } else {
        element.classList.remove(cls.state.active("x"));
        i.scrollbarXWidth = 0;
        i.scrollbarXLeft = 0;
        element.scrollLeft = 0;
    }

    if (i.scrollbarYActive) {
        element.classList.add(cls.state.active("y"));
    } else {
        element.classList.remove(cls.state.active("y"));
        i.scrollbarYHeight = 0;
        i.scrollbarYTop = 0;
        element.scrollTop = 0;
    }
}

function getThumbSize(i: DataInterface, thumbSize: number): number {
    if (i.settings.minScrollbarLength) {
        thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
    }

    if (i.settings.maxScrollbarLength) {
        thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
    }

    return thumbSize;
}

function updateCss(element: HTMLElement, i: DataInterface) {
    const xRailOffset: railOffsetInterface = { width: i.railXWidth, height: 0, top: 0, right: 0, bottom: 0, left: 0 };
    const roundedScrollTop = Math.floor(element.scrollTop);

    if (i.isRtl) {
        xRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth - i.contentWidth;
    } else {
        xRailOffset.left = element.scrollLeft;
    }

    if (i.isScrollbarXUsingBottom) {
        xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
    } else {
        xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
    }

    if (i.scrollbarXRail === null) {
        throw new Error("No HTMLElement selected");
    }
    CSS.set(i.scrollbarXRail, xRailOffset);

    const yRailOffset: railOffsetInterface = { width: 0, height: i.railYHeight, top: roundedScrollTop, right: 0, bottom: 0, left: 0 };

    if (i.isScrollbarYUsingRight) {
        if (i.isRtl) {
            yRailOffset.right =
                i.contentWidth - (i.negativeScrollAdjustment + element.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth;
        } else {
            yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
        }
    } else {
        if (i.isRtl) {
            yRailOffset.left =
                i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth * 2 - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth;
        } else {
            yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
        }
    }

    if (i.scrollbarYRail === null) {
        throw new Error("No HTMLElement selected");
    }
    CSS.set(i.scrollbarYRail, yRailOffset);

    if (i.scrollbarX === null) {
        throw new Error("No HTMLElement selected");
    }
    CSS.set(i.scrollbarX, { left: i.scrollbarXLeft, width: i.scrollbarXWidth - i.railBorderXWidth });

    if (i.scrollbarY === null) {
        throw new Error("No HTMLElement selected");
    }
    CSS.set(i.scrollbarY, { top: i.scrollbarYTop, height: i.scrollbarYHeight - i.railBorderYWidth });
}
