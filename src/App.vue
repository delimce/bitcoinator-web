<template>
  <div id="app" class="container-fluid">

    <router-view v-title="hola"></router-view>

    <section id="footer-info">
      <div id="imginthefooter">
        <icon name="thumbs-up"></icon>
        {{footer_msg}}
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        showForm: true,
        footer_msg: 'Todos los derechos reservados, 2017'
      }
    }
  }
</script>

<style>

  body {
    background: url(./assets/img/bg/01.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #footer-info {
    position:absolute;
    color: #F7F7F7;
    font-size: medium;
    padding-top: 44px;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100px;
    overflow:hidden;
    margin: auto;
    z-index: -1000;
  }


</style>
