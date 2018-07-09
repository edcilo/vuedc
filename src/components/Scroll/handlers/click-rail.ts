import updateGeometry from "@/components/Scroll/update-geometry";
import { DataInterface } from '@/components/Scroll/interfaces/data';

export default function(i: DataInterface): void
{
    i.event.bind(i.scrollbarY, "mousedown", (e: MouseEvent) => e.stopPropagation());
    i.event.bind(i.scrollbarYRail, "mousedown", (e: MouseEvent) => {
        const positionTop: number = e.pageY - window.pageYOffset - i.scrollbarYRail.getBoundingClientRect().top;
        const direction: number = positionTop > i.scrollbarYTop ? 1 : -1;

        i.element.scrollTop += direction * i.containerHeight;
        updateGeometry(i);

        e.stopPropagation();
    });

    i.event.bind(i.scrollbarX, "mousedown", (e: MouseEvent) => e.stopPropagation());
    i.event.bind(i.scrollbarXRail, "mousedown", (e: MouseEvent) => {
        const positionLeft: number = e.pageX - window.pageXOffset - i.scrollbarXRail.getBoundingClientRect().left;
        const direction: number = positionLeft > i.scrollbarXLeft ? 1 : -1;

        i.element.scrollLeft += direction * i.containerWidth;
        updateGeometry(i);

        e.stopPropagation();
    });
}
