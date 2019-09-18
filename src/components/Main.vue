<template>
  <div class="rootview">
    <div class="top-wrapper">
      <router-view/>
    </div>
    <div class="bottom-tab-wrapper">
      <cube-tab-bar
        v-model="selectedLabelDefault"
        :data="tabs"
        @click="clickHandler"
        @change="changeHandler">
      </cube-tab-bar>
    </div>
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
  beforeCreate: function () {
    console.log('before create')
  },
  created: function () {
    this.$router.replace(this.selectedLabelDefault)
    console.log('created')
  },
  beforeMount: function () {
    console.log(this.$el)
    console.log('before mount')
  },
  mounted: function () {
    console.log(this.$el)
    console.log('mounted')
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
  .rootview{
    position: relative;
    height: 100%;
    width: 100%;
  }
  .top-wrapper{
    width: 100%;
    height: 92%;
  }
  .bottom-tab-wrapper{
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 8%;
    position: fixed;
    margin-bottom: 0;
    justify-content: center;
    z-index: 1;
  }

</style>
