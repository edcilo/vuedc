import SettingsInterface from "@/components/Scroll/interfaces/settings";
import { CssInterface } from '@/components/Scroll/interfaces/css';

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
    settings:                 SettingsInterface;
    element:                  HTMLElement;
    elementClasses:           ElementClassesInterface;

    scrollbarX:               HTMLElement;
    scrollbarXRail:           HTMLElement;
    scrollbarY:               HTMLElement;
    scrollbarYRail:           HTMLElement;

    event:                    any;
    ownerDocument:            Document;
    isAlive:                  boolean;
    isRtl:                    boolean;
    isNegativeScroll:         boolean;
    negativeScrollAdjustment: number;
    reach:                    CssInterface;

    lastScrollTop:            number;
    lastScrollLeft:           number;

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
