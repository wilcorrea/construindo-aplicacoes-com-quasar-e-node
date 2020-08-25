import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios.create({
  baseURL: 'http://127.0.0.1:3000'
})
