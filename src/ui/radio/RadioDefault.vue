<script setup lang="ts">
import type { IRadio } from '@/utils/types/radio'

withDefaults(defineProps<IRadio>(), {
  name: '',
  id: '',
  value: '',
  label: '',
  checked: false,
  disabled: false,
  group: false
})

const emits = defineEmits(['update:checkedValue'])

function handleClick(event: Event): void {
  const eventTarget = event.target as HTMLInputElement
  emits('update:checkedValue', eventTarget.value)
}
</script>

<template>
  <input
    class="radiobutton"
    type="radio"
    :name="name"
    :id="id"
    :value="value"
    :checked="checked"
    :disabled="disabled"
    @input="handleClick($event)"
  />
  <label :for="id">{{ label }}</label>
</template>

<style lang="scss" scoped>
.radiobutton {
  position: absolute;
  z-index: -1;
  opacity: 0;
  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  & + label::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 6px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    border-radius: 50%;
  }
  &:checked + label::before {
    border-color: $color-primary;
    background-color: $color-primary;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: $color-primary-hover;
  }
  &:not(:disabled):active + label::before {
    background-color: $color-primary;
    border: 1px solid #ecebed;
  }
  &:focus + label::before {
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.07);
  }
  &:focus:not(:checked) + label::before {
    border-color: $color-primary;
  }
  &:disabled + label::before {
    background-color: #e9ecef;
    border: 1px solid #ecebed;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
}
</style>
