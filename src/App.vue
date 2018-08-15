<template>
  <div id="app">
    <ve-header :settings="headerSettings" :fixed="true">
        <template slot="logo">
            <h1>edcilo</h1>
        </template>
        <template slot="search">
            <input type="text" placeholder="search">
        </template>
        <template slot="nav">
            <ve-list :row="true">
                <ve-list-item>
                    <ve-button href="#ve-image" type="text">ve-image</ve-button>
                </ve-list-item>
                <ve-list-item>
                    <ve-button href="#ve-loading" type="text">ve-loading</ve-button>
                </ve-list-item>
                <ve-list-item>
                    <ve-button href="#ve-list" type="text">ve-list</ve-button>
                </ve-list-item>
                <ve-list-item>
                    <ve-button href="#ve-scroll" type="text">ve-scroll</ve-button>
                </ve-list-item>
            </ve-list>
        </template>
        <template slot="login">
            <ve-list :row="true">
                <ve-list-item>
                    <ve-button type="text">Log in</ve-button>
                </ve-list-item>
                <ve-list-item>
                    <ve-button type="text">Register</ve-button>
                </ve-list-item>
            </ve-list>
        </template>
    </ve-header>

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

    <h2 id="ve-loading">ve-loading</h2>
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

    <h2 id="ve-list">ve-list</h2>
    <ve-panel width="320px">
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
    <pre>
        props: {
            rounded: false,
            row: false
        }
    </pre>

    <h2 id="ve-image">ve-image</h2>
    <ve-panel width="320px">
      <ve-image :lazy="true" alt="lazy"
                src="https://expeditionportal.com/media/2014/05/Mojave-002.jpg"
                preview="https://static.greatbigcanvas.com/images/square/getty-images/cadiz-dunes-at-sunrise-sheephole-mountains-in-distance-in-mojave-desert-california,1977157.jpg?max=128" />
    </ve-panel>
    <pre>
      props: {
        lazy: false,
        src,
        preview: '',
        alt: '',
        placeholder: ''
      }
    </pre>

    <h2>ve-button</h2>
    <ve-button btn-type="button">
      Primary
    </ve-button>
    <pre>
      props: {
        type: 'primary',
        btnStyle: '',
        state: '',
        btnType: 'button',
        btnName: '',
        btnValue: null,
        disabled: false,
        href: '',
        autofocus: false
      }
    </pre>

    <h2 id="ve-scroll">ve-scroll</h2>
    <ve-panel width="260px" height="260px">
        <ve-scroll>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, totam aspernatur? Repudiandae
            dignissimos asperiores magnam consectetur sunt atque culpa modi blanditiis numquam, quam voluptatum
            dolorem corrupti distinctio delectus commodi temporibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad facere saepe consectetur laborum iure!
            Nihil doloribus ipsum numquam, nesciunt dolore possimus distinctio assumenda. At, porro ad hic
            unde nemo cupiditate!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores ratione voluptas totam odit modi
            tempora! Delectus culpa obcaecati nobis. Quo, esse! Rem, repellendus! At necessitatibus vero maxime
            voluptas, quidem nisi.
        </ve-scroll>
        <pre>
            props: {
                settings: {}
            }
        </pre>
    </ve-panel>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

import veAvatar from './components/Avatar'
import veButton from './components/Button'
import veDivider from './components/Divider'
import veHeader from './components/Header'
import veImage from './components/Image'
import veItem from './components/Item'
import veList from './components/List'
import veListItem from './components/ListItem'
import veLoading from './components/Loading'
import veMask from './components/Mask'
import vePanel from './components/Panel'
import veScroll from './components/Scroll'
import veSpinner from './components/Spinner'

export default {
  name: 'app',
  components: {
    HelloWorld,
    veAvatar,
    veButton,
    veDivider,
    veHeader,
    veImage,
    veItem,
    veList,
    veListItem,
    veLoading,
    veMask,
    vePanel,
    veScroll,
    veSpinner,
  },
  data: function () {
      const headerSettings = {
          logo: {
              width: 20,
              position: 1,
              show: true
          },
          nav: {
              width: 40,
              position: 0,
              show: true
          },
          search: {
              width: 20,
              position: 2,
              show: true
          },
          login: {
              width: 20,
              position: 3,
              show: true
          }
      }

      return {
          headerSettings
      };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.text-center {
  text-align: center;
}
</style>
