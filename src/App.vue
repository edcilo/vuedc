<template>
    <div id="app">
        <div class="title">
            <h1>Vuedc</h1>
        </div>

        <div class="container">
            <div class="row">
                <ve-panel>
                    <h4>Headings</h4>
                    <h1>h1. Heading vuedc</h1>
                    <h2>h2. Heading vuedc</h2>
                    <h3>h3. Heading vuedc</h3>
                    <h4>h4. Heading vuedc</h4>
                    <h5>h5. Heading vuedc</h5>
                    <h6>h6. Heading vuedc</h6>

                    <h4>Lists</h4>
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>

                    <h4>Mark</h4>
                    <p>Lorem ipsum dolor sit amet <mark>consectetur</mark> adipisicing elit.</p>
                </ve-panel>
            </div>

            <div class="row">
                <ve-panel class="panel-component">
                    <div class="col design-grid">
                        <ve-panel :width="width" :height="height" />
                    </div>

                    <div class="col">
                        <h2>Props</h2>

                        <ul>
                            <li>
                                width: <input type="text" v-model="width">
                            </li>
                            <li>
                                height: <input type="text" v-model="height">
                            </li>
                        </ul>
                    </div>

                    <div class="col">
                        <h2>Usage</h2>
<pre>
&lt;panel width="{{ width }}" height="{{ height }}"&gt;
&lt;/panel&gt;
</pre>
                    </div>
                </ve-panel>
            </div>

            <div class="row">
                <ve-panel class="panel-component">
                    <div class="col design-grid">
                        <ve-panel :width="width" :height="height">
                            <ve-scroll v-on:scroll-x="scrollX"
                                v-on:scroll-y="scrollY"
                                v-on:scroll-up="scrollUp"
                                v-on:scroll-down="scrollDown"
                                v-on:scroll-left="scrollLeft"
                                v-on:scroll-right="scrollRight"
                                v-on:scroll-y-reach-start="scrollYStart"
                                v-on:scroll-y-reach-end="scrollYEnd"
                                v-on:scroll-x-reach-start="scrollXStart"
                                v-on:scroll-x-reach-end="scrollXEnd">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aliquam, aperiam autem eligendi et impedit
in ipsam iure minus nam nihil non praesentium quos rem similique. Aliquid corporis omnis temporibus.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequuntur deleniti dolor laudantium,
libero minus nobis reiciendis ut voluptatibus. Architecto ea eaque eos error explicabo, facilis
molestiae nihil omnis sunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
assumenda facere nesciunt nostrum, quidem repellat vero? Ab, aliquam consequatur dolor dolore, doloribus
et eum fugiat necessitatibus nobis quos repellat rerum! Lorem ipsum dolor sit amet, consectetur
adipisicing elit. Delectus deserunt ducimus error, excepturi exercitationem ipsum pariatur quis
recusandae repellat tempore vel vero voluptates. Exercitationem ipsum nostrum nulla porro quos unde?
                            </ve-scroll>
                        </ve-panel>
                    </div>

                    <div class="col">
                        <h2>Events</h2>
                        <ul>
                            <li>scroll-y</li>
                            <li>scroll-x</li>
                            <li>scroll-up</li>
                            <li>scroll-down</li>
                            <li>scroll-left</li>
                            <li>scroll-right</li>
                            <li>scroll-y-reach-start</li>
                            <li>scroll-y-reach-end</li>
                            <li>scroll-x-reach-start</li>
                            <li>scroll-x-reach-end</li>
                        </ul>
                    </div>

                    <div class="col">
                        <h2>Usage</h2>
<pre>
&lt;panel width="{{ width }}" height="{{ height }}"&gt;
    &lt;scroll&gt;
        content...
    &lt;/scroll&gt;
&lt;/panel&gt;
</pre>
                    </div>
                </ve-panel>
            </div>

            <div class="row">
                <ve-panel class="panel-component">
                    <div class="col design-grid">
                        <ve-panel :width="width">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aliquam, aperiam autem eligendi et impedit
                            in ipsam iure minus nam nihil non praesentium quos rem similique. Aliquid corporis omnis temporibus.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequuntur deleniti dolor laudantium,
                            libero minus nobis reiciendis ut voluptatibus. Architecto ea eaque eos error explicabo, facilis
                            molestiae nihil omnis sunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                            <ve-loading :open="showLoader" :opacity="opacity" :fullscreen="fullscreen" :speed="speed">Loading...</ve-loading>
                        </ve-panel>
                    </div>

                    <div class="col">
                        <h2>Props</h2>

                        <ul>
                            <li>
                                opacity: <input type="text" v-model="opacity">
                            </li>
                            <li>
                                speed: <input type="text" v-model.number="speed">
                            </li>
                            <li>
                                open: <button @click="toggleShowLoader">Show/Hide</button>
                            </li>
                            <li>
                                fullscreen: <button @click="changeFullscreen">Change</button>
                            </li>
                        </ul>
                    </div>

                    <div class="col">
                        <h2>Usage</h2>
<pre>
&lt;panel width="{{ width }}" height="{{ height }}"&gt;
    &lt;loader&gt;
        Cargando...
    &lt;/loader&gt;
&lt;/panel&gt;
</pre>
                    </div>
                </ve-panel>
            </div>

            <div class="row">
                <ve-panel class="panel-component">
                    <div class="col design-grid">
                        <ve-panel>
                            <ve-img :alt="alt" :src="src" :placeholder="imagePlaceholder" v-on:load="imageLoaded" v-on:error="imageError" />
                        </ve-panel>

                        <ve-divider :clear="false" :dark="true" subheader="Lazy loaded" />

                        <ve-panel>
                            <ve-img :alt="alt" :lazy="true" :src="src" :preview="preview" :placeholder="imagePlaceholder" />
                        </ve-panel>
                    </div>

                    <div class="col">
                        <h2>Props</h2>

                        <ul>
                            <li>alt: <input type="text" v-model="alt"></li>
                            <li>lazy: true/false</li>
                            <li>placeholder: <input type="text" v-model="imagePlaceholder"></li>
                            <li>src: <input type="text" v-model="src"></li>
                            <li>preview: <input type="text" v-model="preview"></li>
                        </ul>

                        <h2>Events</h2>

                        <ul>
                            <li>load</li>
                            <li>error</li>
                        </ul>
                    </div>

                    <div class="col">
                        <h2>Usage</h2>
<pre>
&lt;ve-img /&gt;
</pre>
                    </div>
                </ve-panel>
            </div>

            <div class="row">
                <ve-panel class="panel-component">
                    <div class="col design-grid">
                        <ve-item>
                            <template slot="visual">
                                <ve-avatar label="Lynnete" />
                            </template>
                            Title
                            <template slot="control">
                                Control
                            </template>
                        </ve-item>
                    </div>
                    <div class="col design-grid">
                        <ve-avatar>
                            <fa-icon icon="coffee" />
                        </ve-avatar>
                        <ve-avatar color="#f6be76">
                            <fa-icon :icon="['fab', 'amazon']" />
                        </ve-avatar>
                        <ve-avatar :tile="true">
                            <fa-icon :icon="['fab', 'amazon']" />
                        </ve-avatar>
                        <ve-avatar>
                            <fa-icon :icon="['far', 'angry']" />
                        </ve-avatar>
                        <ve-avatar />
                        <ve-avatar>EC</ve-avatar>
                        <ve-avatar color="#9561E2" />
                        <ve-avatar label="Lynnete" />
                        <ve-avatar label="Lynnete" color="#2779BD" />
                        <ve-avatar label="Lynnete" :tile="true" />
                        <ve-avatar>
                            <img src="https://instagram.fmex10-1.fna.fbcdn.net/vp/7f6147a8df2f077569167037d829937d/5BAA1862/t51.2885-15/e35/26153702_903709439779829_8742051213953990656_n.jpg?_nc_eui2=AeG4eJg0VPNWF2ZL-6iOw4zGG0tZ0CjxO3qEd_Z0TxIu0smoS2C7H4NlTJGfhPqML8xeOVI2wUICPAi5jA4lo39-UDWUD1zLKTTvJ-L_h4Wprw" alt="ve-avatar">
                        </ve-avatar>
                        <ve-avatar :tile="true">
                            <img src="https://instagram.fmex10-1.fna.fbcdn.net/vp/7f6147a8df2f077569167037d829937d/5BAA1862/t51.2885-15/e35/26153702_903709439779829_8742051213953990656_n.jpg?_nc_eui2=AeG4eJg0VPNWF2ZL-6iOw4zGG0tZ0CjxO3qEd_Z0TxIu0smoS2C7H4NlTJGfhPqML8xeOVI2wUICPAi5jA4lo39-UDWUD1zLKTTvJ-L_h4Wprw" alt="ve-avatar">
                        </ve-avatar>
                        <ve-avatar alt="ve-avatar" src="https://instagram.fmex10-1.fna.fbcdn.net/vp/7f6147a8df2f077569167037d829937d/5BAA1862/t51.2885-15/e35/26153702_903709439779829_8742051213953990656_n.jpg?_nc_eui2=AeG4eJg0VPNWF2ZL-6iOw4zGG0tZ0CjxO3qEd_Z0TxIu0smoS2C7H4NlTJGfhPqML8xeOVI2wUICPAi5jA4lo39-UDWUD1zLKTTvJ-L_h4Wprw" />
                        <ve-avatar alt="ve-avatar" :tile="true" src="https://instagram.fmex10-1.fna.fbcdn.net/vp/7f6147a8df2f077569167037d829937d/5BAA1862/t51.2885-15/e35/26153702_903709439779829_8742051213953990656_n.jpg?_nc_eui2=AeG4eJg0VPNWF2ZL-6iOw4zGG0tZ0CjxO3qEd_Z0TxIu0smoS2C7H4NlTJGfhPqML8xeOVI2wUICPAi5jA4lo39-UDWUD1zLKTTvJ-L_h4Wprw" />
                        <ve-avatar alt="ve-avatar" size="60px" src="https://instagram.fmex10-1.fna.fbcdn.net/vp/7f6147a8df2f077569167037d829937d/5BAA1862/t51.2885-15/e35/26153702_903709439779829_8742051213953990656_n.jpg?_nc_eui2=AeG4eJg0VPNWF2ZL-6iOw4zGG0tZ0CjxO3qEd_Z0TxIu0smoS2C7H4NlTJGfhPqML8xeOVI2wUICPAi5jA4lo39-UDWUD1zLKTTvJ-L_h4Wprw" />
                    </div>
                </ve-panel>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faAt } from '@fortawesome/free-solid-svg-icons';
import { faAngry } from "@fortawesome/free-regular-svg-icons";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCoffee, faAngry, faAt, faAmazon);

import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import vePanel from './components/Panel/index.vue';
import veScroll from './components/Scroll/index.vue';
import veLoading from './components/Loading/index.vue';
import veImg from "./components/Image/index.vue";
import veDivider from "./components/Divider/index.vue";
import veAvatar from "./components/Avatar/index.vue";
import veItem from "./components/Item/index.vue";

@Component({
  components: {
    'fa-icon': FontAwesomeIcon,
    vePanel,
    veScroll,
    veLoading,
    veImg,
    veDivider,
    veAvatar,
    veItem
  },
})

export default class App extends Vue {
    width = "344px";
    height = "228px";

    showLoader = true;
    opacity = 0.95;
    speed = 300;
    fullscreen = false;

    alt = "image lazy";
    imagePlaceholder = "https://picsum.photos/200/300/?random";
    src = "https://expeditionportal.com/media/2014/05/Mojave-002.jpg";
    preview = "https://ucarecdn.com/dc3dad83-e7b5-44cd-841a-dbf4000005d6/-/resize/32x/-/quality/lightest/party.jpg";

    imageError(e) {
        console.log('image error', e);
    }

    imageLoaded(e) {
        console.log('image loaded', e);
    }



    toggleShowLoader() {
        this.showLoader = !this.showLoader;
    }

    changeFullscreen() {
        this.fullscreen = !this.fullscreen;
    }


    scrollX() {
        console.log("scroll in X");
    }

    scrollY() {
        console.log("scroll in y");
    }

    scrollUp() {
        console.log("scroll up");
    }

    scrollDown() {
        console.log("scroll down");
    }

    scrollLeft() {
        console.log("scroll left");
    }

    scrollRight() {
        console.log("scroll right");
    }

    scrollYStart() {
        console.log("scroll y reach start");
    }

    scrollYEnd() {
        console.log("scroll y reach end");
    }

    scrollXStart() {
        console.log("scroll x reach start");
    }

    scrollXEnd() {
        console.log("scroll x reach end");
    }
}
</script>

<style lang="scss">
@import "./Components/Styles/main";

pre {
    background: #f9f9f9;
    color: #ff4181;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
    padding: 8px;
    line-height: 1.4;
}

#app {
    padding: 1rem;
}

.title {
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 2rem;
}

.container {
    display: grid;
    grid-template-columns: auto;
    grid-row-gap: 1rem;
}

.panel-component {
    display: flex;
    padding: 0.5rem;
}

.panel-component .col {
    padding: 0.5rem;
    width: 33.3333%;
}

.design-grid {
    background: #e5e5e5;
}
</style>
