<template>
  <BaseTextInput :use-input="useInput" :label-text="label" :input-type="'text'" :required="true" />
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type IUseInput from "./IUseInput";
import BaseTextInput from "./BaseTextInput.vue";

export interface TextInputProperties {
  label: string;
  useInput: IUseInput<string>;
}

defineProps<TextInputProperties>();
</script>
