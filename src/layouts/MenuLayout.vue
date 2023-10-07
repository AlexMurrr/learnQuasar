<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar>        

        <q-toolbar-title align = "center" class = "font-bold">
          Fishing
        </q-toolbar-title>
      </q-toolbar>

      <!-- <q-tabs>
        <q-route-tab
          v-for = "(menuItem, index) in menuItems"
          :key = "index"
          :icon="menuItem.icon"
          to="/your/route"
          replace
          :label="menuItem.displayName"
        />       
      </q-tabs> -->
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer>
      <q-tabs switch-indicator class = "tabs-bottom">
        <q-route-tab
          v-for = "(menuItem, index) in menuItems"
          :key = "index"
          :icon="menuItem.icon"
          :to="menuItem.link"
          replace
          :label="menuItem.displayName"
        />       
      </q-tabs>     
    </q-footer>    

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const menuItems = ref(
  [
    {
        displayName: 'Запись',
        icon: 'edit',
        link: {path: '/record'}
    },
    {
        displayName: 'Профиль',
        icon: 'person',
        link: {path: 'profile'}
    },
    {
        displayName: 'Проэкты',
        icon: 'phishing',
        link: {path: '/project'}
    },
    // {
    //     displayName: 'Филиaлы',
    //     icon: 'home',
    //     link: {path: ''}
    // },
]
)
//import {menuItems} from ''

// export default {
//   name: 'LayoutName',

//   setup () {
//     const leftDrawerOpen = ref(false)

//     return {
//       leftDrawerOpen,
//       toggleLeftDrawer () {
//         leftDrawerOpen.value = !leftDrawerOpen.value
//       }
//    }
//   }
// }
</script>


<style  lang = "scss">
.tabs-bottom{
  .q-tab__content{
  .q-tab__label{
    font-size: 15px;
  }
}
}
.q-toolbar__title{
  font-size: 30px;
}
</style>