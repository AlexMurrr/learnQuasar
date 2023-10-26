<template>
  <q-page padding>
    <h5>Регистрация</h5>

    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 300px">
        <q-input filled v-model="text" type="email" label="Your Email" />

        <q-input filled v-model="text" type="password" label="Password" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "regF",
  data() {
    return { text: "" };
  },
};
</script>
