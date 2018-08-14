import * as CSS from "./lib/css";
import cls from "./lib/class-names";
import { toInt } from "./lib/util";

export default function(i) {
    const element = i.element;

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

function getThumbSize(i, thumbSize) {
    if (i.settings.minScrollbarLength) {
        thumbSize = Math.max(thumbSize, toInt(i.settings.minScrollbarLength));
    }

    if (i.settings.maxScrollbarLength) {
        thumbSize = Math.min(thumbSize, toInt(i.settings.maxScrollbarLength));
    }

    return thumbSize;
}

function updateCss(element, i) {
    const xRailOffset = {
        width: i.railXWidth,
        height: null,
        top: null,
        right: null,
        bottom: null,
        left: null
    };

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

    CSS.set(i.scrollbarXRail, xRailOffset);

    const yRailOffset = {
        width: null,
        height: i.railYHeight,
        top: roundedScrollTop,
        right: null,
        bottom: null,
        left: null,
    };

    if (i.isScrollbarYUsingRight) {
        if (i.isRtl) {
            yRailOffset.right = i.contentWidth - (i.negativeScrollAdjustment + element.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth;
        } else {
            yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
        }
    } else {
        if (i.isRtl) {
            yRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth * 2 - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth;
        } else {
            yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
        }
    }

    CSS.set(i.scrollbarYRail, yRailOffset);
    CSS.set(i.scrollbarX, { left: i.scrollbarXLeft, width: i.scrollbarXWidth - i.railBorderXWidth });
    CSS.set(i.scrollbarY, { top: i.scrollbarYTop, height: i.scrollbarYHeight - i.railBorderYWidth });
}
