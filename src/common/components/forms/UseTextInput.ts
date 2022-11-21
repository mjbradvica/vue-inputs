import ValueDefaults from "@/utilities/ValueDefaults";
import type { Ref } from "vue";
import useInput from "./UseInput";

export default function useTextInput(
  initialState: string = ValueDefaults.String
): [Ref<string>, (newState: string) => void, Ref<boolean>, (newValid: boolean) => void] {
  const [state, setState, valid, setValid] = useInput(initialState, (newState) => newState);

  return [state, setState, valid, setValid];
}
