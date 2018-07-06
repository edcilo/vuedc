import cls from "./lib/class-names";

const reach = { x: null, y: null };

const elementClasses = {};
elementClasses[cls.main] = true;
elementClasses[cls.state.focus] = false;

const railXClasses = {};
railXClasses[cls.element.rail("x")] = true;
const railXStyle = {
    display: "none",
};

const barXClasses = {};
barXClasses[cls.element.thumb("x")] = true;

const railYClasses = {};
railYClasses[cls.element.rail("y")] = true;
const railYStyle = {
    display: "none",
};

const barYClasses = {};
barYClasses[cls.element.thumb("y")] = true;

export default {
    settings: {},
    element: null,
    elementClasses,

    event: null,
    ownerDocument: null,
    isAlive: false,
    isRtl: false,
    isNegativeScroll: false,
    negativeScrollAdjustment: 0,
    reach,

    lastScrollTop: null,
    lastScrollLeft: null,

    railXClasses,
    railXStyle,
    railBorderXWidth: null,
    railXMarginWidth: null,
    railXWidth: null,
    railXRatio: null,

    barXClasses,

    railYClasses,
    railYStyle,
    railBorderYWidth: null,
    railYMarginHeight: null,
    railYHeight: null,
    railYRatio: null,

    barYClasses,

    isScrollbarXUsingBottom: true,
    scrollbarXActive: null,
    scrollbarXWidth: null,
    scrollbarXTop: null,
    scrollbarXBottom: null,
    scrollbarXLeft: null,

    isScrollbarYUsingRight: true,
    scrollbarYOuterWidth: null,
    scrollbarYActive: null,
    scrollbarYHeight: null,
    scrollbarYTop: null,
    scrollbarYRight: null,
    scrollbarYLeft: null,

    containerWidth: null,
    containerHeight: null,
    contentWidth: null,
    contentHeight: null,
};
