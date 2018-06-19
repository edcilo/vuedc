<template>
    <div class="ve-loader">
        <ve-mask class="ve-loader-mask" :opacity="opacity" :open="open" :speed="speed" :fullscreen="fullscreen">
            <div class="ve-loader-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="ve-loader-content">
                <slot></slot>
            </div>
        </ve-mask>
    </div>
</template>

<script>
    import veMask from "./../Mask";

    export default {
        name: "Loader",
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
        components: {
            veMask
        }
    }
</script>

<style lang="sass" scoped>
    @import "./styles";
</style>
