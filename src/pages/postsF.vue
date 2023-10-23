<template>
  <q-page class="flex flex-center">
    <h4>posts</h4>
    <q-list bordered separator>
      <q-item clickable v-ripple v-for="post in posts" :key="post.id">
        <q-item-section>
          <q-item-label overline>{{ post.title }}</q-item-label>
          <q-item-label>{{ post.body }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: "postsF",
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.$axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((respons) => {
        this.posts = respons.data;
      });
  },
};
</script>
