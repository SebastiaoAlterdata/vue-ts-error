<script setup lang="ts">
  import { ref } from 'vue';

  const emit = defineEmits(['anyEmit']);
  const text = ref('text');
</script>
<template>
  <div>
    {{ text }}
  </div>
</template>
