<template>

  <div class="card toright card-container">

    <div v-show="this.showForm">
      <form v-on:submit.prevent="doRegister()" class="form-signin">
        <span id="reauth-email" class="reauth-email"></span>
        <input type="text" v-model="name" class="form-control" placeholder="nombre" required>
        <input type="text" v-model="lastname" class="form-control" placeholder="apellido" required>
        <input type="email" v-model="email" class="form-control" placeholder="Email" required>
        <input type="password" v-model="pass1" class="form-control" placeholder="contraseña" required>
        <input type="password" v-model="pass2" class="form-control" placeholder="repita su contraseña" required>

        <vue-recaptcha class="g-recaptcha" ref="recaptcha" @verify="onVerify"
                       @expired="onExpired"
                       sitekey="6LfHNzYUAAAAAMQUo342eAkcYUeiLgB1vVqdqOk1"></vue-recaptcha>

        <button class="btn btn-lg btn-success btn-block btn-signin" type="submit">Registrarme</button>
      </form><!-- /form -->
    </div>

    <div v-show="!this.showForm">
      <span> {{success_msg}} <b>{{my_email}}</b></span>
    </div>


    <router-link to="login">ir al Login</router-link>
  </div><!-- /card-container -->


</template>


<script>
  import * as helpers from '../../assets/scripts/restHelper.js'
  import VueRecaptcha from 'vue-recaptcha'
  import _ from 'lodash'

  export default {
    name: 'signup',
    components: {VueRecaptcha},
    data () {
      return {
        title: 'Registrate',
        success_msg: 'Muchas gracias por registrarte. Un correo de verificación ha sido enviado a su email: ',
        my_email: '',
        showForm: true,
        data: {}
      }
    },
    created: function () {
      // `this` points to the vm instance
      console.log('a is: aaa')
    },
    methods: {
      doRegister: function () {
        let resource = this.$resource('http://127.0.0.1:3000/users/new') /// resource
        this.data.name = this.name
        this.data.lastname = this.lastname
        this.data.email = this.email
        this.data.password = this.pass1
        if (this.validateRecaptcha()) {
          resource.save(this.data).then(response => {
            // success callback
            if (response.body.success) {
              this.showForm = false
              this.my_email = this.email
              console.log(response.body)
            }
          }, response => {
            // error callback
            console.log(response)
            let msg = helpers.getErrorMessage(response)
            this.$notify(msg, 'error')
          })
        }
      },
      onVerify: function (response) {
        console.log('Verify: ' + response)
        this.data.recaptcha = response
      },
      onExpired: function () {
        console.log('Expired')
      },
      resetRecaptcha () {
        this.$refs.recaptcha.reset() // Direct call reset method
      },
      validateRecaptcha () {
        if (_.isEmpty(this.data.recaptcha)) {
          this.$notify('Debe aceptar la verificación', 'warning')
          return false
        } else {
          return true
        }
      }
    }
  }
</script>

<style scoped>
  .g-recaptcha {
    transform: scale(0.89);
    -webkit-transform: scale(0.89);
    transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
  }

</style>
