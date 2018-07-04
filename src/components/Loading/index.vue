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

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import veMask from "./../Mask/index.vue";
import veSpinner from "./../Spinner/index.vue";

@Component({
    components: {
        veMask,
        veSpinner
    }
})
export default class veLoading extends Vue {
    @Prop({ default: false })
    protected fullscreen!: boolean

    @Prop({ default: false })
    protected open!: boolean;

    @Prop({ default: 1 })
    protected opacity!: number;

    @Prop({ default: 300 })
    protected speed!: number;

    protected hasBody: boolean = typeof this.$slots.default === 'object';
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
