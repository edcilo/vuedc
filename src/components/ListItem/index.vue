<template>
    <div class="ve-list-item" :class="{'with-border': border}">
        <slot></slot>
    </div>
</template>

<script lang="js">
export default {
    name: 'veListItem',
    props: {
        border: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
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
