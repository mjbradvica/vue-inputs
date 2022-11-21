import ValueDefaults from "@/utilities/ValueDefaults";
import { ref, type Ref } from "vue";

export default function useInput<T>(
  initialState: T,
  mappingFunc: (inputValue: string) => T
): [Ref<T>, (newState: string) => void, Ref<boolean>, (newValid: boolean) => void] {
  const state = ref<T>(initialState) as Ref<T>;
  const valid = ref<boolean>(ValueDefaults.Boolean);

  const setState = (newState: string): void => {
    state.value = mappingFunc(newState);
  };

  const setValid = (newValid: boolean): void => {
    valid.value = newValid;
  };

  return [state, setState, valid, setValid];
}
