import Vue from 'vue'
import axios from 'axios'
import app from './app'

import AudioRecorder from '@/index'

Vue.prototype.$http = axios

Vue.use(AudioRecorder)
import 'babel-polyfill';
new Vue({
  el: '#app',
  render: h => h(app)
})
