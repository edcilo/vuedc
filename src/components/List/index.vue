<template>
    <div class="ve-list" :class="{rounded: rounded}">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class VeList extends Vue
{
    @Prop({ default: false })
    rounded!: boolean;
}
</script>

<style lang="scss" scoped>
@import "./../Styles/helpers/variables";

.ve-list {
    display: flex;
    flex-direction: column;

    &.rounded {
        border-radius: 20px;

        .ve-list-item {
            &:first-child {
                border-radius: $br-sm $br-sm 0 0;
            }

            &:last-child {
                border-radius: 0 0 $br-sm $br-sm;
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
