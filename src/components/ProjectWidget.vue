<template> 
    <q-card class="my-card" flat bordered>
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Красивая природа</div>
        <q-badge rounded color="red" label="виды рыб" />
        <div class="text-h6 q-mt-sm q-mb-xs">С нами даже в луже поймаешь</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>    
    </q-card> 
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    return {     
    }
  }
}
</script>

