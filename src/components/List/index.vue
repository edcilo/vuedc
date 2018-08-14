<template>
    <div class="ve-list" :class="{rounded: rounded}">
        <slot></slot>
    </div>
</template>

<script lang="ls">
export default {
    name: 'veList',
    props: {
        rounded: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
@import "./../Styles/helpers/variables";

%border-radius-top {
    border-radius: $br-sm $br-sm 0 0;
}

%border-radius-bottom {
    border-radius:  0 0 $br-sm $br-sm;
}

.ve-list {
    display: flex;
    flex-direction: column;

    &.rounded {
        border-radius: $br-sm;

        .ve-list-item {
            &:first-child {
                @extend %border-radius-top;

                .ve-item {
                    @extend %border-radius-top;
                }
            }

            &:last-child {
                @extend %border-radius-bottom;

                .ve-item {
                    @extend %border-radius-bottom
                }
            }
        }
    }

    .ve-list-item {
        &:last-child {
            border-bottom: none;
        }
    }
}
</style>
