<template>
  <form @submit="handleSubmit">
    <TextInput :label="'FirstName:'" :use-input="firstName" />
    <NumberInput :label="'Age:'" :use-input="age" />
    <div>
      <button
        class="border-2 rounded p-2 border-blue-500 hover:border-blue-300 disabled:border-red-200 disabled:bg-gray-50"
        :disabled="invalidForm"
      >
        Submit
      </button>
      <p>Disabled: {{ invalidForm }}</p>
    </div>
  </form>
</template>

<script setup lang="ts">
import NumberInput from "./forms/NumberInput.vue";
import TextInput from "./forms/TextInput.vue";
import useNumberInput from "./forms/UseNumberInput";
import useTextInput from "./forms/UseTextInput";
import useValidForm from "./forms/UseValidForm";

const firstName = useTextInput();
const age = useNumberInput();
const invalidForm = useValidForm([firstName, age]);

const handleSubmit = (event: Event): void => {
  console.log("Submitting...", firstName.state.value, age.state.value);

  event.preventDefault();
};
</script>
