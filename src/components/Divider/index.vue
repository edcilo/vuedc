<template>
    <div class="ve-divider" :class="{clear, dark}">
        <span class="ve-divider-subheader">{{ subheader }}</span>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class veDivider extends Vue {
    @Prop({ default: false })
    private clear!: boolean;

    @Prop({ default: false })
    private dark!: boolean;

    @Prop({ default: "" })
    private subheader!: string
}
</script>

<style lang="scss">
@import "./../Styles/helpers/variables";

.ve-divider {
    margin: 1rem 0;
    border-top: 1px solid rgba($c-black, 0.12);
    color: $text-secondary;

    &.clear {
        border-color: rgba($c-white, 0.2);
        color: $text-light
    }

    &.dark {
        border-color: rgba($c-black, 0.2);
        color: $text-secondary
    }

    .ve-divider-subheader {
        margin-top: 0.25rem;
        display: block;
        font-size: $font-sm;
        line-height: 1.4;
    }
}
</style>
