<template>
    <div>

        <h1>
            My Great Business App
        </h1>

        <h3>Provided by Vue.js</h3>


        <a href="http://localhost:4202/">Back to second screen ...</a>

        <br>

        <img src="./assets/logo.png">
    </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
