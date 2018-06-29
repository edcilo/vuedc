<template>
    <div class="ve-list-item" :class="{'with-border': border}">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class VeListItem extends Vue
{
    @Prop({ default: false })
    border!: boolean;
}
</script>

<style lang="scss" scoped>
@import "./../Styles/helpers/variables";

.ve-list-item {
    &.with-border {
        border-bottom: 1px solid rgba($c-black, 0.12);
    }

    .ve-item {
        border-radius: 0;
        box-shadow: none;
    }
}
</style>
