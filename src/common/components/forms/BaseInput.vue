<template>
  <div class="field">
    <label class="label" :for="inputId">{{ label }}</label>
    <div class="control">
      <input
        :id="inputId"
        class="input"
        :class="inputStyling"
        :required="required"
        :value="state"
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
      {{ valid ? "success" : validationMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import useId from "@/common/hooks/UseId";
import useState from "@/common/hooks/UseState";
import ValueDefaults from "@/utilities/ValueDefaults";
import { computed } from "vue";

export interface BaseInputProperties {
  state: string | number;
  setState: (state: string) => void;
  valid: boolean;
  setValid: (valid: boolean) => void;
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

const inputId = useId();

const [validationMessage, setValidationMessage] = useState<string>("default");
const [dirty, setDirty] = useState<boolean>(ValueDefaults.Boolean);

const handleUpdateInput = (event: Event): void => {
  setDirty(true);
  const inputValue = event.target as HTMLInputElement;

  properties.setState(inputValue.value);
  properties.setValid(inputValue.validity.valid);
  setValidationMessage(inputValue.validationMessage);
};

const inputStyling = computed(() => {
  if (!dirty.value) {
    return ValueDefaults.String;
  } else if (properties.valid) {
    return "is-success";
  }
  return "is-danger";
});

const helpTextStyling = computed(() => {
  if (!dirty.value || properties.valid) {
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
