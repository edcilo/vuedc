<template>
  <div id="app">
    <div class="title">
      <h1>Panel</h1>
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
            <panel width="344px" height="228px">
              <scroll>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facere eius nisi nam facilis earum odio, veritatis enim inventore voluptate unde ipsam ad velit iusto fugit quaerat tempore modi praesentium!
              </scroll>
            </panel>
          </div>

          <div class="col">
            <h2>Props</h2>
            <ul>
            </ul>
          </div>

          <div class="col">
            <h2>Usage</h2>
  <pre>
  &lt;scroll&gt;
  &lt;/scroll&gt;
  </pre>
          </div>
        </panel>
      </div>
    </div>
  </div>
</template>

<script>
import Panel from "./components/Panel.vue";
import Scroll from "./components/Scroll.vue";

export default {
  name: "app",
  components: {
    Panel,
    Scroll
  },
  data: function() {
    return {
      width: "344px",
      height: "228px",
      styles: {
        padding: "8px"
      }
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500|Roboto+Mono");

body {
  margin: 0;
  padding: 0;
}

body,
div {
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
}

h1,
h2 {
  font-weight: 300;
  margin-top: 0;
}

pre {
  background: #f9f9f9;
  color: #ff4181;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  padding: 8px;
  line-height: 1.4;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

.row {
}

.panel {
  display: flex;
  padding: 0.5rem;
}

.panel .col {
  padding: 0.5rem;
  width: 33.3333%;
}

.design-grid {
  background: #e5e5e5;
}
</style>
