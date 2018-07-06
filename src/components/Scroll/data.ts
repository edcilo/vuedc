import cls from "@/components/Scroll/lib/class-names";
import {
    ReachInterface,
    ElementClassesInterface,
    RailAxisClassesInterface,
    RailAxisStyleInterface,
    BarAxisClassesInterface,
    DataInterface
} from '@/components/Scroll/interfaces/data';

const reach: ReachInterface = {
    x: "",
    y: ""
};

const elementClasses: ElementClassesInterface = {};
elementClasses[cls.main] = true;
elementClasses[cls.state.focus] = false;

const railXClasses: RailAxisClassesInterface = {};
railXClasses[cls.element.rail("x")] = true;

const railXStyle: RailAxisStyleInterface = { display: "none" };

const barXClasses: BarAxisClassesInterface = {};
barXClasses[cls.element.thumb("x")] = true;

const railYClasses: RailAxisClassesInterface = {};
railYClasses[cls.element.rail("y")] = true;

const railYStyle: RailAxisStyleInterface = { display: "none" };

const barYClasses: BarAxisClassesInterface = {};
barYClasses[cls.element.thumb("y")] = true;

const data: DataInterface = {
    settings:                 {},
    element:                  null,
    elementClasses,

    scrollbarX:               null,
    scrollbarXRail:           null,
    scrollbarY:               null,
    scrollbarYRail:           null,

    event:                    null,
    ownerDocument:            null,
    isAlive:                  false,
    isRtl:                    false,
    isNegativeScroll:         false,
    negativeScrollAdjustment: 0,
    reach,

    lastScrollTop:            null,
    lastScrollLeft:           null,

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
