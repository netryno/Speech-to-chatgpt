<style lang="scss">
  .ar {
    width: 420px;
    font-family: 'Roboto', sans-serif;
    border-radius: 16px;
    background-color: #FAFAFA;
    box-shadow: 0 4px 18px 0 rgba(0,0,0,0.17);
    position: relative;
    box-sizing: content-box;
    margin: 0 auto;
    &-content {
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #239b79;
      border-radius: 10px;
    }

    &-records {
      height: 138px;
      padding-top: 1px;
      overflow-y: auto;
      margin-bottom: 20px;

      &__record {
        width: 320px;
        height: 45px;
        padding: 0 10px;
        margin: 0 auto;
        line-height: 45px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #E8E8E8;
        position: relative;

        &--selected {
          border: 1px solid #E8E8E8;
          border-radius: 24px;
          background-color: #FFFFFF;
          margin-top: -1px;
          padding: 0 34px;
        }
      }
    }

    &-recorder {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;

      &__duration {
        color: #AEAEAE;
        font-size: 32px;
        font-weight: 500;
        margin-top: 20px;
        margin-bottom: 16px;
      }

      &__stop {
        position: absolute;
        top: 10px;
        right: -52px;
      }

      &__time-limit {
        position: absolute;
        color: #AEAEAE;
        font-size: 12px;
        top: 128px;
      }

      &__records-limit {
        position: absolute;
        color: #AEAEAE;
        font-size: 13px;
        top: 78px;
      }
    }

    &-spinner {
      display: flex;
      height: 30px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 144px;
      z-index: 10;

      &__dot {
        display: block;
        margin: 0 8px;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        background: #05CBCD;
        animation-name: blink;
        animation-duration: 1.4s;
        animation-iteration-count: infinite;
        animation-fill-mode: both;

        &:nth-child(2) { animation-delay: .2s; }

        &:nth-child(3) { animation-delay: .4s; }

        @keyframes blink {
          0%    { opacity: .2; }
          20%   { opacity: 1;  }
          100%  { opacity: .2; }
        }
      }
    }

    &__text {
      color: #ededed;
      
      font-size: 16px;
    }

    &__blur {
      filter: blur(2px);
      opacity: 0.7;
    }

    &__overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 10;
    }

    &__upload-status {
      text-align: center;
      font-size: 10px;
      padding: 2px;
      letter-spacing: 1px;
      position: absolute;
      bottom: 0;

      &--success {
        color: green;
      }

      &--fail {
        color: red;
      }
    }

    &__rm {
      cursor: pointer;
      position: absolute;
      width: 6px;
      height: 6px;
      padding: 6px;
      line-height: 6px;
      margin: auto;
      left: 10px;
      bottom: 0;
      top: 0;
      color: rgb(244, 120, 90);
    }

    &__downloader,
    &__uploader {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
    }

    &__downloader {
      right: 115px;
    }

    &__uploader {
      right: 85px;
    }
  }

  @import '../scss/icons';


  .ar-records__record--selected .ar__text{
    color: #505050;
  }


  @property --value {
    syntax: "<angle>";
    inherits: true;
    initial-value: 0deg;
  }
  @property --width-ratio {
    syntax: "<number>";
    inherits: true;
    initial-value: 0;
  }
  @property --scale {
    syntax: "<number>";
    inherits: true;
    initial-value: 0;
  }
  :root {
    --width: 0.5vmin;
    --duration: 7s;
    --size: 50vmin;
    --logo: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDAuNTgxIiBoZWlnaHQ9IjU3Ljg0NiIgdmlld0JveD0iMCAwIDQwLjU4MSA1Ny44NDYiPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIwLjkxMSIgeTE9IjAuMDgyIiB4Mj0iMC4xODUiIHkyPSIwLjkxIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2UyMDBmZiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuMTA3IiBzdG9wLWNvbG9yPSIjZWVhM2Y3Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMC40NDMiIHN0b3AtY29sb3I9IiNlMWQwZTMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjU3NiIgc3RvcC1jb2xvcj0iI2ZmZiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4N2NjZjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxwYXRoIGlkPSJQYXRoXzEiIGRhdGEtbmFtZT0iUGF0aCAxIiBkPSJNOTMzLjYxMyw2OTkuNDkybC0zMS40NTMsMzEuODVoMjAuMzA4bC0xOC43OCwyNiwzOS4wNTMtMzQuNzk1SDkyMS4wN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MDIuMTU5IC02OTkuNDkyKSIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+Cjwvc3ZnPgoK");
  }
  @supports not (background: paint(foo)) {
    :root {
      --duration: 4s;
    }
  }

  .rings {
    width: 190px;
    aspect-ratio: 1;
    border-radius: 50%;
    position: relative;
    perspective: 190px;
    margin: 0 auto;
    margin-top: 10%;
  }
  .rings:before, .rings:after {
    content: "";
    position: absolute;
    inset: 0;
    background: red;
    border-radius: 50%;
    --width-ratio: 1;
    border: calc(var(--width) * var(--width-ratio)) solid transparent;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    background: conic-gradient(from calc(var(--value) * 3), #ff8c41, transparent, #6666d2, #bb2727, #3d9a7f, transparent, transparent, #00a8ff, transparent, magenta, yellow, orange, transparent, transparent, transparent) border-box;
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    --start: 180deg;
    --value: var(--start);
    --scale: 1;
    transform: rotateY(var(--value)) rotateX(var(--value)) rotateZ(var(--value)) scale(var(--scale));
  }
  @supports (background: paint(foo)) {
    .rings:before, .rings:after {
      -webkit-animation: ring var(--duration) ease-in-out infinite;
              animation: ring var(--duration) ease-in-out infinite;
    }
  }
  @supports not (background: paint(foo)) {
    .rings:before, .rings:after {
      -webkit-animation: ring-legacy var(--duration) ease-in-out infinite;
              animation: ring-legacy var(--duration) ease-in-out infinite;
    }
  }
  .rings:before {
    --start: 180deg;
  }
  .rings:after {
    --start: 90deg;
  }
  .rings > .rings:before {
    --start: 360deg;
  }
  .rings > .rings:after {
    --start: 270deg;
  }

  @-webkit-keyframes ring {
    from {
      --value: var(--start);
      --scale: 1;
    }
    50% {
      --scale: 1.2;
      --width-ratio: 1.5;
    }
    70% {
      --scale: 1;
      --value: calc(var(--start) + 180deg);
      --width-ratio: 1;
    }
    80% {
      --scale: 1.2;
      --width-ratio: 1.5;
    }
    to {
      --value: calc(var(--start) + 360deg);
      --scale: 1;
      --width-ratio: 1;
    }
  }

  @keyframes ring {
    from {
      --value: var(--start);
      --scale: 1;
    }
    50% {
      --scale: 1.2;
      --width-ratio: 1.5;
    }
    70% {
      --scale: 1;
      --value: calc(var(--start) + 180deg);
      --width-ratio: 1;
    }
    80% {
      --scale: 1.2;
      --width-ratio: 1.5;
    }
    to {
      --value: calc(var(--start) + 360deg);
      --scale: 1;
      --width-ratio: 1;
    }
  }
  @-webkit-keyframes ring-legacy {
    from {
      --value: var(--start);
      --scale: 1;
      transform: rotateY(var(--value)) rotateX(var(--value)) rotateZ(var(--value)) scale(var(--scale));
    }
    70% {
      --scale: 1.2;
      --value: calc(var(--start) + 180deg);
      transform: rotateY(var(--value)) rotateX(var(--value)) rotateZ(var(--value)) scale(var(--scale));
    }
    to {
      --value: calc(var(--start) + 360deg);
      --scale: 1;
      transform: rotateY(var(--value)) rotateX(var(--value)) rotateZ(var(--value)) scale(var(--scale));
    }
  }
  @keyframes ring-legacy {
    from {
      --value: var(--start);
      --scale: 1;
      transform: rotateY(var(--value)) rotateX(var(--value)) rotateZ(var(--value)) scale(var(--scale));
    }
    70% {
      --scale: 1.2;
      --value: calc(var(--start) + 180deg);
      transform: rotateY(var(--value)) rotateX(var(--value)) rotateZ(var(--value)) scale(var(--scale));
    }
    to {
      --value: calc(var(--start) + 360deg);
      --scale: 1;
      transform: rotateY(var(--value)) rotateX(var(--value)) rotateZ(var(--value)) scale(var(--scale));
    }
  }
  .logo {
    display: grid;
    place-items: center;
    position: absolute;
    inset: 0;
    filter: drop-shadow(0 0 1.5vmin rgba(138, 205, 240, 0.8));
    display: grid;
    place-items: center;
    background: var(--logo) center center no-repeat;
    background-size: calc(var(--size) / 3.1);
  }

  .demo {
    z-index: 10;
    display: block;
    place-items: center;
    height: 100%;
    width: 100%;
    background: radial-gradient(at center, #11111173, #000000cc);
    position: absolute;
    border-radius: 15px;
  }



  .copyright{
    display: block;
    width: 100%;
    font-size: 9px;
    text-align: right;
    color: white;
  }  
</style>

<template>
  <div class="ar">

  
    <div class="demo" v-if="isUploading">
      <div class="rings">
        <div class="rings">
        </div>
      </div>
    </div>

    <!----
      <div class="ar__overlay" v-if="isUploading"></div>


      <div class="ar-spinner" v-if="isUploading">

        <div class="ar-spinner__dot"></div>
        <div class="ar-spinner__dot"></div>
        <div class="ar-spinner__dot"></div>
      </div>
    -->



    <div class="ar-content" >
      <div class="ar-recorder">
        <icon-button
          class="ar-icon ar-icon__lg"
          :name="iconButtonType"
          :class="{
            'ar-icon--rec': isRecording,
            'ar-icon--pulse': isRecording && volume > 0.02
          }"
          @click.native="toggleRecorder"/>
        <icon-button
          class="ar-icon ar-icon__sm ar-recorder__stop"
          name="stop"
          @click.native="stopRecorderAndContinue"/>
      </div>

      <div class="ar-recorder__records-limit" v-if="attempts">Intentos: {{attemptsLeft}}/{{attempts}}</div>
      <div class="ar-recorder__duration">{{recordedTime}}</div>
      <div class="ar-recorder__time-limit" v-if="time">Maximo tiempo: {{time}}m</div>

      <div class="ar-records">
        <div
          v-if="recordList.length>0"
          class="ar-records__record"
          :class="{'ar-records__record--selected': record.id === selected.id}"
          :key="record.id"
          v-for="(record, idx) in recordList"
          @click="choiceRecord(record)">
            <div
              class="ar__rm"
              v-if="record.id === selected.id"
              @click="removeRecord(idx)">&times;</div>
            <div class="ar__text">{{ record.nombre  }} {{idx + 1}}</div>
            <div class="ar__text">{{record.duration}}</div>

            <downloader
              v-if="record.id === selected.id && showDownloadButton"
              class="ar__downloader"
              :record="record"
              :filename="filename"/>

            <uploader
              v-if="record.id === selected.id && showUploadButton  && record.nombre !='Respuesta'"
              class="ar__uploader"
              :record="record"
              :filename="filename"
              :headers="headers"
              :upload-url="uploadUrl"/>
        </div>
      </div>

      <audio-player :record="selected"/>
      <p class="copyright">Custom by: @netryno</p>
    </div>
  </div>
</template>

<script>
  import AudioPlayer from './player'
  import Downloader  from './downloader'
  import IconButton  from './icon-button'
  import Recorder    from '@/lib/recorder'
  import Uploader    from './uploader'
  import UploaderPropsMixin from '@/mixins/uploader-props'
  import { convertTimeMMSS }  from '@/lib/utils'

  export default {
    mixins: [UploaderPropsMixin],
    props: {
      attempts : { type: Number },
      time     : { type: Number },

      bitRate    : { type: Number, default: 128   },
      sampleRate : { type: Number, default: 44100 },

      showDownloadButton : { type: Boolean, default: true },
      showUploadButton   : { type: Boolean, default: true },

      micFailed        : { type: Function },
      beforeRecording  : { type: Function },
      pauseRecording   : { type: Function },
      afterRecording   : { type: Function },
      failedUpload     : { type: Function },
      beforeUpload     : { type: Function },
      successfulUpload : { type: Function },
      selectRecord     : { type: Function }
    },
    data () {
      return {
        isUploading   : false,
        recorder      : this._initRecorder(),
        recordList    : [],
        selected      : {},
        uploadStatus  : null,
      }
    },
    components: {
      AudioPlayer,
      Downloader,
      IconButton,
      Uploader
    },
    mounted () {
      //this.isUploading = true
      this.$eventBus.$on('start-upload', () => {
        this.isUploading = true
        this.beforeUpload && this.beforeUpload('before upload')
      })

      this.$eventBus.$on('end-upload', (msg) => {
        this.isUploading = false

        if (msg.status === 'success') {
          this.successfulUpload && this.successfulUpload(msg.response)
        } else {
          this.failedUpload && this.failedUpload(msg.response)
        }
      })
      //Add by paul
      this.$eventBus.$on('add-recc', (recc) => {
        //add to list response of back
        this.recordList.push(recc);
        //select last respons of back
        this.choiceRecord(recc);
        //Play audio select
        this.$eventBus.$emit('click-play' );
      })

    },
    beforeDestroy () {
      this.stopRecorder()
    },
    methods: {
      vaciarTodo(){
        this.recordList.splice(0, this.recordList.length);

        this.$eventBus.$emit('remove-record')
        this.selected={}
        this.recorder = this._initRecorder()
      },
      toggleRecorder () {
        if (this.attempts && this.recorder.records.length >= this.attempts) {
          return
        }

        if (!this.isRecording || (this.isRecording && this.isPause)) {
          this.vaciarTodo()
          this.recorder.start()
        } else {
          //this.recorder.pause()
          //enviar a gpt
          this.stopRecorderAndContinue()
        }
      },
      stopRecorder () {
        if (!this.isRecording) {
          return
        }

        this.recorder.stop()
        this.recordList = this.recorder.recordList()
      },
      stopRecorderAndContinue(){
        if (!this.isRecording) {
          this.vaciarTodo()
          return
        }else{
          this.recorder.stop()
          this.recordList = this.recorder.recordList()
        }

        //seleccionamos y enviamos a gpt
        
        if(this.recordList.length>0){
            this.choiceRecord( this.recordList[0] );
            //Play audio select
            this.$nextTick(() => {
              this.$eventBus.$emit('click-gpt', this.recordList[0].id );
            });
          
        }

      },
      removeRecord (idx) {
        this.recordList.splice(idx, 1)
        this.$set(this.selected, 'url', null)
        this.$eventBus.$emit('remove-record')
      },
      choiceRecord (record) {
        if (this.selected === record) {
          return
        }
        this.selected = record
        this.selectRecord && this.selectRecord(record)
      },
      _initRecorder () {
        return new Recorder({
          beforeRecording : this.beforeRecording,
          afterRecording  : this.afterRecording,
          pauseRecording  : this.pauseRecording,
          micFailed       : this.micFailed,
          bitRate         : this.bitRate,
          sampleRate      : this.sampleRate,
          format          : this.format
        })
      }
    },
    computed: {
      attemptsLeft () {
        return this.attempts - this.recordList.length
      },
      iconButtonType () {
        return this.isRecording && this.isPause ? 'mic' : this.isRecording ? 'pause' : 'mic'
      },
      isPause () {
        return this.recorder.isPause
      },
      isRecording () {
        return this.recorder.isRecording
      },
      recordedTime () {
        if (this.time && this.recorder.duration >= this.time * 60) {
          this.stopRecorder()
        }
        return convertTimeMMSS(this.recorder.duration)
      },
      volume () {
        return parseFloat(this.recorder.volume)
      }
    }
  }
</script>

