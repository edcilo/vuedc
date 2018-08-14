const cls = {
    main: "ve-scroll",
    element: {
        thumb: axis => `ves__thumb-${axis}`,
        rail: axis => `ves__rail-${axis}`,
        consuming: "ves__child--consume",
    },
    state: {
        focus: "ves--focus",
        clicking: "ves--clicking",
        active: axis => `ves--active-${axis}`,
        scrolling: axis => `ves--scrolling-${axis}`,
    },
};

export default cls;

/*
 * Helper methods
 */
const scrollingClassTimeout = { x: null, y: null };

export function addScrollingClass(data, axis) {
    const classList = data.element.classList;
    const className = cls.state.scrolling(axis);

    if (classList.contains(className)) {
        clearTimeout(scrollingClassTimeout[axis]);
    } else {
        classList.add(className);
    }
}

export function removeScrollingClass(data, axis) {
    scrollingClassTimeout[axis] = setTimeout(
        () => data.isAlive && (data.element && data.element.classList.remove(cls.state.scrolling(axis))),
        data.settings.scrollingThreshold
    );
}

export function setScrollingClassInstantly(data, axis) {
    addScrollingClass(data, axis);
    removeScrollingClass(data, axis);
}
