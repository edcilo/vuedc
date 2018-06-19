<template>
    <div ref="mask" class="ve-mask" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "veMask",
        props: {
            fullscreen: {
                type: Boolean,
                default: false
            },
            opacity: {
                type: Number,
                default: 1
            },
            open: {
                type: Boolean,
                default: false
            },
            speed: {
                type: Number,
                default: 300
            }
        },
        data: function() {
            const transitionDuration = `${this.speed}ms`;

            return {
                styles: {
                    transitionDuration,
                    display: "none",
                    opacity: 0
                }
            };
        },
        watch: {
            fullscreen() {
                this.toggleFullscreen();
            },
            opacity(val) {
                this.styles.opacity = val;
            },
            open() {
                this.toggleOpen();
            },
            speed(val) {
                this.styles.transitionDuration = `${val}ms`;
            }
        },
        methods: {
            toggleOpen() {
                this.styles.display = null;

                if (this.open) {
                    this.styles.opacity = this.opacity;
                } else {
                    this.styles.opacity = 0;
                }

                window.setTimeout(this.changeDisplay, this.speed);
            },
            changeDisplay() {
                if (!this.open) {
                    this.styles.display = "none";
                }
            },
            toggleFullscreen() {
                if (this.fullscreen) {
                    this.openFullscreen();
                } else {
                    this.quitFullscreen();
                }
            },
            openFullscreen() {
                const body = document.querySelector('body');
                body.style["position"] = "relative";
                body.style["overflow"] = "hidden";

                this.styles.position = "fixed";
            },
            quitFullscreen() {
                const body = document.querySelector('body');
                body.style["position"] = null;
                body.style["overflow"] = null;

                this.styles.position = null;
            }
        },
        mounted() {
            this.$nextTick(function() {
                this.toggleFullscreen();
                this.toggleOpen();
            });
        }
    }
</script>

<style lang="scss" scoped>
@import "./../Styles/helpers/variables";

.ve-loader-mask {
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
