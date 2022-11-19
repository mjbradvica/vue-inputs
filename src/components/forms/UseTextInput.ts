import ValueDefaults from "@/utilities/ValueDefaults";
import type IUseInput from "./IUseInput";
import useInput from "./UseInput";

export default function useTextInput(
  initialState: string = ValueDefaults.String
): IUseInput<string> {
  return useInput<string>(initialState, (value) => value);
}
