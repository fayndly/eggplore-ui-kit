<script setup lang="ts">
import { ref } from 'vue'
import ProgressBar from '@/ui/progress/ProgressBar.vue'
import ProgressCircle from '@/ui/progress/ProgressCircle.vue'
import ButtonDefault from '@/ui/buttons/ButtonDefault.vue'

const percentBar = ref(40)
const percentCircle = ref(60)

function addPercentBar(): void {
  percentBar.value += 10
  if (percentBar.value > 100) {
    percentBar.value = 100
  }
}

function addPercentCircle(): void {
  percentCircle.value += 10
  if (percentCircle.value > 100) {
    percentCircle.value = 100
  }
}
</script>

<template>
  <h1 class="heading-1">Progress</h1>
  <h2 class="heading-2">Progress Bar</h2>
  <div class="line line_block">
    <ProgressBar maxWidth="400px" :percent="percentBar" color="danger" />
    <ButtonDefault label="Add 10%" @click="addPercentBar" />
  </div>
  <h2 class="heading-2">Progress Circle</h2>
  <div class="line line_block">
    <ProgressCircle :percent="percentCircle" color="warning" />
    <ButtonDefault label="Add 10%" @click="addPercentCircle" />
  </div>
</template>
