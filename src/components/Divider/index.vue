<template>
    <div class="ve-divider" :class="{dark, clear}">
        <span v-if="subheader.length" class="ve-divider-subheader">{{ subheader }}</span>
    </div>
</template>

<script lang="js">
export default {
    name: 'edcDivider',
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
            default: ''
        }
    }
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
