export interface ReachInterface {
    x: string;
    y: string;
};

export interface ElementClassesInterface {
    [className: string]: boolean;
};

export interface RailAxisClassesInterface {
    [className: string]: boolean;
}

export interface RailAxisStyleInterface {
    display: string;
}

export interface BarAxisClassesInterface {
    [className: string]: boolean;
}

export interface DataInterface {
    settings:                 any;
    element:                  HTMLElement | null;
    elementClasses:           ElementClassesInterface;

    scrollbarX:               HTMLElement | null;
    scrollbarXRail:           HTMLElement | null;
    scrollbarY:               HTMLElement | null;
    scrollbarYRail:           HTMLElement | null;

    event:                    any;
    ownerDocument:            any;
    isAlive:                  boolean;
    isRtl:                    boolean;
    isNegativeScroll:         boolean;
    negativeScrollAdjustment: number;
    reach:                    ReachInterface;

    lastScrollTop:            any;
    lastScrollLeft:           any;

    railXClasses:             RailAxisClassesInterface;
    railXStyle:               RailAxisStyleInterface;
    railBorderXWidth:         number;
    railXMarginWidth:         number;
    railXWidth:               number;
    railXRatio:               number;

    barXClasses:              BarAxisClassesInterface;

    railYClasses:             RailAxisClassesInterface;
    railYStyle:               RailAxisStyleInterface;
    railBorderYWidth:         number;
    railYMarginHeight:        number;
    railYHeight:              number;
    railYRatio:               number;

    barYClasses:              BarAxisClassesInterface;

    isScrollbarXUsingBottom:  boolean;
    scrollbarXActive:         boolean;
    scrollbarXWidth:          number;
    scrollbarXTop:            number;
    scrollbarXBottom:         number;
    scrollbarXLeft:           number;

    isScrollbarYUsingRight:   boolean;
    scrollbarYOuterWidth:     number;
    scrollbarYActive:         boolean;
    scrollbarYHeight:         number;
    scrollbarYTop:            number;
    scrollbarYRight:          number;
    scrollbarYLeft:           number;

    containerWidth:           number;
    containerHeight:          number;
    contentWidth:             number;
    contentHeight:            number;
}
