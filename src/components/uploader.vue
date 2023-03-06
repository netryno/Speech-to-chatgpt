<style lang="scss">
  @import '../scss/icons';
</style>

<template>
  <icon-button name="save" class="ar-icon ar-icon__xs ar-icon--no-border" @click.native="upload"/>
</template>

<script>
  import IconButton from './icon-button'
  import UploaderPropsMixin from '@/mixins/uploader-props'
  import axios from 'axios';
  export default {
    mixins: [UploaderPropsMixin],
    props: {
      record: { type: Object }
    },
    components: {
      IconButton
    },
    methods: {
      async upload_fff () {
        console.log('llegandoo hasta aquiiii');
 
        if (!this.record.url) {
          return
        }

        this.$eventBus.$emit('start-upload')

        const data = new FormData()
        data.append('audio', this.record.blob, `${this.filename}.mp3`)

        const headers = Object.assign(this.headers, {})
        headers['Content-Type'] = `multipart/form-data; boundary=${data._boundary}`

        this.$http.post(this.uploadUrl, data, { headers: headers }).then(resp => {
          this.$eventBus.$emit('end-upload', { status: 'success', response: resp })
        }).catch(error => {
          this.$eventBus.$emit('end-upload', { status: 'fail', response: error })
        })
  
      },
      async upload () {
        if (!this.record.url) {
          return
        }
        console.log('uploadin');
        let base64 = await this.convertBlobToBase64(this.record.blob);
        this.$eventBus.$emit('start-upload');
        const response = await axios.post('http://localhost:8003/process_audio', { audio_b64: base64 });

        console.log('prompt', response.data.prompt)
        console.log('chatgpt_respuesta', response.data.chatgpt_respuesta)

        let base64String = response.data.chatgpt_respuesta_audiob64;
        let binaryString = atob(base64String);
        let byteArray = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          byteArray[i] = binaryString.charCodeAt(i);
        }
        let blob = new Blob([byteArray], {type: 'audio/*'});
        let url = URL.createObjectURL(blob);

        let randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;

        //Agregar una fila
        let rec = {
          blob:blob,
          duration:"00:04",
          id: randomNumber,
          url:url
        };
        this.$eventBus.$emit('add-recc',rec )



        this.$eventBus.$emit('end-upload', { status: 'success', response: 'okkkk' });
        console.log(response);
        console.log('aaaaa');
      },
      convertBlobToBase64(blob){
        return new Promise((resolve, reject) => {
          let reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onload = () => {
            let base64String = reader.result.split(',')[1];
            resolve(base64String);
          };
          reader.onerror = reject;
        });
      }


    }
  }
</script>
