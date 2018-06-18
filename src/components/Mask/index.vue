<template>
    <div class="ve-mask" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "veMask",
        props: {
            fullscreen: {
                type: Boolean,
                default: false,
            },
            open: {
                type: Boolean,
                default: false,
            }
        },
        data: function() {
            return {
                styles: {}
            };
        },
        watch: {
            fullscreen() {
                this.toggleFullscreen();
            },
            open() {
                this.toggleOpen();
            }
        },
        methods: {
            toggleOpen() {
                if (this.open) {
                    this.styles.display = null;
                } else {
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

                this.styles.position = "absolute";
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

    transition: opacity $trans-speed ease-in-out, opacity $trans-speed ease-in-out;
}
</style>
