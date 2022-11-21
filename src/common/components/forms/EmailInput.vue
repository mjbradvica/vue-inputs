<template>
  <BaseInput
    :state="state"
    :set-state="setState"
    :valid="valid"
    :set-valid="setValid"
    :required="true"
    :label="'Email:'"
    :type="'email'"
  />
</template>

<script setup lang="ts">
import BaseInput from "./BaseInput.vue";

export interface EmailInputProperties {
  state: string;
  setState: (state: string) => void;
  valid: boolean;
  setValid: (valid: boolean) => void;
}

defineProps<EmailInputProperties>();
</script>
