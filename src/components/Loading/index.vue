<template>
    <div class="ve-loading">
        <ve-mask class="ve-loading-mask" :opacity="opacity" :open="open" :speed="speed" :fullscreen="fullscreen">
            <div class="ve-loading-spinner">
                <ve-spinner />
            </div>
            <div class="ve-loading-content">
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
    fullscreen!: boolean

    @Prop({ default: 1 })
    opacity!: number;

    @Prop({ default: false })
    open!: boolean;

    @Prop({ default: 300 })
    speed!: number;
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
