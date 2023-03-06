<template>
  <nord-card padding="l">
    <h2 slot="header">Consultar microfono</h2>
    <form action="#">
      <nord-stack>

        <audio-recorder
            upload-url="some url"
            :attempts="3"
            :time="2"
            :before-recording="callback"
            :after-recording="callback"
            :before-upload="callback"
            :successful-upload="callback"
            :failed-upload="callback"/>


        <nord-button type="submit" expand variant="primary">
          Sign in
        </nord-button>
      </nord-stack>
    </form>
  </nord-card>

  <nord-card class="n-align-center">
    New to Nord? <a href="#">Create an account</a>.
  </nord-card>
</template>


<script>
  import { ref } from 'vue';
  import axios from 'axios';
  import AudioRecorder from 'vue-audio-recorder'
  export default {
    name: 'aa',
    components: {
      AudioRecorder
    },
    methods: {
      callback (msg) {
        console.debug('Event: ', msg)
      }
    }
  };
</script>