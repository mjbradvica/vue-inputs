<template>
  <div class="field">
    <label class="label" :for="inputId">{{ label }}</label>
    <div class="control">
      <input
        :id="inputId"
        class="input"
        :required="required"
        :value="state"
        :type="type"
        @input="handleUpdateInput"
        @focus="handleUpdateInput"
      />
    </div>
    <p class="help is-danger">{{ validationMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import useId from "@/common/hooks/UseId";
import useState from "@/common/hooks/UseState";
import ValueDefaults from "@/utilities/ValueDefaults";

export interface BaseInputProperties {
  state: string | number;
  setState: (state: string) => void;
  valid: boolean;
  setValid: (valid: boolean) => void;
  type: string;
  label: string;
  required: boolean;
}

const properties = defineProps<BaseInputProperties>();

const inputId = useId();

const [validationMessage, setValidationMessage] = useState<string>(ValueDefaults.String);
const [dirty, setDirty] = useState<boolean>(ValueDefaults.Boolean);

const handleUpdateInput = (event: Event): void => {
  setDirty(true);
  const inputValue = event.target as HTMLInputElement;

  properties.setState(inputValue.value);
  properties.setValid(inputValue.validity.valid);
  setValidationMessage(inputValue.validationMessage);
};
</script>
