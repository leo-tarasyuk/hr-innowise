<template>
  <div>
    <SearchForm />
    <Information />
    <Development />
    <Technology />
    <Projects />
    <JobSearching />
  </div>
</template>

<script>
import SearchForm from '../components/SearchForm/SearchForm.vue'
import Information from '../components/Information/Information.vue'
import Development from '../components/Development/Development.vue'
import Technology from '../components/Technology/Technology.vue'
import Projects from '../components/Projects/Projects.vue'
import JobSearching from '../components/JobSearching/JobSearching.vue'

export default {
  components: {
    SearchForm,
    Information,
    Development,
    Technology,
    Projects,
    JobSearching
  },

  layout: 'default'
}
</script>