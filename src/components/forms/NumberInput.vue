<template>
  <BaseTextInput
    :use-input="useInput"
    :label-text="label"
    :input-type="'number'"
    :required="true"
  />
</template>

<script setup lang="ts">
import BaseTextInput from "./BaseTextInput.vue";
import type IUseInput from "./IUseInput";

export interface NumberInputProperties {
  label: string;
  useInput: IUseInput<number>;
}

defineProps<NumberInputProperties>();
</script>
