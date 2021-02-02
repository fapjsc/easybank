const app = Vue.createApp({
  data() {
    return {
      toggleShow: false,
    };
  },

  methods: {
    toggle() {
      this.toggleShow = !this.toggleShow;
    },
  },
});

app.mount('#app');
