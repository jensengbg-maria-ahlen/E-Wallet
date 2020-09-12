<template>
  <article id="top">
    <h1>{{ headline }}</h1>
  </article>
</template>

<script>
export default {
  name: "Top",
  props: {
    cardInfo: Object,
  },
  computed: {
    headline() {
      return this.$route.meta.title;
    },
  },
};
</script>

<style scoped lang="scss" >
#top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;

  h1 {
    font-family: "Source Sans Pro", sans-serif;
    font-style: normal;
    font-weight: bolder;
    font-size: 35px;
    line-height: 100%;
    color: #222222;
    margin: 0;
  }
}
</style>