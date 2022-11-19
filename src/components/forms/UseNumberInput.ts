import ValueDefaults from "@/utilities/ValueDefaults";
import type IUseInput from "./IUseInput";
import useInput from "./UseInput";

export default function useNumberInput(
  initialState: number = ValueDefaults.Number
): IUseInput<number> {
  return useInput<number>(initialState, (value) => Number.parseInt(value));
}
