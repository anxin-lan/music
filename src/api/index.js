import axios from 'axios'

// let baseUrl = 'http://localhost:3000';
let baseUrl = 'http://music.cpengx.cn';

//获取banner轮播图 根据api文档：type:资源类型,对应以下类型,默认为 0 即 PC
//0: pc；1: android；2: iphone；3: ipad
export function getBanner(type = 1) {
  return axios.get(`${baseUrl}/banner?type=${type}`)
}

//获取推荐歌单
export function getMusicList(limit = 10) {
  return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}

//获取歌单详情
export function getMusicListDetail(id) {
  return axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}

//获取歌词
export function getMusicLyric(id) {
  return axios.get(`${baseUrl}/lyric?id=${id}`)
}

//搜索
export function SearchMusic(keyword) {
  return axios.get(`${baseUrl}/search?keywords=${keyword}`)
}

//登录
export function Login(phone, password) {
  return axios.get(`${baseUrl}/login/cellphone?phone=${phone}&password=${password}`)
}

//获取用户详情
export function getUserDetail(uid) {
  return axios.get(`${baseUrl}/user/detail?uid=${uid}`)
}


export default {
  getBanner, getMusicList, getMusicListDetail, getMusicLyric, SearchMusic, Login, getUserDetail
}