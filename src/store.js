import { kea } from 'kea'

const logic = kea({
  actions: {
    increment: true
  },
  defaults: {
    counter: 0
  },
  reducers: {
    counter: {
      increment: (state) => state + 1
    }
  }
})

export default logic
