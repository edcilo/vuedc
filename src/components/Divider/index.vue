<template>
    <div class="ve-divider" :class="{dark, clear}">
        <span v-if="subheader.length" class="ve-divider-subheader">{{ subheader }}</span>
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
    margin: $margin-base 0;
    border-top: 1px solid rgba($c-black, 0.12);
    color: $text-muted;

    &.dark {
        border-color: rgba($c-black, 0.2);
        color: $text-muted
    }

    &.clear {
        border-color: rgba($c-white, 0.2);
        color: $text-light;
    }

    .ve-divider-subheader {
        margin: $margin-xs;
        display: block;
        font-size: $font-sm;
        line-height: $line-height-tight;
    }
}
</style>
