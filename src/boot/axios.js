import Vue from 'vue'
import axios from 'axios'

// get baseURL from context
// use .env, secrets and environment variables
// to use the appropriate URL here
Vue.prototype.$axios = axios.create({
  baseURL: 'http://127.0.0.1:3000'
})
