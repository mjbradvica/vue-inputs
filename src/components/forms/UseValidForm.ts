import useState from "@/hooks/UseState";
import ValueDefaults from "@/utilities/ValueDefaults";
import { computed, watch, type Ref } from "vue";
import type IValid from "./IValid";

export default function useValidForm(inputs: Array<IValid>): Ref<boolean> {
  return computed(() => inputs.some((input) => !input.valid.value));
}
