<template>
    <ve-panel class="ve-item">
        <div class="ve-item-visual" v-show="hasVisual">
            <slot name="visual"></slot>
        </div>
        <div class="ve-item-body" v-show="hasBody">
            <slot></slot>
        </div>
        <div class="ve-item-control" v-show="hasControl">
            <slot name="control"></slot>
        </div>
    </ve-panel>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import vePanel from "./../Panel/index.vue";

@Component({ components: { vePanel } })
export default class veItem extends Vue
{
    protected hasBody: boolean = typeof this.$slots.default === 'object';

    protected hasVisual: boolean = typeof this.$slots.visual === 'object';

    protected hasControl: boolean = typeof this.$slots.control === 'object';
}
</script>

<style lang="scss">
@import "./../Styles/helpers/variables";

.ve-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .ve-item-visual {
        margin: 0.5rem 0 0.5rem 1rem;
        width: 2.5rem;
    }

    .ve-item-body {
        margin: 0.75rem 1rem;
        width: 100%;
    }

    .ve-item-control {
        margin: 1rem;
        white-space: nowrap;
        margin: 0.75rem 1rem 0.75rem 0;
    }
}
</style>
