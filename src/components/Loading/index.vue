<template>
    <div class="ve-loading">
        <ve-mask class="ve-loading-mask" :opacity="opacity" :open="open" :speed="speed" :fullscreen="fullscreen">
            <div class="ve-loading-spinner">
                <spinner />
            </div>
            <div class="ve-loading-content">
                <slot></slot>
            </div>
        </ve-mask>
    </div>
</template>

<script>
    import veMask from "./../Mask";
    import Spinner from "./../Spinner";

    export default {
        name: "Loading",
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
            veMask,
            Spinner
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../Styles/helpers/variables";
    @import "./../Styles/helpers/animations";

    .ve-loading-spinner {
        width: 40px;
        height: 40px;
    }

    .ve-loading-content {
        margin-top: $margin;
    }
</style>
