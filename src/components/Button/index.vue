<template>
    <button v-if="href.length === 0"
        class="ve-button" :class="btnClasses"
        :disabled="disabled"
        :autofocus="autofocus"
        :type="btnType"
        :name="btnName"
        :value="btnValue"
        @click="clicked">
        <div class="ve-button-icon" v-show="hasIcon">
            <slot name="icon" />
        </div>
        <slot></slot>
    </button>
    <a v-else
        class="ve-button" :class="btnClasses"
        :href="href"
        :autofocus="autofocus"
        @click="linkClicked">
        <div class="ve-button-icon" v-show="hasIcon">
            <slot name="icon" />
        </div>
        <slot></slot>
    </a>
</template>

<script lang="ts">
import Button from "@/components/Button/script.ts";
export default Button;
</script>

<style lang="scss">
@import "./style.scss";
</style>
