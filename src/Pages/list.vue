<template>
    <div class="list">
        <h2>List</h2>

        <ve-divider />

        <ve-panel>
            <ve-list :rounded="true">
                <ve-list-item v-for="i in 6" :key="i" :border="true">
                    <ve-item>
                        Item {{ i }}
                    </ve-item>
                </ve-list-item>
            </ve-list>
        </ve-panel>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";
import veDivider from "./../components/Divider/index.vue";
import vePanel from './../components/Panel/index.vue';
import veList from "./../components/List/index.vue";
import veListItem from "./../components/ListItem/index.vue";
import veItem from './../components/Item/index.vue';

@Component({
    components: {
        veDivider,
        vePanel,
        veList,
        veListItem,
        veItem
    }
})
export default class List extends Vue
{}
</script>
