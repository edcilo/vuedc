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

@Component
export default class veImage extends Vue {
    @Prop({ default: false })
    lazy!: boolean;

    @Prop()
    src!: string;

    @Prop({ default: null })
    preview!: string;

    @Prop({ default: "" })
    alt!: string;

    @Prop({ default: null })
    placeholder!: string;

    srcImage = null;
    srcPreview = null;
    previewClass = {preview: true, reveal: false};
    timer = null;
    loaded = false;

    lazyLoad() {
        if (window.addEventListener && window.requestAnimationFrame) {
            window.addEventListener("scroll", this.scroller, false);
            window.addEventListener("resize", this.scroller, false);

            this.inView();
        }
    }

    scroller() {
        this.timer = this.timer || setTimeout(() => {
            this.timer = null;
            this.inView();
        }, 300);
    }

    inView() {
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

    imageLoaded(e) {
        this.loaded = true;

        this.loadEvent(e);
    }

    loadEvent(e) {
        this.$emit('load', e);
    }

    errorEvent(e) {
        this.$emit('error', e);

        if (this.placeholder && !this.lazy) {
            this.srcImage = this.placeholder;
        }

        if (this.placeholder && this.lazy) {
            this.srcPreview = this.placeholder;
            this.previewClass.preview = false;
            this.previewClass.reveal = true;
        }
    }

    mounted() {
        this.$nextTick(function() {
            if (this.lazy) {
                this.srcPreview = this.preview;

                this.lazyLoad();
            } else {
                this.srcImage = this.src;
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
