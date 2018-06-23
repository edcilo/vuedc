<template>
    <div ref="mask" class="ve-mask" :style="styles">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class veMask extends Vue {
    @Prop({ default: false })
    fullscreen!: boolean;

    @Prop({ default: 1 })
    opacity!: number;

    @Prop({ default: false })
    open!: boolean;

    @Prop({ default: 300 })
    speed!: number;

    styles = {
        transitionDuration: `${this.speed}ms`,
        display: "none",
        opacity: 0,
        position: ""
    }

    @Watch('fullscreen')
    onFullscreenChanged() {
        this.toggleFullscreen();
    }

    @Watch('opacity')
    onOpacityChanged(val: number) {
        this.styles.opacity = val;
    }

    @Watch('open')
    onOpenChanged() {
        this.toggleOpen();
    }

    @Watch('speed')
    onSpeedChanged(val: number) {
        this.styles.transitionDuration = `${val}ms`;
    }

    changeDisplay() {
        if (!this.open) {
            this.styles.display = "none";
        }
    }

    openFullscreen() {
        const body = document.querySelector('body');

        if (body) {
            body.style["position"] = "relative";
            body.style["overflow"] = "hidden";

            this.styles.position = "fixed";
        }
    }

    quitFullscreen() {
        const body = document.querySelector('body');

        if (body) {
            body.style["position"] = null;
            body.style["overflow"] = null;

            this.styles.position = "";
        }
    }

    toggleFullscreen() {
        if (this.fullscreen) {
            this.openFullscreen();
        } else {
            this.quitFullscreen();
        }
    }

    toggleOpen() {
        this.styles.display = null;

        if (this.open) {
            this.styles.opacity = this.opacity;
        } else {
            this.styles.opacity = 0;
        }

        window.setTimeout(this.changeDisplay, this.speed);
    }

    mounted() {
        this.$nextTick(() => {
                this.toggleFullscreen();
                this.toggleOpen();
        });
    }
}
</script>

<style lang="scss" scoped>
@import "./../Styles/helpers/variables";

.ve-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: $c-white;

    transition: opacity $trans-speed ease-in-out;
}
</style>
