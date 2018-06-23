<template>
    <panel class="ve-item">
        <slot name="visual"></slot>
        <slot></slot>
        <slot name="control"></slot>
    </panel>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Panel from "./../Panel/index.vue";

@Component({
    components: {
        Panel
    }
})
export default class veItem extends Vue {
}
</script>

<style lang="scss" scoped>
@import "./../Styles/helpers/variables";

.ve-item {
    padding: 12px 16px;
}
</style>
