import { useAtom } from "jotai";
import { createPersistedAtom } from "./persist";

//给个状态
interface CounterState {
  count: number;
}

//用persist创建state
const counterAtom = createPersistedAtom<CounterState>("counter", {
  count: 0
  //other fields
});

//create hook
export const useCounter = () => {
  //使用state和setState
  const [state, setState] = useAtom(counterAtom);

  return {
    count: state.count,
    increment: () => setState((v: CounterState) => ({ ...v, count: v.count + 1 })),
    decrement: () => setState((v: CounterState) => ({ ...v, count: v.count - 1 })),
    reset: () => setState((v: CounterState) => ({ ...v, count: 0 }))
  };
};
