<template>
    <div class="ve-loading">
        <ve-mask class="ve-loading-mask" :opacity="opacity" :open="open" :speed="speed" :fullscreen="fullscreen">
            <div class="ve-loading-spinner">
                <ve-spinner />
            </div>
            <div class="ve-loading-content" v-if="hasBody">
                <slot></slot>
            </div>
        </ve-mask>
    </div>
</template>

<script lang="js">
import veMask from "./../Mask/index.vue";
import veSpinner from "./../Spinner/index.vue";

export default {
    name: 'veLoading',
    components: {
        veMask,
        veSpinner
    },
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
            hasBody: this.$slots.hasOwnProperty('default')
        }
    }
}
</script>

<style lang="scss">
@import "./../Styles/helpers/variables";

.ve-loading {
    .ve-loading-spinner {
        width: 40px;
        height: 40px;
    }

    .ve-loading-content {
        margin-top: $margin-base;
        color: $text-light;
        z-index: 1;
    }
}
</style>
