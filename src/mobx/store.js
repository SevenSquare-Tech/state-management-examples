import { observable, autorun } from "mobx";
let appStore = observable({
  _count: 0,

  get count() {
    return this._count;
  },

  increment() {
    this._count++;
  },

  decrement() {
    this._count--;
  },
});

autorun(() => {
  console.log("Count changed", appStore.count);
});

export default appStore;
