<template>
  <div class="hello">
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
  name: 'HelloWorld',
  data () {
    return {
      selectedLabelDefault: 'Home',
      tabs: [{
        label: 'Home',
        icon: 'cubeic-home'
      }, {
        label: 'Classify',
        icon: 'cubeic-like'
      }, {
        label: 'Circle',
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
      this.$router.replace(label)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
