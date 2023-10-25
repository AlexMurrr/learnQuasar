<template>
  <q-page class="flex flex-center">
    <h4>posts</h4>
    <q-list bordered separator>
      <q-item
        clickable
        v-ripple
        v-for="post in posts"
        :key="post.id"
        @click="basic = true"
      >
        <q-item-section>
          <q-item-label overline>{{ post.title }}</q-item-label>
          <q-item-label>{{ post.body }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <q-dialog v-model="basic" transition-show="rotate" transition-hide="rotate">
      <q-card>
        <q-card-section>
          <div class="text-h6">Terms of Agreement</div>
        </q-card-section>

        <q-separator class="q-mb-md" />

        <q-card-section class="q-pt-none">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
            perferendis totam, ea at omnis vel numquam exercitationem aut, natus
            minima, porro labore.
          </p>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: "postsF",
  data() {
    return {
      posts: [],
      basic: false,
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
