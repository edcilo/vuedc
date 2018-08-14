import cls from "./lib/class-names"
import Settings from "./settings"

const reach = { x: "", y: "" };

const elementClasses = {};
elementClasses[cls.main] = true;
elementClasses[cls.state.focus] = false;

const railXClasses = {};
railXClasses[cls.element.rail("x")] = true;

const railXStyle = { display: "none" };

const barXClasses = {};
barXClasses[cls.element.thumb("x")] = true;

const railYClasses = {};
railYClasses[cls.element.rail("y")] = true;

const railYStyle = { display: "none" };

const barYClasses = {};
barYClasses[cls.element.thumb("y")] = true;

const data = {
    settings:                 Settings,
    element:                  null,
    elementClasses,

    scrollbarX:               null,
    scrollbarXRail:           null,
    scrollbarY:               null,
    scrollbarYRail:           null,

    event:                    null,
    ownerDocument:            document,
    isAlive:                  false,
    isRtl:                    false,
    isNegativeScroll:         false,
    negativeScrollAdjustment: 0,
    reach,

    lastScrollTop:            0,
    lastScrollLeft:           0,

    railXClasses,
    railXStyle,
    railBorderXWidth:         0,
    railXMarginWidth:         0,
    railXWidth:               0,
    railXRatio:               0,

    barXClasses,

    railYClasses,
    railYStyle,
    railBorderYWidth:         0,
    railYMarginHeight:        0,
    railYHeight:              0,
    railYRatio:               0,

    barYClasses,

    isScrollbarXUsingBottom:  true,
    scrollbarXActive:         false,
    scrollbarXWidth:          0,
    scrollbarXTop:            0,
    scrollbarXBottom:         0,
    scrollbarXLeft:           0,

    isScrollbarYUsingRight:   true,
    scrollbarYOuterWidth:     0,
    scrollbarYActive:         false,
    scrollbarYHeight:         0,
    scrollbarYTop:            0,
    scrollbarYRight:          0,
    scrollbarYLeft:           0,

    containerWidth:           0,
    containerHeight:          0,
    contentWidth:             0,
    contentHeight:            0,
};

export default data;
