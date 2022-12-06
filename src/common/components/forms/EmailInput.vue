<template>
  <BaseInput
    :input="input"
    :required="true"
    :label="'Email:'"
    :type="'email'"
    :placeholder="'Email'"
  />
</template>

<script setup lang="ts">
import BaseInput from "./BaseInput.vue";
import type IUseInput from "./IUseInput";

export interface EmailInputProperties {
  input: IUseInput<string>;
}

defineProps<EmailInputProperties>();
</script>
