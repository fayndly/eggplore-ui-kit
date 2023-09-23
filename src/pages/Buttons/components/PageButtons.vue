<script setup lang="ts">
import ButtonDefault from '@/ui/buttons/ButtonDefault.vue'

const eventForButton = () => {
  alert('You clicked danger button')
}
</script>

<template>
  <h1 class="heading-1">Buttons</h1>
  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <ButtonDefault label="Primary" color="primary" disabled />
    <ButtonDefault label="Secondary" color="second" disabled />
    <ButtonDefault label="Success" color="success" disabled />
    <ButtonDefault label="Info" color="info" disabled />
    <ButtonDefault label="Warning" color="warning" disabled />
    <ButtonDefault label="Danger" color="danger" disabled />
  </div>
  <h2 class="heading-2">Colors</h2>
  <div class="line">
    <ButtonDefault label="Primary" color="primary" />
    <ButtonDefault label="Secondary" color="second" />
    <ButtonDefault label="Success" color="success" />
    <ButtonDefault label="Info" color="info" />
    <ButtonDefault label="Warning" color="warning" />
    <ButtonDefault label="Danger" color="danger" />
  </div>
  <h2 class="heading-2">Rounded</h2>
  <div class="line">
    <ButtonDefault label="Primary" color="primary" rounded />
    <ButtonDefault label="Secondary" color="second" rounded />
    <ButtonDefault label="Success" color="success" rounded />
    <ButtonDefault label="Info" color="info" rounded />
    <ButtonDefault label="Warning" color="warning" rounded />
    <ButtonDefault label="Danger" color="danger" rounded />
  </div>
  <h2 class="heading-2">Outlined</h2>
  <div class="line">
    <ButtonDefault label="Primary" color="primary" outlined />
    <ButtonDefault label="Secondary" color="second" outlined />
    <ButtonDefault label="Success" color="success" outlined />
    <ButtonDefault label="Info" color="info" outlined />
    <ButtonDefault label="Warning" color="warning" outlined />
    <ButtonDefault label="Danger" color="danger" outlined />
  </div>
  <h2 class="heading-2">Icon</h2>
  <div class="line">
    <ButtonDefault color="primary" icon="heart" outlined />
    <ButtonDefault color="second" icon="hand" />
    <ButtonDefault color="success" icon="address-book" outlined />
    <ButtonDefault color="info" icon="credit-card" />
    <ButtonDefault color="warning" icon="lemon" outlined />
    <ButtonDefault color="danger" icon="hourglass" />
  </div>
  <h2 class="heading-2">Size</h2>
  <div class="line">
    <ButtonDefault label="Normal" color="primary" />
    <ButtonDefault label="Large" color="primary" size="large" />
  </div>
  <h2 class="heading-2">Event</h2>
  <div class="line">
    <ButtonDefault label="@click" color="danger" @click="eventForButton" />
  </div>
</template>
