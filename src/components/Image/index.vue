<template>
    <div class="ve-image">
        <template v-if="!lazy">
            <img :src="srcImage" :alt="alt" @load="loadEvent" @error="errorEvent" />
        </template>
        <template v-else>
            <img ref="preview" :src="srcPreview" :alt="alt" :class="previewClass" v-if="!loaded" />
            <img ref="image" :src="srcImage" :alt="alt" class="reveal" v-show="loaded"
                @load="imageLoaded" @error="errorEvent" />
        </template>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

interface Preview {
    preview: boolean;
    reveal: boolean;
};

@Component
export default class veImage extends Vue {
    @Prop({ default: false })
    protected lazy!: boolean;

    @Prop({ required: true })
    protected src!: string;

    @Prop({ default: "" })
    protected preview!: string;

    @Prop({ default: "" })
    protected alt!: string;

    @Prop({ default: "" })
    protected placeholder!: string;

    public $refs!: { preview: HTMLElement };

    protected srcImage:     string | null = null;
    protected srcPreview:   string | null = null;
    protected previewClass: Preview       = { preview: true, reveal: false };
    protected timer:        any           = null;
    protected loaded:       boolean       = false;

    constructor() {
        super();

        if (this.lazy) {
            this.srcPreview = (this.preview.length > 0) ? this.preview : null;
        } else {
            this.srcImage = this.src;
        }
    }

    lazyLoad(): void {
        if (window.addEventListener && window.requestAnimationFrame) {
            window.addEventListener("scroll", this.scroller, false);
            window.addEventListener("resize", this.scroller, false);

            this.inView();
        }
    }

    scroller(): void {
        this.timer = this.timer || setTimeout(() => {
            this.timer = null;
            this.inView();
        }, 300);
    }

    inView(): void {
        requestAnimationFrame(() => {
            let wT = window.pageYOffset;
            let wB = wT + window.innerHeight;

            if (!this.$refs.preview) {
                return;
            }

            let cRect = this.$refs.preview.getBoundingClientRect();
            let pT = wT + cRect.top;
            let pB = pT + cRect.height;

            if (wT < pB && wB > pT) {
                this.srcImage = this.src;
            }
        });
    }

    imageLoaded(e: Event): void {
        this.loaded = true;

        this.loadEvent(e);
    }

    loadEvent(e: Event): void {
        this.$emit('load', e);
    }

    errorEvent(e: Event): void {
        this.$emit('error', e);

        if (this.placeholder.length > 0) {
            if(!this.lazy) {
                this.srcImage = this.placeholder;
            } else {
                this.srcPreview = this.placeholder;
                this.previewClass.preview = false;
                this.previewClass.reveal = true;
            }
        }
    }

    mounted(): void {
        this.$nextTick(function() {
            if (this.lazy) {
                this.lazyLoad();
            }
        });
    }
}
</script>

<style lang="scss" scoped>
@import "./../Styles/helpers/animations";

.ve-image {
    position: relative;
    display: block;
    width: 100%;
    overflow: hidden;
    outline: none;

    img {
        display: block;
        width: 100%;
        max-width: none;
        height: auto;
        border: 0 none;

        &.preview {
            filter: blur(2vw);
            transform: scale(1.05);
        }

        &.reveal {
            position: relative;
            left: 0;
            top: 0;
            will-change: transform, opacity;

            animation: progressiveReveal 1s ease-out;
        }
    }
}
</style>
