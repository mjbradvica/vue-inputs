import useState from "@/hooks/UseState";
import ValueDefaults from "@/utilities/ValueDefaults";
import { watch, type Ref } from "vue";
import type IUseInput from "./IUseInput";

export default function useDirtyValidation<T>(
  input: IUseInput<T>
): [dirtyValid: Ref<boolean>, handleOnFocus: () => void] {
  const [dirty, setDirty] = useState<boolean>(ValueDefaults.Boolean);
  const [dirtyValid, setDirtyValid] = useState<boolean>(true);

  const handleOnFocus = (): void => {
    setDirty(true);
    setDirtyValid(input.valid.value);
  };

  watch(dirty, () => setDirtyValid(input.valid.value));

  return [dirtyValid, handleOnFocus];
}
