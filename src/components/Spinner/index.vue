<template>
    <div class="ve-spinner">
        <svg class="ve-spinner-svg" viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
        </svg>
    </div>
</template>

<script lang="js">
export default {
    name: 'veSpinner'
}
</script>

<style lang="scss">
    @import "./../Styles/helpers/variables";
    @import "./../Styles/helpers/animations";

    .ve-spinner {
        .ve-spinner-svg {
            height: 100%;
            width: 100%;

            animation: rotate 2s linear infinite;
        }

        .path {
            stroke-dasharray: 90,150;
            stroke-dashoffset: 0;
            stroke-width: 2;
            stroke: $c-primary;
            stroke-linecap: round;

            animation: loading-dash 1.5s ease-in-out infinite;
        }
    }
</style>
