import * as CSS from '@/components/Scroll/lib/css';
import cls from "@/components/Scroll/lib/class-names";
import EventManager from "@/components/Scroll/lib/event-manager";
import processScrollDiff from "@/components/Scroll/process-scroll-diff";
import updateGeometry from "@/components/Scroll/update-geometry";
import { toInt, outerWidth } from "@/components/Scroll/lib/util";

import clickRail from "@/components/Scroll/handlers/click-rail";
import dragThumb from "@/components/Scroll/handlers/drag-thumb";
import keyboard from "@/components/Scroll/handlers/keyboard";
import wheel from "@/components/Scroll/handlers/mouse-wheel";
import touch from "@/components/Scroll/handlers/touch";

const handlers = {
    "click-rail": clickRail,
    "drag-thumb": dragThumb,
    keyboard,
    wheel,
    touch,
};

class Scrollbar {
    constructor($data) {
        this.data = $data;

        const focus = () => this.data.element.classList.add(cls.state.focus);
        const blur = () => this.data.element.classList.remove(cls.state.focus);

        this.data.isRtl = CSS.isRtl(this.data.element);
        this.data.isNegativeScroll = CSS.isNegativeScroll(this.data.element);
        this.data.negativeScrollAdjustment = CSS.negativeScrollAdjustment(this.data.element, this.data.isNegativeScroll);

        this.data.event = new EventManager();
        this.data.ownerDocument = this.data.element.ownerDocument || document;

        this.data.event.bind(this.data.scrollbarX, "focus", focus);
        this.data.event.bind(this.data.scrollbarX, "blur", blur);
        const railXStyle = CSS.get(this.data.scrollbarXRail);

        this.data.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
        if (isNaN(this.data.scrollbarXBottom)) {
            this.data.isScrollbarXUsingBottom = false;
            this.data.scrollbarXTop = toInt(railXStyle.top);
        }

        this.data.railBorderXWidth = toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
        CSS.set(this.data.scrollbarXRail, { display: "block" });
        this.data.railXMarginWidth = toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
        CSS.set(this.data.scrollbarXRail, { display: "" });

        this.data.event.bind(this.data.scrollbarY, "focus", focus);
        this.data.event.bind(this.data.scrollbarY, "blur", blur);
        const railYStyle = CSS.get(this.data.scrollbarYRail);

        this.data.scrollbarYRight = parseInt(railYStyle.right, 10);
        if (isNaN(this.data.scrollbarYRight)) {
            this.data.isScrollbarYUsingRight = false;
            this.data.scrollbarYLeft = toInt(railYStyle.left);
        }

        this.data.isRtl ? outerWidth(this.data.scrollbarY) : null;
        this.data.railBorderYWidth = toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
        CSS.set(this.data.scrollbarYRail, { display: "block" });
        this.data.railYMarginHeight = toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
        CSS.set(this.data.scrollbarYRail, { display: "" });

        this.data.reach = CSS.reach(
            this.data.element,
            { contentWidth: this.data.contentWidth, contentHeight: this.data.contentHeight },
            { containerWidth: this.data.containerWidth, containerHeight: this.data.containerHeight }
        );

        this.data.isAlive = true;
        this.data.settings.handlers.forEach(handlerName => handlers[handlerName](this.data));

        this.data.lastScrollTop = Math.floor(this.data.element.scrollTop);
        this.data.lastScrollLeft = this.data.element.scrollLeft;

        this.data.event.bind(this.data.element, "scroll", e => this.onScroll(e));
        updateGeometry(this.data);
    }

    onScroll() {
        if (!this.data.isAlive) {
            return;
        }

        updateGeometry(this.data);
        processScrollDiff(this.data, "top", this.data.element.scrollTop - this.data.lastScrollTop);
        processScrollDiff(this.data, "left", this.data.element.scrollLeft - this.data.lastScrollLeft);

        this.data.lastScrollTop = Math.floor(this.data.element.scrollTop);
        this.data.lastScrollLeft = this.data.element.scrollLeft;
    }

    update() {
        if (!this.isAlive) {
            return;
        }

        // Recalcuate negative scrollLeft adjustment
        this.data.negativeScrollAdjustment = this.data.isNegativeScroll
            ? this.data.element.scrollWidth - this.data.element.clientWidth
            : 0;

        // Recalculate rail margins
        CSS.set(this.data.scrollbarXRail, { display: "block" });
        CSS.set(this.data.scrollbarYRail, { display: "block" });
        this.data.railXMarginWidth =
            toInt(CSS.get(this.data.scrollbarXRail).marginLeft) +
            toInt(CSS.get(this.data.scrollbarXRail).marginRight);
        this.data.railYMarginHeight =
            toInt(CSS.get(this.data.scrollbarYRail).marginTop) +
            toInt(CSS.get(this.data.scrollbarYRail).marginBottom);

        // Hide scrollbars not to affect scrollWidth and scrollHeight
        CSS.set(this.datascrollbarXRail, { display: "none" });
        CSS.set(this.datascrollbarYRail, { display: "none" });

        updateGeometry(this.data);

        processScrollDiff(this.data, "top", 0, false, true);
        processScrollDiff(this.data, "left", 0, false, true);

        CSS.set(this.datascrollbarXRail, { display: "" });
        CSS.set(this.datascrollbarYRail, { display: "" });
    }
}

export default Scrollbar;
