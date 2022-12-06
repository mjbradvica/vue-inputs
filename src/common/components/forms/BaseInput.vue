<template>
  <div class="field">
    <label class="label" :for="inputId">{{ label }}</label>
    <div class="control">
      <input
        :id="inputId"
        class="input"
        :class="inputStyling"
        :required="required"
        :value="inputHook.state"
        :type="type"
        :minlength="minlength"
        :min="calculateMin"
        :pattern="pattern"
        :placeholder="placeholder"
        @input="handleUpdateInput"
        @focus="handleUpdateInput"
      />
    </div>
    <p class="help is-danger" :class="helpTextStyling">
      {{ inputHook.valid ? "success" : validationMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import useId from "@/common/hooks/UseId";
import useState from "@/common/hooks/UseState";
import ValueDefaults from "@/utilities/ValueDefaults";
import { computed, reactive } from "vue";
import type IUseInput from "./IUseInput";

export interface BaseInputProperties {
  input: IUseInput<string | number>;
  type: string;
  label: string;
  required: boolean;
  minlength?: number;
  min?: number;
  minDate?: Date;
  pattern?: string;
  placeholder?: string;
}

const properties = defineProps<BaseInputProperties>();

const inputHook = reactive(properties.input);

const inputId = useId();

const [validationMessage, setValidationMessage] = useState<string>("default");
const [dirty, setDirty] = useState<boolean>(ValueDefaults.Boolean);

const handleUpdateInput = (event: Event): void => {
  setDirty(true);
  const inputValue = event.target as HTMLInputElement;

  inputHook.setState(inputValue.value);
  inputHook.setValid(inputValue.validity.valid);
  setValidationMessage(inputValue.validationMessage);
};

const inputStyling = computed(() => {
  if (!dirty.value) {
    return ValueDefaults.String;
  } else if (inputHook.valid) {
    return "is-success";
  }
  return "is-danger";
});

const helpTextStyling = computed(() => {
  if (!dirty.value || inputHook.valid) {
    return "is-invisible";
  }
  return ValueDefaults.String;
});

const calculateMin = computed(() => {
  if (properties.min) {
    return properties.min.toString();
  } else if (properties.minDate) {
    return `${properties.minDate.getFullYear()}-${
      properties.minDate.getMonth() + 1
    }-${properties.minDate.getDate()}`;
  }
  return ValueDefaults.String;
});
</script>
