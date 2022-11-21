<template>
  <BaseInput
    :state="state"
    :set-state="setState"
    :valid="valid"
    :set-valid="setValid"
    :required="true"
    :label="'Date:'"
    :type="'date'"
    :min-date="minDate"
  />
</template>

<script setup lang="ts">
import BaseInput from "./BaseInput.vue";

export interface DateInputProperties {
  state: string;
  setState: (state: string) => void;
  valid: boolean;
  setValid: (valid: boolean) => void;
}

defineProps<DateInputProperties>();

const minDate = new Date();
</script>
