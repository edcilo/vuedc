 <template>
    <div class="ve-panel" :style="{width, height}">
        <slot></slot>
    </div>
</template>

<script>
    import properties from "./properties";

    export default {
        name: "Panel",
        props: properties
    };
</script>

<style lang="sass" scoped>
    @import "./styles";
</style>
