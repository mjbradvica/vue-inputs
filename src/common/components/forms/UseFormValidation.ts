import { type Ref, computed } from "vue";

export default function useFormValidation(inputs: Array<Ref<boolean>>): Ref<boolean> {
  return computed(() => inputs.some((input) => !input.value));
}
