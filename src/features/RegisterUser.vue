<template>
  <div class="container">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-half">
        <form class="box">
          <EmailInput :input="email" />
          <DateInput :input="date" />
          <PasswordInput :input="password" />
          <button class="button" type="submit" :disabled="isDisabled">Submit</button>
        </form>
        <p>Result: {{ email }} - {{ email.valid }}</p>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EmailInput from "@/common/components/forms/EmailInput.vue";
import PasswordInput from "@/common/components/forms/PasswordInput.vue";
import useTextInput from "@/common/components/forms/UseTextInput";
import useFormValidation from "@/common/components/forms/UseFormValidation";
import DateInput from "@/common/components/forms/DateInput.vue";

const email = useTextInput();
const date = useTextInput();
const password = useTextInput();

const isDisabled = useFormValidation([email, password]);
</script>
