import cls, { addScrollingClass, removeScrollingClass } from "@/components/Scroll/lib/class-names";
import updateGeometry from "@/components/Scroll/update-geometry";

export default function(i) {
    bindMouseScrollHandler(i, [
        "containerWidth",
        "contentWidth",
        "pageX",
        "railXWidth",
        "scrollbarX",
        "scrollbarXWidth",
        "scrollLeft",
        "x",
        "scrollbarXRail",
    ]);

    bindMouseScrollHandler(i, [
        "containerHeight",
        "contentHeight",
        "pageY",
        "railYHeight",
        "scrollbarY",
        "scrollbarYHeight",
        "scrollTop",
        "y",
        "scrollbarYRail",
    ]);
}

function bindMouseScrollHandler(i, [ containerHeight, contentHeight, page, railHeight, scrollbar, scrollbarHeight, scrollTop, axis, scrollbarRail ]) {
    const element = i.element;

    let startingScrollTop = null;
    let startingMousepage = null;
    let scrollBy = null;

    function mouseMoveHandler(e) {
        element[scrollTop] = startingScrollTop + scrollBy * (e[page] - startingMousepage);
        addScrollingClass(i, axis);
        updateGeometry(i);

        e.stopPropagation();
        e.preventDefault();
    }

    function mouseUpHandler() {
        removeScrollingClass(i, axis);
        i[scrollbarRail].classList.remove(cls.state.clicking);
        i.event.unbind(i.ownerDocument, "mousemove", mouseMoveHandler);
    }

    i.event.bind(i[scrollbar], "mousedown", e => {
        startingScrollTop = element[scrollTop];
        startingMousepage = e[page];
        scrollBy = (i[contentHeight] - i[containerHeight]) / (i[railHeight] - i[scrollbarHeight]);

        i.event.bind(i.ownerDocument, "mousemove", mouseMoveHandler);
        i.event.once(i.ownerDocument, "mouseup", mouseUpHandler);

        i[scrollbarRail].classList.add(cls.state.clicking);

        e.stopPropagation();
        e.preventDefault();
    });
}
