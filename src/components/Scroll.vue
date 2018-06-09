<template>
    <div class="scroll s-active-x s-active-y">
        <div class="s-content"></div>
        <div class="s-rail-x" style="bottom: 0; width: 344px; left: 0">
            <div class="s-thumb-x" style="width: 120px; left: 0"></div>
        </div>
        <div class="s-rail-y" style="top: 0; height: 228px; right: 0">
            <div class="s-thumb-y" style="top: 0; height: 120px"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Scroll"
};
</script>

<style lang="scss">
.scroll {
    position: relative;
    margin: 0 auto;
    padding: 0 auto;
    width: 100%;
    height: 100%;
    overflow: hidden;
    touch-action: auto;

    background: rgba(255, 0, 0, 0.1);

    &:hover {
        .s-rail-x,
        .s-rail-y {
            opacity: 0.6;
            background: transparent;
        }
    }

    &.s-active-x {
        .s-rail-x,
        .s-rail-y {
            display: block;
            background: transparent;
        }
    }

    .s-rail-x {
        display: none;
        opacity: 0;
        transition: background-color 0.2s linear, opacity 0.2s linear;
        height: 1rem;
        bottom: 0;
        position: absolute;

        &:hover {
            opacity: 0.6;
            background: rgba(0, 255, 0, 0.3);
        }

        .s-thumb-x {
            background-color: #aaa;
            border-radius: 6px;
            transition: background-color 0.2s linear, height 0.2s ease-in-out;
            height: 6px;
            bottom: 2px;
            position: absolute;
        }
    }

    .s-rail-y {
        display: none;
        opacity: 0;
        transition: background-color 0.2s linear, opacity 0.2s linear;
        width: 1rem;
        right: 0;
        position: absolute;

        &:hover {
            opacity: 0.6;
            background: rgba(0, 255, 0, 0.3);
        }

        .s-thumb-y {
            background-color: #aaa;
            border-radius: 6px;
            transition: background-color 0.2s linear, width 0.2s ease-in-out;
            width: 6px;
            right: 2px;
            position: absolute;
        }
    }
}
</style>
