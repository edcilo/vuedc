<template>
    <div class="colors">
        <h2>Colors</h2>

        <h3>Color palette</h3>

        <div class="color-panels">
            <ve-panel>
                <ve-list>
                    <ve-list-item v-for="(e, i) in gray" :key="i" :border="true">
                        <ve-item :class="e.class">
                            {{ i }}
                            <template slot="control">
                                {{ e.hex }}
                            </template>
                        </ve-item>
                    </ve-list-item>
                </ve-list>
            </ve-panel>

            <ve-panel>
                <ve-list>
                    <ve-list-item v-for="(e, i) in red" :key="i" :border="true">
                        <ve-item :class="e.class">
                            {{ i }}
                            <template slot="control">
                                {{ e.hex }}
                            </template>
                        </ve-item>
                    </ve-list-item>
                </ve-list>
            </ve-panel>

            <ve-panel>
                <ve-list>
                    <ve-list-item v-for="(e, i) in orange" :key="i" :border="true">
                        <ve-item :class="e.class">
                            {{ i }}
                            <template slot="control">
                                {{ e.hex }}
                            </template>
                        </ve-item>
                    </ve-list-item>
                </ve-list>
            </ve-panel>

            <ve-panel>
                <ve-list>
                    <ve-list-item v-for="(e, i) in yellow" :key="i" :border="true">
                        <ve-item :class="e.class">
                            {{ i }}
                            <template slot="control">
                                {{ e.hex }}
                            </template>
                        </ve-item>
                    </ve-list-item>
                </ve-list>
            </ve-panel>

            <ve-panel>
                <ve-list>
                    <ve-list-item v-for="(e, i) in green" :key="i" :border="true">
                        <ve-item :class="e.class">
                            {{ i }}
                            <template slot="control">
                                {{ e.hex }}
                            </template>
                        </ve-item>
                    </ve-list-item>
                </ve-list>
            </ve-panel>

            <ve-panel>
                <ve-list>
                    <ve-list-item v-for="(e, i) in teal" :key="i" :border="true">
                        <ve-item :class="e.class">
                            {{ i }}
                            <template slot="control">
                                {{ e.hex }}
                            </template>
                        </ve-item>
                    </ve-list-item>
                </ve-list>
            </ve-panel>

            <ve-panel>
                <ve-list>
                    <ve-list-item v-for="(e, i) in blue" :key="i" :border="true">
                        <ve-item :class="e.class">
                            {{ i }}
                            <template slot="control">
                                {{ e.hex }}
                            </template>
                        </ve-item>
                    </ve-list-item>
                </ve-list>
            </ve-panel>

            <ve-panel>
                <ve-list>
                    <ve-list-item v-for="(e, i) in indigo" :key="i" :border="true">
                        <ve-item :class="e.class">
                            {{ i }}
                            <template slot="control">
                                {{ e.hex }}
                            </template>
                        </ve-item>
                    </ve-list-item>
                </ve-list>
            </ve-panel>

            <ve-panel>
                <ve-list>
                    <ve-list-item v-for="(e, i) in purple" :key="i" :border="true">
                        <ve-item :class="e.class">
                            {{ i }}
                            <template slot="control">
                                {{ e.hex }}
                            </template>
                        </ve-item>
                    </ve-list-item>
                </ve-list>
            </ve-panel>

            <ve-panel>
                <ve-list>
                    <ve-list-item v-for="(e, i) in pink" :key="i" :border="true">
                        <ve-item :class="e.class">
                            {{ i }}
                            <template slot="control">
                                {{ e.hex }}
                            </template>
                        </ve-item>
                    </ve-list-item>
                </ve-list>
            </ve-panel>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

import veDivider from './../components/Divider/index.vue';
import vePanel from './../components/Panel/index.vue';
import veList from './../components/List/index.vue';
import veListItem from './../components/ListItem/index.vue';
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
export default class Colors extends Vue
{
    gray: object = {
        "black": {
            class: 'bg-black tc-white',
            hex: '#22292F'
        },
        "darkest": {
            class: 'bg-gray-darkest tc-white',
            hex: '#3D4852'
        },
        "darker": {
            class: 'bg-gray-darker tc-white',
            hex: '#606F7B'
        },
        "dark": {
            class: 'bg-gray-dark tc-white',
            hex: '#8795A1'
        },
        "base": {
            class: 'bg-gray-base',
            hex: '#B8C2CC'
        },
        "light": {
            class: 'bg-gray-light',
            hex: '#DAE1E7'
        },
        "lighter": {
            class: 'bg-gray-lighter',
            hex: '#F1F5F8'
        },
        "lightest": {
            class: 'bg-gray-lightest',
            hex: '#F8FAFC'
        },
        "white": {
            class: 'bg-white',
            hex: '#FFFFFF'
        },
    };

    red: object = {
        "darkest": {
            class: 'bg-red-darkest tc-white',
            hex: '#3B0D0C'
        },
        "darker": {
            class: 'bg-red-darker tc-white',
            hex: '#621B18'
        },
        "dark": {
            class: 'bg-red-dark tc-white',
            hex: '#CC1F1A'
        },
        "base": {
            class: 'bg-red-base tc-white',
            hex: '#E3342F'
        },
        "light": {
            class: 'bg-red-light',
            hex: '#EF5753'
        },
        "lighter": {
            class: 'bg-red-lighter',
            hex: '#F9ACAA'
        },
        "lightest": {
            class: 'bg-red-lightest',
            hex: '#FCEBEA'
        }
    };

    orange: object = {
        "darkest": {
            class: 'bg-orange-darkest tc-white',
            hex: '#462A16'
        },
        "darker": {
            class: 'bg-orange-darker tc-white',
            hex: '#613B1F'
        },
        "dark": {
            class: 'bg-orange-dark tc-white',
            hex: '#DE751F'
        },
        "base": {
            class: 'bg-orange-base tc-white',
            hex: '#F6993F'
        },
        "light": {
            class: 'bg-orange-light',
            hex: '#FAAD63'
        },
        "lighter": {
            class: 'bg-orange-lighter',
            hex: '#FCD9B6'
        },
        "lightest": {
            class: 'bg-orange-lightest',
            hex: '#FFF5EB'
        }
    };

    yellow: object = {
        "darkest": {
            class: 'bg-yellow-darkest tc-white',
            hex: '#462A16'
        },
        "darker": {
            class: 'bg-yellow-darker tc-white',
            hex: '#613B1F'
        },
        "dark": {
            class: 'bg-yellow-dark tc-white',
            hex: '#DE751F'
        },
        "base": {
            class: 'bg-yellow-base tc-white',
            hex: '#F6993F'
        },
        "light": {
            class: 'bg-yellow-light',
            hex: '#FAAD63'
        },
        "lighter": {
            class: 'bg-yellow-lighter',
            hex: '#FCD9B6'
        },
        "lightest": {
            class: 'bg-yellow-lightest',
            hex: '#FFF5EB'
        }
    };

    green: object = {
        "darkest": {
            class: 'bg-green-darkest tc-white',
            hex: '#462A16'
        },
        "darker": {
            class: 'bg-green-darker tc-white',
            hex: '#613B1F'
        },
        "dark": {
            class: 'bg-green-dark tc-white',
            hex: '#DE751F'
        },
        "base": {
            class: 'bg-green-base tc-white',
            hex: '#F6993F'
        },
        "light": {
            class: 'bg-green-light',
            hex: '#FAAD63'
        },
        "lighter": {
            class: 'bg-green-lighter',
            hex: '#FCD9B6'
        },
        "lightest": {
            class: 'bg-green-lightest',
            hex: '#FFF5EB'
        }
    };

    teal: object = {
        "darkest": {
            class: 'bg-teal-darkest tc-white',
            hex: '#462A16'
        },
        "darker": {
            class: 'bg-teal-darker tc-white',
            hex: '#613B1F'
        },
        "dark": {
            class: 'bg-teal-dark tc-white',
            hex: '#DE751F'
        },
        "base": {
            class: 'bg-teal-base tc-white',
            hex: '#F6993F'
        },
        "light": {
            class: 'bg-teal-light',
            hex: '#FAAD63'
        },
        "lighter": {
            class: 'bg-teal-lighter',
            hex: '#FCD9B6'
        },
        "lightest": {
            class: 'bg-teal-lightest',
            hex: '#FFF5EB'
        }
    };

    blue: object = {
        "darkest": {
            class: 'bg-blue-darkest tc-white',
            hex: '#462A16'
        },
        "darker": {
            class: 'bg-blue-darker tc-white',
            hex: '#613B1F'
        },
        "dark": {
            class: 'bg-blue-dark tc-white',
            hex: '#DE751F'
        },
        "base": {
            class: 'bg-blue-base tc-white',
            hex: '#F6993F'
        },
        "light": {
            class: 'bg-blue-light',
            hex: '#FAAD63'
        },
        "lighter": {
            class: 'bg-blue-lighter',
            hex: '#FCD9B6'
        },
        "lightest": {
            class: 'bg-blue-lightest',
            hex: '#FFF5EB'
        }
    };

    indigo: object = {
        "darkest": {
            class: 'bg-indigo-darkest tc-white',
            hex: '#462A16'
        },
        "darker": {
            class: 'bg-indigo-darker tc-white',
            hex: '#613B1F'
        },
        "dark": {
            class: 'bg-indigo-dark tc-white',
            hex: '#DE751F'
        },
        "base": {
            class: 'bg-indigo-base tc-white',
            hex: '#F6993F'
        },
        "light": {
            class: 'bg-indigo-light',
            hex: '#FAAD63'
        },
        "lighter": {
            class: 'bg-indigo-lighter',
            hex: '#FCD9B6'
        },
        "lightest": {
            class: 'bg-indigo-lightest',
            hex: '#FFF5EB'
        }
    };

    purple: object = {
        "darkest": {
            class: 'bg-purple-darkest tc-white',
            hex: '#462A16'
        },
        "darker": {
            class: 'bg-purple-darker tc-white',
            hex: '#613B1F'
        },
        "dark": {
            class: 'bg-purple-dark tc-white',
            hex: '#DE751F'
        },
        "base": {
            class: 'bg-purple-base tc-white',
            hex: '#F6993F'
        },
        "light": {
            class: 'bg-purple-light',
            hex: '#FAAD63'
        },
        "lighter": {
            class: 'bg-purple-lighter',
            hex: '#FCD9B6'
        },
        "lightest": {
            class: 'bg-purple-lightest',
            hex: '#FFF5EB'
        }
    };

    pink: object = {
        "darkest": {
            class: 'bg-pink-darkest tc-white',
            hex: '#462A16'
        },
        "darker": {
            class: 'bg-pink-darker tc-white',
            hex: '#613B1F'
        },
        "dark": {
            class: 'bg-pink-dark tc-white',
            hex: '#DE751F'
        },
        "base": {
            class: 'bg-pink-base tc-white',
            hex: '#F6993F'
        },
        "light": {
            class: 'bg-pink-light',
            hex: '#FAAD63'
        },
        "lighter": {
            class: 'bg-pink-lighter',
            hex: '#FCD9B6'
        },
        "lightest": {
            class: 'bg-pink-lightest',
            hex: '#FFF5EB'
        }
    };
}
</script>

<style lang="scss" scoped>
.colors {
    .color-panels {
        display: grid;
        justify-items: stretch;
        grid-column-gap: 1rem;
        grid-column-gap: 1%;
        grid-row-gap: 1rem;
        grid-template-columns: repeat(4, 24.25%);
    }
}
</style>
