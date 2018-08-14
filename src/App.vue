<template>
  <div id="app">
    <div class="text-center">
      <img alt="Vue logo" src="./assets/logo.png">

      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>

    <h2>ve-panel</h2>
    <ve-panel>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corrupti in dolorum error commodi
      laborum dicta magnam neque. Modi quibusdam facere eius quasi aperiam voluptas, perferendis
      sunt officia aut earum.
    </ve-panel>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import vePanel from './components/Panel'

export default {
  name: 'app',
  components: {
    HelloWorld,
    vePanel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.text-center {
  text-align: center;
}
</style>
