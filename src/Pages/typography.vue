<template>
    <div class="page-typography">
        <h2>Image</h2>

        <h3>Normal</h3>
        <ve-panel width="380px">
            <ve-image alt="normal" src="https://expeditionportal.com/media/2014/05/Mojave-002.jpg" />
        </ve-panel>

        <h3>Lazy</h3>
        <ve-panel width="380px">
            <ve-image :lazy="true" alt="lazy"
                src="https://expeditionportal.com/media/2014/05/Mojave-002.jpg"
                preview="https://static.greatbigcanvas.com/images/square/getty-images/cadiz-dunes-at-sunrise-sheephole-mountains-in-distance-in-mojave-desert-california,1977157.jpg?max=128" />
        </ve-panel>

        <h3>Placeholder</h3>
        <ve-panel width="380px">
            <ve-image alt="placeholder"
                src="https://expeditionportal.com/media/2014/05/Mojave-002__notFound.jpg"
                placeholder="https://cbsla.files.wordpress.com/2017/04/mojave-trails-national-preserve.jpg?w=628" />
        </ve-panel>

        <h2>Loading</h2>

        <button @click="toggleLoading">Toggle</button>

        <ve-panel width="480px" height="280px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis id esse, autem consequatur optio
            eveniet delectus in accusantium totam qui provident magnam nesciunt sequi quo laudantium vitae.
            Dolorum, debitis exercitationem! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Deleniti ea necessitatibus provident iure fugiat dignissimos magni quos, cumque ducimus
            doloribus at nam esse dolore porro nulla recusandae deserunt similique reprehenderit.
            <ve-loading :open="loadingShow" :fullscreen="false" :opacity="0.8">
                Loading...
            </ve-loading>
        </ve-panel>

        <h2>Mask</h2>

        <ve-panel width="480px" height="280px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis id esse, autem consequatur optio
            eveniet delectus in accusantium totam qui provident magnam nesciunt sequi quo laudantium vitae.
            Dolorum, debitis exercitationem! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Deleniti ea necessitatibus provident iure fugiat dignissimos magni quos, cumque ducimus
            doloribus at nam esse dolore porro nulla recusandae deserunt similique reprehenderit.
            <ve-mask :open="true" :fullscreen="false" :opacity="0.6"/>
        </ve-panel>

        <h2>Spinner</h2>

        <ve-panel width="40px">
            <ve-spinner></ve-spinner>
        </ve-panel>

        <h2>Item</h2>

        <ve-panel width="280px">
            <ve-item>
                Item with only text
            </ve-item>

            <ve-item>
                <template slot="visual">
                    <ve-avatar label="edcilo" />
                </template>
                Item with visual
            </ve-item>

            <ve-item>
                Item with control
                <template slot="control">
                    Ctrl + C
                </template>
            </ve-item>

            <ve-item>
                 <template slot="visual">
                    <ve-avatar label="edcilo" />
                </template>
                <template slot="control">
                    Ctrl + C
                </template>
            </ve-item>

            <ve-item>
                <template slot="visual">
                    <ve-avatar label="edcilo" />
                </template>
                Item with all
                <template slot="control">
                    Ctrl + C
                </template>
            </ve-item>
        </ve-panel>

        <h2>Avatar</h2>

        <ve-panel>
            <ve-avatar />

            <ve-avatar label="edcilo" />

            <ve-avatar label="edcilo" color="#f00" />

            <ve-avatar label="edcilo" :tile="true" />

            <ve-avatar src="http://edcilo.com/images/team/edcilo.png" alt="avatar with image" />
            <ve-avatar src="http://edcilo.com/images/team/edcilo.png" alt="avatar with image" :tile="true" />
        </ve-panel>

        <h3>Slot</h3>

        <ve-panel>
            <ve-avatar>
                <img src="http://edcilo.com/images/team/edcilo.png" alt="avatar with image">
            </ve-avatar>
            <ve-avatar color="#e96e06">
                <span style="color: #fff">EC</span>
            </ve-avatar>
        </ve-panel>

        <h3>Sizes</h3>

        <ve-panel>
            <ve-avatar size="40px">40px</ve-avatar>
            <ve-avatar size="60px">60px</ve-avatar>
            <ve-avatar size="80px">80px</ve-avatar>
            <ve-avatar size="100px">100px</ve-avatar>
        </ve-panel>

        <h2>Divider</h2>

        <h3>Line</h3>

        <ve-divider />

        <h3>With subheader</h3>

        <ve-divider subheader="With subheader" />

        <h3>Light</h3>

        <ve-panel class="bg-black">
            <p>lorem ipsum dolor sit amet consectetur</p>
            <ve-divider :dark="true" :clear="true" subheader="With subheader clear"></ve-divider>
            <p>lorem ipsum dolor sit amet consectetur</p>
        </ve-panel>

        <h2>Typography</h2>

        <div class="typography-panels">
            <ve-panel>
                <ve-list :rounded="true">
                    <ve-list-item :border="true">
                        <ve-item class="font-sans">
                            Font sans
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="font-serif">
                            Font serif
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="font-mono">
                            Font mono
                        </ve-item>
                    </ve-list-item>
                </ve-list>
            </ve-panel>

            <ve-panel>
                <ve-list :rounded="true">
                    <ve-list-item :border="true">
                        <ve-item class="text-xs">
                            Text xs
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="text-sm">
                            Text sm
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="text-base">
                            Text base
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="text-lg">
                            Text lg
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="text-xl">
                            Text xl
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="text-2xl">
                            Text 2xl
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="text-3xl">
                            Text 3xl
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="text-4xl">
                            Text 4xl
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="text-5xl">
                            Text 5xl
                        </ve-item>
                    </ve-list-item>
                </ve-list>
            </ve-panel>

            <ve-panel>
                <ve-list :rounded="true">
                    <ve-list-item :border="true">
                        <ve-item class="font-hairline">
                            Font hairline
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="font-thin">
                            Font thin
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="font-light">
                            Font light
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="font-normal">
                            Font normal
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="font-medium">
                            Font medium
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="font-semibold">
                            Font semibold
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="font-bold">
                            Font bold
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="font-extrabold">
                            Font extrabold
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="font-black">
                            Font black
                        </ve-item>
                    </ve-list-item>
                </ve-list>
            </ve-panel>

            <ve-panel>
                <ve-list :rounded="true">
                    <ve-list-item :border="true">
                        <ve-item class="tracking-tight">
                            Tracking tight
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="tracking-normal">
                            Tracking normal
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="tracking-wide">
                            Tracking wade
                        </ve-item>
                    </ve-list-item>
                </ve-list>
            </ve-panel>

            <ve-panel>
                <ve-list :rounded="true">
                    <ve-list-item :border="true">
                        <ve-item class="leading-none">
                            Leading none: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corrupti sint laborum, omnis dolores.
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="leading-tight">
                            Leading tight: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut aut omnis voluptatem nesciunt sapiente.
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="leading-normal">
                            Leading normal: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nam explicabo velit asperiores.
                        </ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="leading-loose">
                            Leading loose: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatum soluta facilis ipsum nisi.
                        </ve-item>
                    </ve-list-item>
                </ve-list>
            </ve-panel>

            <ve-panel>
                <ve-list :rounded="true">
                    <ve-list-item>
                        <ve-panel>
                            <ul class="list-reset">
                                <li>Item 0</li>
                                <li>item 1</li>
                                <li>item 2</li>
                                <li>item 3</li>
                            </ul>
                        </ve-panel>
                    </ve-list-item>
                </ve-list>
            </ve-panel>

            <ve-panel>
                <ve-list :rounded="true">
                    <ve-list-item :border="true">
                        <ve-item class="italic">Italic</ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="roma">Roman</ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="uppercase">Uppercase</ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="lowercase">Lowercase</ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="capitalize">capitalize</ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="normal-case">Normal case</ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="underline">Underline</ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="line-through">Line through</ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="no-underline">No underline</ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="antialiased">Antialiased</ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="subpixel-antialiased">Subpixel antialiased</ve-item>
                    </ve-list-item>
                </ve-list>
            </ve-panel>

            <ve-panel>
                <ve-list>
                    <ve-list-item :border="true">
                        <ve-item class="text-left">Text left</ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="text-center">Text center</ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="text-right">Text right</ve-item>
                    </ve-list-item>
                    <ve-list-item :border="true">
                        <ve-item class="text-justify">Text justify</ve-item>
                    </ve-list-item>
                </ve-list>
            </ve-panel>
        </div>

        <h2>Shadow</h2>

        <div class="box-shadow-test">
            <div class="box-shadow-element shadow-sm"></div>

            <div class="box-shadow-element shadow"></div>

            <div class="box-shadow-element shadow-md"></div>

            <div class="box-shadow-element shadow-lg"></div>

            <div class="box-shadow-element shadow-inner"></div>

            <div class="box-shadow-element shadow-outline"></div>

            <div class="box-shadow-element shadow-none"></div>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

import veDivider from './../components/Divider/index.vue';
import vePanel from './../components/Panel/index.vue';
import veList from './../components/List/index.vue';
import veListItem from './../components/ListItem/index.vue';
import veItem from './../components/Item/index.vue';
import veAvatar from './../components/Avatar/index.vue';
import veSpinner from './../components/Spinner/index.vue';
import veMask from './../components/Mask/index.vue';
import veLoading from './../components/Loading/index.vue';
import veImage from './../components/Image/index.vue';

@Component({
    components: {
        veDivider,
        vePanel,
        veList,
        veListItem,
        veItem,
        veAvatar,
        veSpinner,
        veMask,
        veLoading,
        veImage
    }
})
export default class Typography extends Vue
{
    protected loadingShow: boolean = true;

    toggleLoading() {
        this.loadingShow = !this.loadingShow;
    }
}
</script>

<style lang="scss">
.page-typography {
    .typography-panels {
        display: grid;
        justify-items: stretch;
        grid-column-gap: 1rem;
        grid-column-gap: 1%;
        grid-row-gap: 1rem;
        grid-template-columns: repeat(4, 24.25%);
    }

    .box-shadow-test {
        display: flex;
        justify-content: center;
        padding: 60px;
        width: 100%;

        .box-shadow-element {
            background: #fafafa;
            margin: 1rem;
            width: 120px;
            height: 120px;
        }
    }
}
</style>
