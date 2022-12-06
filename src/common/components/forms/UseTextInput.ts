import ValueDefaults from "@/utilities/ValueDefaults";
import type IUseInput from "./IUseInput";
import useInput from "./UseInput";

export default function useTextInput(
  initialState: string = ValueDefaults.String
): IUseInput<string> {
  const input = useInput(initialState, (newState) => newState);

  return input;
}
