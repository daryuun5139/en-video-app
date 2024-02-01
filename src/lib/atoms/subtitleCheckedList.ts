import { atom } from "recoil";

export const subtitleCheckedList = atom<number[]>({
  key: "subtitleCheckedList",
  default: [],
});
