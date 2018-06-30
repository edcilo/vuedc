 <template>
    <div class="ve-panel" :style="{width, height}">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class vePanel extends Vue
{
    @Prop({ default: "100%" })
    private width!: string;

    @Prop({ default: "auto" })
    private height!: string;
}
</script>

<style lang="sass">
    @import "./styles";
</style>
