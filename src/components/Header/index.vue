<template>
    <div class="ve-header" :class="{ fixed }" ref="veHeader">
        <div class="ve-header-container">
            <div class="ve-header-logo" :style="{width: `${settings.logo.width}%`, order: settings.logo.position}">
                <slot name="logo" v-if="settings.logo.show"></slot>
            </div>
            <div class="ve-header-search"
                v-if="settings.search.show"
                :style="{width: `${settings.search.width}%`, order: settings.search.position}">
                <slot name="search"></slot>
            </div>
            <div class="ve-header-nav"
                v-if="settings.nav.show"
                :style="{width: `${settings.nav.width}%`, order: settings.nav.position}">
                <slot name="nav"></slot>
            </div>
            <div class="ve-header-login"
                v-if="settings.login.show"
                :style="{width: `${settings.login.width}%`, order: settings.login.position}">
                <slot name="login"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="js">
export default {
    name: 'veHeader',
    props: {
        fixed: {
            type: Boolean,
            default: false
        },
        settings: {
            type: Object,
            default: () => {
                return {
                    logo: {
                        show: false
                    },
                    nav: {
                        show: false
                    },
                    search: {
                        show: false
                    },
                    login: {
                        show: false
                    }
                }
            }
        }
    },
    data: function() {
        return {
            body: document.querySelector('body'),
            marginTopBackup: 0
        }
    },
    watch: {
        fixed() {
            this.setMarginInBody();
        }
    },
    methods: {
        setMarginInBody() {
            let marginTop = 0;

            if (this.fixed) {
                marginTop = this.$refs.veHeader.getBoundingClientRect().height;
            } else {
                marginTop = this.marginTopBackup;
            }

            this.body.style.marginTop = `${marginTop}px`;
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.marginTopBackup = this.$refs.veHeader.getBoundingClientRect().top;

            this.setMarginInBody();
        });
    }
}
</script>

<style lang="scss">
@import "./../Styles/helpers/variables";

.ve-header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    background-color: $c-gray-base;
    width: 100%;
    z-index: $z-header;

    &.fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }

    .ve-header-container {
        width: 100%;
        max-width: 1280px;
        display: flex;
        flex-flow: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
    }

    .ve-header-logo * {
        font-size: $font-lg;
        margin: 0;
    }
}
</style>
