<template>
    <panel class="ve-item">
        <slot name="visual"></slot>
        <slot></slot>
        <slot name="control"></slot>
    </panel>
</template>

<script>
import Panel from "./../Panel";

export default {
    name: "Item",
    components: {
        Panel
    }
}
</script>

<style lang="scss" scoped>
@import "./../Styles/helpers/variables";

.ve-item {
    padding: 12px 16px;
}
</style>
