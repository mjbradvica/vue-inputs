<template>
  <div class="container">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-half">
        <form class="box">
          <EmailInput
            :state="email"
            :set-state="setEmail"
            :valid="emailValid"
            :set-valid="setEmailValid"
          />
          <DateInput
            :state="date"
            :set-state="setDate"
            :valid="dateValid"
            :set-valid="setDateValid"
          />
          <PasswordInput
            :state="password"
            :set-state="setPassword"
            :valid="passwordValid"
            :set-valid="setPasswordValid"
          />
          <button class="button" type="submit" :disabled="isDisabled">Submit</button>
        </form>
        <p>Result: {{ email }} - {{ emailValid }}</p>
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

const [email, setEmail, emailValid, setEmailValid] = useTextInput();
const [date, setDate, dateValid, setDateValid] = useTextInput();
const [password, setPassword, passwordValid, setPasswordValid] = useTextInput();

const isDisabled = useFormValidation([emailValid, passwordValid]);
</script>
