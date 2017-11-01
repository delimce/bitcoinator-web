<template>

  <div class="card toright card-container">
    <!-- <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->
    <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
    <form v-on:submit.prevent="doLogin()" class="form-signin">
      <div style="text-align:right">
        <span class="minText">{{not_account_msg}} </span>
        <router-link v-b-tooltip.hover.auto title="crear cuenta" to="signup">{{register_msg}}</router-link>
      </div>

      <span id="reauth-email" class="reauth-email"></span>
      <input type="email" v-model="email" class="form-control" placeholder="Usuario" required autofocus>
      <router-link to="reset" class="forgot-password">{{forgot_msg}}</router-link>
      <input type="password" v-model="password" class="form-control" placeholder="Contraseña" required>
      <button class="btn btn-lg btn-success btn-block btn-signin" type="submit">Iniciar Sesión</button>
    </form><!-- /form -->


  </div><!-- /card-container -->

</template>


<script>
  import * as helpers from '../../assets/scripts/restHelper.js'

  export default {
    name: 'login',
    data () {
      return {
        msg1: 'ingrese sus datos para entrar',
        not_account_msg: '¿No tienes una cuenta?,',
        forgot_msg: '¿Olvidaste tu contraseña?',
        register_msg: 'Registrate Aquí',
        title: 'This will be the title',
        data: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      doLogin: function () {
        let resource = this.$resource('http://127.0.0.1:3000/users/login') /// resource
        this.data.email = this.email
        this.data.password = this.password
        resource.save(this.data).then(response => {
          // success callback
          if (response.body.success) {
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

  #login-box {
    float: right;
    width: 38%;
    background-color: #fff;
    opacity: 0.7;
    border-radius: 10px;
  }

  .forgot-password {
    font-size: 11px;
    float: right;
  }

  .forgot-password:hover,
  .forgot-password:active,
  .forgot-password:focus {
    color: rgb(12, 97, 33);
  }


</style>
