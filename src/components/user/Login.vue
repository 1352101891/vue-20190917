<template>
  <div class="rootview">
    <router-view/>
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler">
    </cube-tab-bar>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      selectedLabelDefault: 'Home',
      tabs: [{
        label: 'Home',
        icon: 'cubeic-home'
      }, {
        label: 'Like',
        icon: 'cubeic-like'
      }, {
        label: 'Vip',
        icon: 'cubeic-vip'
      }, {
        label: 'Me',
        icon: 'cubeic-person'
      }]
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
