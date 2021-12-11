import { createStore } from 'vuex'
import api from '@/api/index.js'

export default createStore({
  state: {
    playlist: [{
      // name: "致你",
      // id: 1867217766,
      // al: {
      //   id: 131405806,
      //   name: "致你",
      //   pic: 109951166254691360,
      //   picUrl: "http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg",
      //   pic_str: "109951166254691365"
      // }
      name: "电台情歌",
      id: 277822,
      al: {
        id: 27581,
        name: "电台情歌",
        pic: 19045740416582430,
        picUrl: "http://p4.music.126.net/ImOQNmJZTzogPdt0-AsyDA==/19045740416582430.jpg?param=34y34",
      }
    }],
    plyaControllerIndex: 0,
    lyric: '',
    currentTime: 0,
    intervalId: 0,
    user: {
      isLogin: false,
      account: {},
      userDetail: {}
    }
  },
  getters: {
    lyricList(state) {
      let arr = state.lyric.split(/\n/gis).map((item, i, arr) => {
        let minute = parseInt(item.slice(1, 3))
        let second = parseInt(item.slice(4, 6))
        let mill = parseInt(item.slice(7, 10))
        // console.log(minute, second, mill)

        return {
          minute, second, mill,
          lyric: item.slice(11, item.length),
          content: item,
          time: mill + second * 1000 + minute * 60 * 1000
        }
      })

      arr.forEach((item, i) => {
        if (i == 0) {
          item.pre = 0
        } else {
          item.pre = arr[i - 1].time
        }
      })
      return arr
    }
  },
  mutations: {
    setPlayList: function(state, value) {
      state.playlist = value
    },
    pushPlayList: function(state, value) {
      state.playlist.push(value)
    },
    setPlayIndex(state, value) {
      state.plyaControllerIndex = value
    },
    setMusicLyric(state, value) {
      state.lyric = value
    },
    setCurrentTime(state, value) {
      state.currentTime = value
    },
    setUser(state, value) {
      state.user = value
    }
  },
  actions: {
    async reqLyric(content, payload) {
      // console.log(payload);
      let result = await api.getMusicLyric(payload.id)
      content.commit('setMusicLyric', result.data.lrc.lyric)
      // console.log(result.data.lrc.lyric);
    },
    async login(content, payload) {
      // console.log(payload);
      let result = await api.Login(payload.phone, payload.password)
      if (result.data.code == 200) {
        content.state.user.isLogin = true
        content.state.user.account = result.data.account
        let userDetail = await api.getUserDetail(result.data.account.id)
        content.state.user.userDetail = userDetail.data
        // localStorage.userData = JSON.stringify(content.state.user)

        content.commit('setUser', content.state.user)
      }
      return result
    }
  },
  modules: {
  }
})
