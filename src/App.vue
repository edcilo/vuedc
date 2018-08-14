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

    <h2>ve-mask</h2>
    <ve-panel width="320px" height="320px">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit et eum delectus
      id unde assumenda ut tempora at voluptatem cupiditate quae dolor beatae perspiciatis
      incidunt consectetur, dolorum ipsam magni.
      <ve-mask :open="true" :opacity="0.9"></ve-mask>
    </ve-panel>
    <pre>
      props: {
        fullscreen: false,
        open: false,
        opacity: 1,
        speed: 300
      }
    </pre>

    <h2>ve-spinner</h2>
    <ve-panel width="80px" height="80px">
      <ve-spinner></ve-spinner>
    </ve-panel>

    <h2>ve-loading</h2>
    <ve-panel width="320px" height="320px">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit et eum delectus
      id unde assumenda ut tempora at voluptatem cupiditate quae dolor beatae perspiciatis
      incidunt consectetur, dolorum ipsam magni.
      <ve-loading :open="true" :opacity="0.9">
        Loading...
      </ve-loading>
    </ve-panel>
    <pre>
      props: {
        fullscreen: false,
        open: false,
        opacity: 1,
        speed: 300
      }
    </pre>

    <h2>ve-avatar</h2>
    <ve-avatar src="http://edcilo.com/images/team/edcilo.png" alt="edcilo"></ve-avatar>
    <ve-avatar>E</ve-avatar>
    <ve-avatar color="#edc962">E</ve-avatar>
    <ve-avatar label="edcilo"></ve-avatar>
    <ve-avatar label="edcilo" size="46px"></ve-avatar>
    <ve-avatar label="edcilo" :tile="true"></ve-avatar>
    <pre>
      props: {
        src: '',
        alt: '',
        color: '',
        label: '',
        size: '',
        tile: false
      }
    </pre>

    <h2>ve-item</h2>
    <ve-item>
      <template slot="visual">
        <ve-avatar src="http://edcilo.com/images/team/edcilo.png" alt="edcilo"></ve-avatar>
      </template>
      <template>
        Eduardo C.
      </template>
      <template slot="control">
        Ctrl + E
      </template>
    </ve-item>
    <pre>
      slots: [
        'default',
        'visual',
        'control'
      ]
    </pre>

    <h2>ve-list</h2>
    <ve-panel width="320px" height="auto">
      <ve-list>
        <ve-list-item :border="true">
          <ve-item>
            <template slot="visual">
              <ve-avatar src="http://edcilo.com/images/team/edcilo.png" alt="edcilo"></ve-avatar>
            </template>
            <template>
              Eduardo C.
            </template>
            <template slot="control">
              Ctrl + E
            </template>
          </ve-item>
        </ve-list-item>
        <ve-list-item>
          <ve-item>
            <template slot="visual">
              <ve-avatar src="http://edcilo.com/images/team/edcilo.png" alt="edcilo"></ve-avatar>
            </template>
            <template>
              Eduardo C.
            </template>
            <template slot="control">
              Ctrl + C
            </template>
          </ve-item>
        </ve-list-item>
      </ve-list>
    </ve-panel>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

import veAvatar from './components/Avatar'
import veDivider from './components/Divider'
import veItem from './components/Item'
import veList from './components/List'
import veListItem from './components/ListItem'
import veLoading from './components/Loading'
import veMask from './components/Mask'
import vePanel from './components/Panel'
import veSpinner from './components/Spinner'

export default {
  name: 'app',
  components: {
    HelloWorld,
    veAvatar,
    veDivider,
    veItem,
    veList,
    veListItem,
    veLoading,
    veMask,
    vePanel,
    veSpinner,
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
