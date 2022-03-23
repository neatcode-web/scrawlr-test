<template>
  <div class="p-9">
    <h1 class="text-3xl font-bold">Scrawlr Test Project-Thomas Feng</h1>
  </div>
  <div class="mx-4 p-3 flex-row flex justify-start items-center">
    <div class="p-3 rounded-lg border-2 border-primary-100 flex flex-row gap-3 mr-3">
      <Upvote
        v-for="index in numOfUpvote"
        :key="index"
      />
    </div>
    <button
      class="bg-primary-100 text-primary-700 p-2 rounded-lg"
      @click="onAddUpvote"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5C11.4477 5 11 5.45098 11 5.99078V11H5.99078C5.44359 11 5 11.4439 5 12C5 12.5523 5.45098 13 5.99078 13H11V18.0092C11 18.5564 11.4439 19 12 19C12.5523 19 13 18.549 13 18.0092V13H18.0092C18.5564 13 19 12.5561 19 12C19 11.4477 18.549 11 18.0092 11H13V5.99078C13 5.44359 12.5561 5 12 5Z"
          class="fill-primary-700"
        />
      </svg>
    </button>
    <h1></h1>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Upvote from './components/Upvote.vue'
export default {
  name: 'App',
  components: {
    Upvote
  },
  computed: {
    ...mapState({
      numOfUpvote : state => state.numOfUpvote
    })
  },
  methods: {
    ...mapMutations({
      commitAddUpvote: 'ADD_UPVOTE'
    }),
    onAddUpvote(){
      this.commitAddUpvote()
    },
  }
}
</script>
