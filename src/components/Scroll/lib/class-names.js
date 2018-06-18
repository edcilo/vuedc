const cls = {
    main: "ve-scroll",
    element: {
        thumb: x => `ves__thumb-${x}`,
        rail: x => `ves__rail-${x}`,
        consuming: "ves__child--consume",
    },
    state: {
        focus: "ves--focus",
        clicking: "ves--clicking",
        active: x => `ves--active-${x}`,
        scrolling: x => `ves--scrolling-${x}`,
    },
};

export default cls;

/*
 * Helper methods
 */
const scrollingClassTimeout = { x: null, y: null };

export function addScrollingClass(i, x) {
    const classList = i.element.classList;
    const className = cls.state.scrolling(x);

    if (classList.contains(className)) {
        clearTimeout(scrollingClassTimeout[x]);
    } else {
        classList.add(className);
    }
}

export function removeScrollingClass(i, x) {
    scrollingClassTimeout[x] = setTimeout(
        () => i.isAlive && i.element.classList.remove(cls.state.scrolling(x)),
        i.settings.scrollingThreshold
    );
}

export function setScrollingClassInstantly(i, x) {
    addScrollingClass(i, x);
    removeScrollingClass(i, x);
}
