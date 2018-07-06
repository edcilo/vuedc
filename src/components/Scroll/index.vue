<template>
    <div ref="element" :class="elementClasses">
        <div class="content" style="width: 400px">
            <slot></slot>
        </div>
        <div ref="scrollbarXRail" :class="railXClasses">
            <div ref="scrollbarX" :class="barXClasses" tabindex="0" />
        </div>
        <div ref="scrollbarYRail" :class="railYClasses">
            <div ref="scrollbarY" :class="barYClasses" tabindex="0" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import data from "@/components/Scroll/data";
import defaultSettings from './settings';
import properties from './properties';

import Scrollbar from './scroll';

@Component
export default class veScroll extends Vue {
    @Prop({ default: () => { return {} } })
    private settings!: Object;

    public $refs!: {
        element:        HTMLElement,
        scrollbarXRail: HTMLElement,
        scrollbarX:     HTMLElement,
        scrollbarYRail: HTMLElement,
        scrollbarY:     HTMLElement
    };

    private Scrollbar = null;
    private elementClasses: Object = data.elementClasses;

    private barXClasses: Object = data.barXClasses;
    private barYClasses: Object = data.barYClasses;

    private railXClasses: Object = data.railXClasses;
    private railYClasses: Object = data.railYClasses;

    initScrollbar() {
        data.settings = Object.assign({}, defaultSettings, this.settings);

        data.element = this.$refs.element;
        data.scrollbarXRail = this.$refs.scrollbarXRail;
        data.scrollbarX = this.$refs.scrollbarX;
        data.scrollbarYRail = this.$refs.scrollbarYRail;
        data.scrollbarY = this.$refs.scrollbarY;

        this.Scrollbar = new Scrollbar(data);
    }

    dispatchEvent(suffix: string) {
        this.$emit(`scroll-${suffix}`);
    }

    mounted() {
        this.$nextTick(function() {
            this.initScrollbar();

            this.$refs.element.addEventListener("ps-scroll-y", () => this.dispatchEvent("y"));
            this.$refs.element.addEventListener("ps-scroll-up", () => this.dispatchEvent("up"));
            this.$refs.element.addEventListener("ps-scroll-down", () => this.dispatchEvent("down"));
            this.$refs.element.addEventListener("ps-y-reach-start", () => this.dispatchEvent("y-reach-start"));
            this.$refs.element.addEventListener("ps-y-reach-end", () => this.dispatchEvent("y-reach-end"));

            this.$refs.element.addEventListener("ps-scroll-x", () => this.dispatchEvent("x"));
            this.$refs.element.addEventListener("ps-scroll-left", () => this.dispatchEvent("left"));
            this.$refs.element.addEventListener("ps-scroll-right", () => this.dispatchEvent("right"));
            this.$refs.element.addEventListener("ps-x-reach-start", () => this.dispatchEvent("x-reach-start"));
            this.$refs.element.addEventListener("ps-x-reach-end", () => this.dispatchEvent("x-reach-end"));
        });
    }
}
</script>

<style lang="sass" scoped>
    @import "./styles";
</style>
