import type { Ref } from "vue";
import type IValid from "./IValid";

export default interface IUseInput<T> extends IValid {
  state: Ref<T>;
  setState: (newState: string) => void;
  setValid: (newValid: boolean) => void;
}
