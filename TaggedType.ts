import {SameShape} from "./SameShape";

type State = {
  someState: string
}

type TaggedType<T> = State & { __taggedType: T }

const a: SameShape<TaggedType<string>, TaggedType<string>> = true
const b: SameShape<TaggedType<string>, TaggedType<string | undefined>> = false
const c: SameShape<TaggedType<string>, TaggedType<number>> = false
