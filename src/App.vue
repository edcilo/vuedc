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
    <pre>
      props: {
        width: '100%',
        heaight: 'auto'
      }
    </pre>

    <h2>vue-divider</h2>
    <ve-divider></ve-divider>
    <pre>
      props: {
        clear: false,
        dark: false,
        subheader: ""
      }
    </pre>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import veDivider from './components/Divider'
import vePanel from './components/Panel'

export default {
  name: 'app',
  components: {
    HelloWorld,
    veDivider,
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
