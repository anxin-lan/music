<template>
  <div class="list-view">
    <LitsviewTop :playlist="state.playlist"></LitsviewTop>
    <PlayList :playlist="state.playlist"></PlayList>
  </div>
</template>

<script>
import LitsviewTop from '@/components/listview/ListViewTop.vue'
import PlayList from '@/components/listview/PlayList.vue'

import { getMusicListDetail } from '@/api/index.js'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import store from '@/store/index.js'
export default {
  components: {
    LitsviewTop,
    PlayList
  },
  setup() {
    const route = useRoute()
    let state = reactive({
      list: [],
      playlist: {
        creator: {},
        tracks: []
      }
    })
    onMounted(async () => {
      let id = route.query.id
      console.log(route)
      let result = await getMusicListDetail(id)
      state.playlist = result.data.playlist
      store.commit('setPlayList', state.playlist.tracks)
      console.log(result)
    })
    return {
      state
    }
  }
}
</script>

<style>
</style>