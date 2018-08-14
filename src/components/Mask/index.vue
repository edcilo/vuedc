<template>
    <div ref="mask" class="ve-mask" :style="styles">
        <div class="ve-mask-background" :style="backgroundStyles"></div>
        <div class="ve-mask-content" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="js">
export default {
    name: 'veMask',
    props: {
        fullscreen: {
            type: Boolean,
            default: false
        },
        open: {
            type: Boolean,
            default: false
        },
        opacity: {
            type: Number,
            default: 1
        },
        speed: {
            type: Number,
            default: 300
        }
    },
    data: function() {
        return {
            body: document.querySelector('body'),
            styles: {
                display: 'none',
                position: null
            },
            backgroundStyles: {
                transitionDuration: `${this.speed}ms`,
                opacity: this.opacity
            }
        }
    },
    watch: {
        fullscreen(val) {
            this.toggleFullscreen(val);
        },
        open(val) {
            this.toggleOpen(val);
        },
        opacity(val) {
            this.backgroundStyles.opacity = val;
        },
        speed(val) {
            this.backgroundStyles.transitionDuration = `${val}ms`;
        }
    },
    methods: {
        changeDisplay() {
            if (!this.open) {
                this.styles.display = "none";
            }
        },
        openFullscreen() {
            if (this.body) {
                this.body.style["position"] = "relative";
                this.body.style["overflow"] = "hidden";

                this.styles.position = "fixed";
            }
        },
        quitFullscreen() {
            if (this.body) {
                this.body.style["position"] = null;
                this.body.style["overflow"] = null;

                this.styles.position = "";
            }
        },
        toggleFullscreen(fullscreen) {
            if (fullscreen) {
                this.openFullscreen();
            } else {
                this.quitFullscreen();
            }
        },
        toggleOpen(open) {
            this.styles.display = '';

            if (open) {
                this.backgroundStyles.opacity = this.opacity;
            } else {
                this.backgroundStyles.opacity = 0;
            }

            window.setTimeout(this.changeDisplay, this.speed);
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.toggleFullscreen(this.fullscreen);
            this.toggleOpen(this.open);
        });
    }
}
</script>

<style lang="scss">
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
