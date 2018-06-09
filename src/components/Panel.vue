<template>
    <div class="panel" :style="{width, height}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Panel",
    props: {
        width: {
            type: String,
            default: "auto"
        },
        height: {
            type: String,
            default: "100%"
        }
    }
};
</script>

<style lang="scss">
$c-background: #ffffff;
$radius: 2px;
$trans-speed: 300ms;

.panel {
    position: relative;

    background: $c-background;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.1);
    border-radius: $radius;

    transition: width $trans-speed ease-in-out, height $trans-speed ease-in-out;
}
</style>
