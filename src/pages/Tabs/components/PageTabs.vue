<script setup lang="ts">
import { ref } from 'vue'
import TabsDefault from '@/ui/tabs/TabsDefault.vue'

const tabs = [
  { name: 'About', label: 'О проекте' },
  { name: 'Vue', label: 'Про Vue' },
  { name: 'React', label: 'Про React' }
]
const selectedTab = ref('Vue')

const changeTab = (tabName: string) => {
  selectedTab.value = tabName
}
</script>

<template>
  <h1 class="heading-1">Tabs</h1>
  <TabsDefault :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
    <div v-if="selectedTab === 'About'">Lorem ipsum dolor sit amet.</div>
    <div v-if="selectedTab === 'Vue'">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, id.
    </div>
    <div v-if="selectedTab === 'React'">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, atque. Laborum iusto odit minus
      incidunt.
    </div>
  </TabsDefault>
</template>
