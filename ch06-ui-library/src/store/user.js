import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '张三',
    age: 18
  }),
  actions: {
    setName(name) {
      this.name = name
    },
    grow() {
      this.age++
    }
  },
  persist: {
    pick: ['age']
  }
})
