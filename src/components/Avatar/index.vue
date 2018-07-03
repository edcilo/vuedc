<template>
    <div class="ve-avatar" :class="{ tile: tile }" :style="{ width: size, height: size }">
        <img v-if="src !== null" class="ve-avatar-image" :src="src" :alt="alt">
        <div v-else-if="letter !== null" class="ve-avatar-label" :style="{backgroundColor: color}">{{ letter }}</div>
        <div v-else class="ve-avatar-placeholder" :style="{backgroundColor: color}">
            <slot>&nbsp;</slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class veAvatar extends Vue {
    @Prop({ default: null })
    protected src!: string | null;

    @Prop({ default: null })
    protected alt!: string | null;

    @Prop({ default: null })
    protected label!: string | null;

    @Prop({ default: null })
    protected color!: string | null;

    @Prop({ default: null })
    protected size!: string | null;

    @Prop({ default: false })
    protected tile!: boolean;

    protected letter: string | null = this.getFirstLetter();

    @Watch('src')
    onSrcChanged(val: string | null) {
        if (val === null) {
            this.letter = null;
        }
    }

    @Watch('label')
    onLabelChanged(val: string | null) {
        if (val !== null) {
            this.src = null;
        }

        this.letter = this.getFirstLetter();
    }

    getFirstLetter(): string | null {
        return (this.label !== null) ? this.label.charAt(0).toUpperCase() : null;
    }
}
</script>

<style lang="scss" scoped>
@import "./../Styles/helpers/variables";

$avatar-width: 40px;
$avatar-height: 40px;
$colors: $c-red, $c-orange, $c-yellow, $c-green, $c-teal, $c-blue, $c-indigo, $c-purple, $c-pink, $c-cyan;

.ve-avatar {
    width: $avatar-width;
    height: $avatar-height;

    display: inline-block;

    text-align: center;
    vertical-align: middle;

    &.tile {
        .ve-avatar-image,
        .ve-avatar-label,
        .ve-avatar-placeholder,
        .ve-avatar-placeholder img {
            border-radius: 0;
        }
    }

    .ve-avatar-image {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .ve-avatar-label,
    .ve-avatar-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .ve-avatar-label {
        background: nth($colors, random(length($colors)));
        color: $text-light;
    }

    .ve-avatar-placeholder {
        background: $c-gray-dark;

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
}
</style>
