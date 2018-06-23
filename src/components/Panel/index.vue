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
    width!: string;

    @Prop({ default: "auto" })
    height!: string;
}
</script>

<style lang="sass" scoped>
    @import "./styles";
</style>
