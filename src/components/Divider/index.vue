<template>
    <div class="ve-divider" :class="{clear, dark}">
        <span class="ve-divider-subheader" v-if="subheader">{{ subheader }}</span>
    </div>
</template>

<script>
export default {
    name: "Divider",
    props: {
        clear: {
            type: Boolean,
            default: false
        },
        dark: {
            type: Boolean,
            default: false
        },
        subheader: {
            type: String,
            default: null
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./../Styles/helpers/variables";

.ve-divider {
    margin: 1rem 0;
    border-top: 1px solid rgba($c-black, 0.12);
    color: $c-text-secundary;

    &.clear {
        border-color: rgba($c-white, 0.2);
        color: $c-text-light
    }

    &.dark {
        border-color: rgba($c-black, 0.2);
        color: $c-text-secundary
    }

    .ve-divider-subheader {
        margin-top: 0.25rem;
        display: block;
        font-size: $font-sm;
        line-height: 1.4;
    }
}
</style>
