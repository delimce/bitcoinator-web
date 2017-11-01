<template>

  <div class="card card-container">
    <!-- <img class="profile-img-card" notify="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->
    <icon class="profile-img-card" name="check-circle-o" scale="5" label="Source Code"></icon>

    <div>
      {{confirm_msg}}
    </div>

    <router-link v-b-tooltip.hover.auto title="volver al login" to="login">{{login_msg}}</router-link>

  </div><!-- /card-container -->

</template>

<script>
  import * as helpers from '../../assets/scripts/restHelper.js'
  export default {
    name: 'reset',
    data () {
      return {
        showForm: true,
        confirm_msg: 'su registro fue validado exitosamente',
        login_msg: 'volver al login',
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
