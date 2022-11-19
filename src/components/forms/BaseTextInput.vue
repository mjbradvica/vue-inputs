<template>
  <div>
    <label :for="inputId">{{ labelText }}</label>
    <div>
      <input
        :id="inputId"
        :type="inputType"
        :value="useInput.state.value"
        :required="required"
        @input="useInput.setState"
        @focus="handleFocus"
      />
    </div>
    <p class="text-red-500 text-sm">{{ useInput.errors.value }}</p>
  </div>
</template>

<script setup lang="ts">
import useId from "@/hooks/UseId";
import type IUseInput from "./IUseInput";
import useDirtyValidation from "./UseDirtyValidation";

export interface BaseTextInputProperties {
  labelText: string;
  inputType: string;
  useInput: IUseInput<string | number>;
  required: boolean;
}

const properties = defineProps<BaseTextInputProperties>();

const inputId = useId();

const [dirty, handleOnFocus] = useDirtyValidation(properties.useInput);

const handleFocus = (event: Event): void => {
  properties.useInput.setState(event);
  handleOnFocus();
};
</script>
