<template>
  <div class="container">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-half">
        <form class="box">
          <EmailInput
            :state="firstName"
            :set-state="setFirst"
            :valid="firstValid"
            :set-valid="setFirstValid"
          />
          <button class="button" :disabled="isDisabled">Submit</button>
        </form>
        <p>Result: {{ firstName }} - {{ firstValid }}</p>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import EmailInput from "@/common/components/forms/EmailInput.vue";
import useInput from "../common/components/forms/UseInput";

const [firstName, setFirst, firstValid, setFirstValid] = useInput("");

const isDisabled = computed(() => !firstValid.value);
</script>
