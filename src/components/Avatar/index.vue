<template>
    <div class="ve-avatar" :class="{ tile: tile }" :style="{ width: size, height: size }">
        <img v-if="src !== null" class="ve-avatar-image" :src="src" :alt="alt">
        <div v-else-if="letter !== null" class="ve-avatar-label" :style="{background: color}">{{ letter }}</div>
        <div v-else class="ve-avatar-placeholder" :style="{background: color}">
            <slot>&nbsp;</slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class veAvatar extends Vue {
    @Prop({ default: null })
    src!: string;

    @Prop({ default: "" })
    alt!: string;

    @Prop({ default: null })
    label!: string;

    @Prop({ default: null })
    color!: string;

    @Prop({ default: "" })
    size!: string;

    @Prop({ default: false })
    tile!: boolean;

    letter = this.getFirstLetter();

    @Watch('src')
    onSrcChanged(val) {
        if (val !== null) {
            this.letter = null;
        }
    }

    @Watch('label')
    onLabelChanged(val) {
        if (val !== null) {
            this.src = null;
        }

        this.letter = this.getFirstLetter();
    }

    getFirstLetter() {
        return (this.label !== null) ? this.label.charAt(0) : null;
    }
}
</script>

<style lang="scss" scoped>
@import "./../Styles/helpers/variables";

$avatar-width: 40px;
$avatar-height: 40px;
$colors: $c-red, $c-orange, $c-yellow, $c-green, $c-teal, $c-blue, $c-indigo, $c-purple, $c-pink;

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
        color: $c-text-light;
    }

    .ve-avatar-placeholder {
        background: $c-gray3;

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
}
</style>
