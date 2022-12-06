import { type Ref, computed } from "vue";
import type IValid from "./IValid";

export default function useFormValidation(inputs: Array<IValid>): Ref<boolean> {
  return computed(() => inputs.some((input) => !input.valid.value));
}
