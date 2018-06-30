<template>
    <ve-panel class="ve-item">
        <div class="ve-item-visual">
            <slot name="visual"></slot>
        </div>
        <div class="ve-item-body">
            <slot></slot>
        </div>
        <div class="control">
            <slot name="control"></slot>
        </div>
    </ve-panel>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import vePanel from "./../Panel/index.vue";

@Component({ components: { vePanel } })
export default class veItem extends Vue
{}
</script>

<style lang="scss">
@import "./../Styles/helpers/variables";

.ve-item {
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
}
</style>
