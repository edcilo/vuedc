 <template>
    <div class="ve-panel" :style="{width, height}">
        <slot></slot>
    </div>
</template>

<script lang="js">
export default {
    name: "vePanel",
    props: {
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: 'auto'
        }
    }
}
</script>

<style lang="scss">
@import "./../Styles/helpers/variables";

.ve-panel {
    position: relative;

    background: $c-white;
    box-shadow: $panel-shadow;
    border-radius: $br-sm;

    transition: width $trans-speed ease-in-out, height $trans-speed ease-in-out;
}
</style>
