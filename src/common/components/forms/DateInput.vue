<template>
  <BaseInput :input="input" :required="true" :label="'Date:'" :type="'date'" :min-date="minDate" />
</template>

<script setup lang="ts">
import BaseInput from "./BaseInput.vue";
import type IUseInput from "./IUseInput";

export interface DateInputProperties {
  input: IUseInput<string>;
}

defineProps<DateInputProperties>();

const minDate = new Date();
</script>
