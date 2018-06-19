<template>
    <div id="app">
        <div class="title">
            <h1>Vuedc</h1>
        </div>

        <div class="container">
            <div class="row">
                <panel>
                    <div class="col design-grid">
                        <panel :width="width" :height="height" />
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
                </panel>
            </div>

            <div class="row">
                <panel>
                    <div class="col design-grid">
                        <panel :width="width" :height="height">
                            <scroll v-on:scroll-x="scrollX"
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
                            </scroll>
                        </panel>
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
                </panel>
            </div>

            <div class="row">
                <panel>
                    <div class="col design-grid">
                        <panel :width="width">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aliquam, aperiam autem eligendi et impedit
in ipsam iure minus nam nihil non praesentium quos rem similique. Aliquid corporis omnis temporibus.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequuntur deleniti dolor laudantium,
libero minus nobis reiciendis ut voluptatibus. Architecto ea eaque eos error explicabo, facilis
molestiae nihil omnis sunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                            <loading :open="showLoader" :opacity="opacity" :fullscreen="fullscreen" :speed="speed">Loading...</loading>
                        </panel>
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
                </panel>
            </div>
        </div>
    </div>
</template>

<script>
    import Panel from "./components/Panel/";
    import Scroll from "./components/Scroll";
    import Loading from "./components/Loading";

    export default {
        name: "app",
        data: function() {
            return {
                width: "344px",
                height: "228px",
                showLoader: true,
                opacity: 0.95,
                speed: 300,
                fullscreen: false,
                styles: {
                    padding: "8px"
                }
            };
        },
        methods: {
            toggleShowLoader() {
                this.showLoader = !this.showLoader;
            },
            changeFullscreen() {
                this.fullscreen = !this.fullscreen;
            },
            scrollX() {
              console.log("scroll in X");
            },
            scrollY() {
              console.log("scroll in y");
            },
            scrollUp() {
              console.log("scroll up");
            },
            scrollDown() {
              console.log("scroll down");
            },
            scrollLeft() {
              console.log("scroll left");
            },
            scrollRight() {
              console.log("scroll right");
            },
            scrollYStart() {
              console.log("scroll y reach start");
            },
            scrollYEnd() {
              console.log("scroll y reach end");
            },
            scrollXStart() {
              console.log("scroll x reach start");
            },
            scrollXEnd() {
              console.log("scroll x reach end");
            }
        },
        components: {
            Panel,
            Scroll,
            Loading
        },
    };
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

    .ve-panel {
        display: flex;
        padding: 0.5rem;
    }

    .ve-panel .col {
        padding: 0.5rem;
        width: 33.3333%;
    }

    .design-grid {
        background: #e5e5e5;
    }
</style>
