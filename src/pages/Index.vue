<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md relative-position" style="width: 100%; height: 80vh">
      <q-btn
        v-morph:btn:mygroup:300.resize="morphGroupModel"
        class="absolute-bottom-left q-ma-md"
        fab
        color="primary"
        size="lg"
        icon="add"
        @click="nextMorph"
      />

      <q-card
        v-morph:card:mygroup:500.tween="morphGroupModel"
        class="absolute-bottom-left q-ma-md bg-primary text-white"
        style="width: 300px; border-bottom-left-radius: 2em"
      >
        <q-card-section class="text-h6">
          Inspire yourself
        </q-card-section>

        <q-card-section class="q-py-xl text-subtitle2">
          <p>{{ text }}</p>
          <small>{{ author }}</small>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn unelevated label="Inspire" @click="inspire" color="positive" />
          <q-btn flat label="Close" @click="nextMorph" />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
const nextMorphStep = {
  btn: 'card',
  card: 'btn'
}
export default {
  name: 'PageIndex',
  data () {
    return {
      morphGroupModel: 'btn',
      text: '',
      author: ''
    }
  },

  methods: {
    nextMorph () {
      this.morphGroupModel = nextMorphStep[this.morphGroupModel]
    },
    inspire () {
      this.request('/')
    },
    ping () {
      this.request('/ping')
    },
    async request (url) {
      try {
        const { data: { data: { text, author } } } = await this.$axios.get(url)
        this.text = text
        this.author = author
      } catch (e) {
        this.text = ''
        this.author = ''
      }
    }
  }
}
</script>
