import { DataInterface } from "@/components/Scroll/interfaces/data";

import * as CSS from "@/components/Scroll/lib/css";
import cls from "@/components/Scroll/lib/class-names";
import EventManager from "./lib/event-manager";
import processScrollDiff from "./process-scroll-diff";
import updateGeometry from "./update-geometry";
import { toInt, outerWidth } from "@/components/Scroll/lib/util";

import clickRail from "./handlers/click-rail";
import dragThumb from "./handlers/drag-thumb";
import keyboard from "./handlers/keyboard";
import wheel from "./handlers/mouse-wheel";
import touch from "./handlers/touch";

interface HandlerInterface {
    [handler: string]: (data: DataInterface) => void;
};

const handlers: HandlerInterface = {
    "click-rail": clickRail,
    "drag-thumb": dragThumb,
    keyboard,
    wheel,
    touch,
};

class Scrollbar {
    protected data!: DataInterface;

    constructor($data: DataInterface) {
        this.data = $data;

        const focus = () => this.data.element.classList.add(cls.state.focus);
        const blur = () => this.data.element.classList.remove(cls.state.focus);

        this.data.isRtl = CSS.isRtl(this.data.element);
        this.data.isNegativeScroll = CSS.isNegativeScroll(this.data.element);
        this.data.negativeScrollAdjustment = CSS.negativeScrollAdjustment(this.data.element, this.data.isNegativeScroll);

        this.data.event = new EventManager();
        this.data.ownerDocument = this.data.element.ownerDocument || document;

        // AXIS X
        this.data.event.bind(this.data.scrollbarX, "focus", focus);
        this.data.event.bind(this.data.scrollbarX, "blur", blur);

        const railXStyle: CSSStyleDeclaration = CSS.get(this.data.scrollbarXRail);

        if (railXStyle.bottom === null) {
            this.data.isScrollbarXUsingBottom = false;
            this.data.scrollbarXTop = toInt(railXStyle.top);
        } else {
            this.data.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
        }

        this.data.railBorderXWidth = toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
        CSS.set(this.data.scrollbarXRail, { display: "block" });
        this.data.railXMarginWidth = toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
        CSS.set(this.data.scrollbarXRail, { display: "" });

        // AXIS Y
        this.data.event.bind(this.data.scrollbarY, "focus", focus);
        this.data.event.bind(this.data.scrollbarY, "blur", blur);

        const railYStyle: CSSStyleDeclaration = CSS.get(this.data.scrollbarYRail);

        if (railYStyle.right === null) {
            this.data.isScrollbarYUsingRight = false;
            this.data.scrollbarYLeft = toInt(railYStyle.left);
        } else {
            this.data.scrollbarYRight = parseInt(railYStyle.right, 10);
        }

        //this.data.isRtl ? outerWidth(this.data.scrollbarY) : null;
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
        this.data.settings.handlers.forEach((handlerName: string) => handlers[handlerName](this.data));

        this.data.lastScrollTop = Math.floor(this.data.element.scrollTop);
        this.data.lastScrollLeft = this.data.element.scrollLeft;

        this.data.event.bind(this.data.element, "scroll", () => this.onScroll());
        updateGeometry(this.data);
    }

    onScroll(): void
    {
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
        if (!this.data.isAlive) {
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
        CSS.set(this.data.scrollbarXRail, { display: "none" });
        CSS.set(this.data.scrollbarYRail, { display: "none" });

        updateGeometry(this.data);

        processScrollDiff(this.data, "top", 0, false, true);
        processScrollDiff(this.data, "left", 0, false, true);

        CSS.set(this.data.scrollbarXRail, { display: "" });
        CSS.set(this.data.scrollbarYRail, { display: "" });
    }
}

export default Scrollbar;
