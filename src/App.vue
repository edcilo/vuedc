<template>
    <div id="app">
        <div class="title">
            <h1>Vuedc</h1>
        </div>

        <page-color />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import pageList from './Pages/list.vue';
import pageColor from './Pages/colors.vue';

@Component({
  components: {
    pageList,
    pageColor
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./components/Styles/main";

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
