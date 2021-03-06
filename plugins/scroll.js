import Vue from 'vue'

Vue.directive('scroll', {
  inserted (el, binding) {
    const scroll = function (event) {
      if (binding.value(event, el)) {
        window.removeEventListener('scroll', scroll)
      }
    }

    window.addEventListener('scroll', scroll)
  }
})