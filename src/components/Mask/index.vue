<template>
    <div ref="mask" class="ve-mask" :style="styles">
        <div class="ve-mask-background" :style="backgroundStyles"></div>
        <div class="ve-mask-content" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

interface Styles {
    display:            string;
    position:           string;
};

interface BackgroundStyles {
    opacity: number;
    transitionDuration: string;
}

@Component
export default class veMask extends Vue {
    @Prop({ default: false })
    protected fullscreen!: boolean;

    @Prop({ default: false })
    protected open!: boolean;

    @Prop({ default: 1 })
    protected opacity!: number;

    @Prop({ default: 300 })
    protected speed!: number;

    protected body = document.querySelector('body');

    protected styles: Styles = {
        display:            "none",
        position:           ""
    }

    protected backgroundStyles: BackgroundStyles = {
        transitionDuration: `${this.speed}ms`,
        opacity:            this.opacity
    }

    @Watch('fullscreen')
    onFullscreenChanged(val: boolean) {
        this.toggleFullscreen(val);
    }

    @Watch('open')
    onOpenChanged(val: boolean) {
        this.toggleOpen(val);
    }

    @Watch('opacity')
    onOpacityChanged(val: number) {
        this.backgroundStyles.opacity = val;
    }

    @Watch('speed')
    onSpeedChanged(val: number) {
        this.backgroundStyles.transitionDuration = `${val}ms`;
    }

    changeDisplay() {
        if (!this.open) {
            this.styles.display = "none";
        }
    }

    openFullscreen() {
        if (this.body) {
            this.body.style["position"] = "relative";
            this.body.style["overflow"] = "hidden";

            this.styles.position = "fixed";
        }
    }

    quitFullscreen() {
        if (this.body) {
            this.body.style["position"] = null;
            this.body.style["overflow"] = null;

            this.styles.position = "";
        }
    }

    toggleFullscreen(fullscreen: boolean) {
        if (fullscreen) {
            this.openFullscreen();
        } else {
            this.quitFullscreen();
        }
    }

    toggleOpen(open: boolean) {
        this.styles.display = '';

        if (open) {
            this.backgroundStyles.opacity = this.opacity;
        } else {
            this.backgroundStyles.opacity = 0;
        }

        window.setTimeout(this.changeDisplay, this.speed);
    }

    mounted() {
        this.$nextTick(() => {
            this.toggleFullscreen(this.fullscreen);
            this.toggleOpen(this.open);
        });
    }
}
</script>

<style lang="scss" scoped>
@import "./../Styles/helpers/variables";

.ve-mask {
    position:        absolute;
    width:           100%;
    height:          100%;
    top:             0;
    right:           0;
    bottom:          0;
    left:            0;
    display:         flex;
    flex-direction:  column;
    align-items:     center;
    justify-content: center;

    .ve-mask-background {
        position:   absolute;
        width:      100%;
        height:     100%;
        background: $c-black;

        transition: opacity $trans-speed ease-in-out;
    }

    .ve-mask-content {
        display:         flex;
        flex-direction:  column;
        align-items:     center;
        justify-content: center;
    }
}
</style>
