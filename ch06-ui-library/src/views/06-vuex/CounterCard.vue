<template>
  <div>
    <h3>计数器卡片</h3>
    <p>{{ count }} ×2 = {{ double }}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../../store/counter'
export default {
  name:'CounterCard',
  computed:{
    ...mapState(useCounterStore,['count','double'])
  },
  methods:{
    ...mapActions(useCounterStore,['increment','decrement'])
  }
}
</script>
