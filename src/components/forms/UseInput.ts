import useState from "@/hooks/UseState";
import ValueDefaults from "@/utilities/ValueDefaults";
import type IUseInput from "./IUseInput";

export default function useInput<T>(
  initialState: T,
  mappingFunc: (eventReturn: string) => T
): IUseInput<T> {
  const [state, setState] = useState<T>(initialState);
  const [valid, setValid] = useState<boolean>(ValueDefaults.Boolean);
  const [errors, setErrors] = useState<string>(ValueDefaults.String);

  const updateState = (event: Event): void => {
    const updatedValue = event.target as HTMLInputElement;

    setState(mappingFunc(updatedValue.value));
    setValid(updatedValue.validity.valid);
    setErrors(updatedValue.validationMessage);
  };

  return {
    state,
    setState: updateState,
    valid,
    errors,
  };
}
