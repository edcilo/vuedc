<template>
    <ve-panel class="ve-item">
        <div class="ve-item-visual" v-show="hasVisual">
            <slot name="visual" />
        </div>
        <div class="ve-item-body" v-show="hasBody">
            <span class="ve-item-overline">
                <slot name="overline" />
            </span>
            <slot></slot>
            <span class="ve-item-secondary">
                <slot name="secondary" />
            </span>
        </div>
        <div class="ve-item-control" v-show="hasControl">
            <slot name="control" />
        </div>
    </ve-panel>
</template>

<script lang="js">
import vePanel from "./../Panel/index.vue";

export default {
    name: 'veItem',
    data: function() {
        return {
            hasBody: this.$slots.hasOwnProperty('default'),
            hasVisual: this.$slots.hasOwnProperty('visual'),
            hasControl: this.$slots.hasOwnProperty('control')
        }
    },
    components: {
        vePanel
    }
}
</script>

<style lang="scss">
@import "./../Styles/helpers/variables";

.ve-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .ve-item-visual {
        align-self: stretch;

        .ve-icon, .icon {
            margin: 1rem;
            font-size: 1.285rem;
        }

        .ve-avatar {
            margin: 0.5rem 0 0.5rem 1rem;

            &.tile {
                width: 3.5rem;
                height: 3.5rem;
            }
        }

        .ve-image {
            margin: 0.5rem 0;
            width: 6.25rem; // 100px * 56px
            // height: 3.5rem;
        }
    }

    .ve-item-body {
        margin: 0.75rem 1rem;
        width: 100%;

        .ve-item-overline {
            display: block;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: $font-xs;
        }

        .ve-item-secondary {
            display: block;
            color: $c-gray-darker;
            font-size: $font-sm;
            font-weight: $fw-light;
        }
    }

    .ve-item-control {
        margin: 1rem;
        white-space: nowrap;
        margin: 0.75rem 1rem 0.75rem 0;
    }
}
</style>
