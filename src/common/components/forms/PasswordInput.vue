<template>
  <BaseInput
    :state="state"
    :set-state="setState"
    :valid="valid"
    :set-valid="setValid"
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

export interface PasswordInputProperties {
  state: string;
  setState: (state: string) => void;
  valid: boolean;
  setValid: (valid: boolean) => void;
}

defineProps<PasswordInputProperties>();

const passwordMinlength = 8;
const passwordRegex = "/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/";
</script>
