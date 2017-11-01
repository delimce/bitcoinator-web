<template>

  <div class="card toright card-container">
    <!-- <img class="profile-img-card" notify="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->
    <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
    <div v-show="this.showForm">
      <form v-on:submit.prevent="sendLinkto()" class="form-signin">
                <span class="reset-info">
                {{reset_msg}}
                </span>
        <input v-model="email" type="email" class="form-control" placeholder="email" required autofocus>
        <button class="btn btn-lg btn-success btn-block btn-signin" type="submit">{{button_msg}}</button>
      </form><!-- /form -->
    </div>

    <div v-show="!this.showForm" style="text-align: left; ">
      {{msg_success}} <b>{{this.email}}</b>
    </div>

    <router-link v-b-tooltip.hover.auto title="volver al login" to="login">{{comeback}}</router-link>

  </div><!-- /card-container -->

</template>

<script>
  import * as helpers from '../../assets/scripts/restHelper.js'
  export default {
    name: 'reset',
    data () {
      return {
        showForm: true,
        reset_msg: 'Ingrese su email para recibir un link y reiniciar su contraseña',
        button_msg: 'Enviar reinicio de contraseña',
        comeback: 'regresar',
        title: 'Reiniciar la clave',
        error_notfound: 'El email ingresado no existe, revisa e intentalo de nuevo',
        msg_success: 'Se ha enviado un correo de reinicio de contraseña a tu correo: ',
        data: {
          email: ''
        }
      }
    },
    methods: {
      sendLinkto: function () {
        let resource = this.$resource('http://127.0.0.1:3000/users/resetPassword') /// resource
        console.log(this.email)
        this.data.email = this.email
        resource.update(this.data).then(response => {
          // success callback
          if (response.body.success) {
            this.showForm = false
            console.log(response.body)
          }
        }, response => {
          // error callback
          console.log(response)
          let msg = helpers.getErrorMessage(response)
          this.$notify(msg, 'error')
        })
      }
    }
  }
</script>


<style scoped>

  .reset-info {
    float: right;
    font-size: 13px;
    text-align: left;
    padding: 22px;
  }

</style>
