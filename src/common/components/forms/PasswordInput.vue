<template>
  <BaseInput
    :input="input"
    :required="true"
    :label="'Password:'"
    :type="'password'"
    :minlength="passwordMinlength"
    :pattern="passwordRegex"
    :placeholder="'Password'"
  />
</template>

<script setup lang="ts">
import BaseInput from "./BaseInput.vue";
import type IUseInput from "./IUseInput";

export interface PasswordInputProperties {
  input: IUseInput<string>;
}

defineProps<PasswordInputProperties>();

const passwordMinlength = 8;
const passwordRegex = "/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/";
</script>
