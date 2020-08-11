<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <div v-for="link in linksData"
          :key="link.title"
          v-bind="link"
          >
          <div :to="link.to">da</div>
          </div>
        <EssentialLink

        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'MainLayout',
  // components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      linksData: [
        {
          title: 'Öl',
          caption: 'APK för öl',
          icon: 'local_drink',
          to: '/beer'
        },
        {
          title: 'Rött vin',
          caption: 'APK Rött vin',
          icon: 'wine',
          to: '/redwine'
        },
        {
          title: 'Vitt vin',
          caption: 'APK Vitt vin',
          icon: 'bottle',
          to: '/whitewine'
        },
        {
          title: 'Liquor',
          caption: 'APK för sprit',
          icon: 'liquor',
          to: '/liquor'
        },
        {
          title: 'Whisky',
          caption: 'APK för Whisky',
          icon: 'Whisky',
          to: '/thisky'
        }
      ]
      // essentialLinks: linksData
    }
  },
  mounted () {
    this.leftDrawerOpen = false
  }
}
</script>
