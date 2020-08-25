import Vue from 'vue'
import axios from 'axios'

// get baseURL from context
Vue.prototype.$axios = axios.create({
  baseURL: 'http://127.0.0.1:3000'
})
