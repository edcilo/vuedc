<template>
    <div class="ve-image">
        <img ref="image" :src="srcImage" :alt="alt" :class="imgClass" />
    </div>
</template>

<script>
export default {
    name: "veImage",
    props: {
        lazy: {
            type: Boolean,
            default: false
        },
        src: {
            type: String,
            required: true
        },
        preview: {
            type: String,
            default: null,
        },
        alt: {
            type: String,
            default: ""
        }
    },
    data: function() {
        return {
            srcImage: null,
            imgClass: {preview: false, reveal: false},
            timer: null
        }
    },
    methods: {
        lazyLoad() {
            if (window.addEventListener && window.requestAnimationFrame) {
                window.addEventListener("scroll", this.scroller, false);
                window.addEventListener("resize", this.scroller, false);

                this.inView();
            }
        },
        scroller() {
            this.timer = this.timer || setTimeout(() => {
                this.timer = null;
                this.inView();
            }, 300);
        },
        inView() {
            requestAnimationFrame(() => {
                let wT = window.pageYOffset;
                let wB = wT + window.innerHeight;

                let cRect = this.$refs.image.getBoundingClientRect();
                let pT = wT + cRect.top;
                let pB = pT + cRect.height;

                if (wT < pB && wB > pT) {
                    this.srcImage = this.src;
                    this.imgClass.reveal = true;
                    this.imgClass.preview = false;
                }
            });
        }
    },
    mounted() {
        this.$nextTick(function() {
            if (this.lazy) {
                this.srcImage = this.preview;
                this.imgClass.preview = true;

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
