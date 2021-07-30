<template>
  <header ref="header" v-scroll="handleScroll" >
    <img class="logo" src="@/assets/Header/logo.svg" alt="logo" />
    <img class="navigation" src="@/assets/Header/navigation.svg" alt="points"/>
  </header>
</template>

<script>
export default {
  data () {
    return {
      heightForChangeBackground: 80
    }
  },

  mounted () {
    this.$refs.header.style.display = "none"
    this.checkScroll()
    this.$refs.header.style.display = "flex"
  },

  methods: {
    handleScroll (event, el) {
      if (window.scrollY > this.heightForChangeBackground) {
        el.style.backgroundColor = '#000'
      }
      if (window.scrollY <= this.heightForChangeBackground) {
        el.style.backgroundColor = ''
      }
    },

    checkScroll () {
      if (window.scrollY > this.heightForChangeBackground) {
        this.$refs.header.style.backgroundColor = '#000'
      }
      if (window.scrollY <= this.heightForChangeBackground) {
        this.$refs.header.style.backgroundColor = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles';

header {
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  box-shadow: 0 3px 15px $color-black-7, 0 5px 5px -3px $color-black-8;

  .logo {
    padding-left: 60px;
    cursor: pointer;
  }

  .navigation {
    padding-right: 60px;
    cursor: pointer;
  }
}
</style>