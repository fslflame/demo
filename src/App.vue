<script setup lang="tsx">
import {ref, onMounted} from 'vue'
import child from './components/child.tsx'
const childRef = ref<InstanceType<typeof FClipImage> | null>(null)
onMounted(() => {
  childRef.value.getClipDataURL // No ts type
})
</script>

<template>
  <div><child ref="childRef" />{{ childRef?.getClipDataURL }}</div>
</template>

<style scoped></style>
