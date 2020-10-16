import {SameShape} from "./SameShape";

type State = {
  someState: string
}

type OptionalTaggedType<T> = State & { __taggedType?: T }

const a: SameShape<OptionalTaggedType<string>, OptionalTaggedType<string>> = true
const b: SameShape<OptionalTaggedType<string>, OptionalTaggedType<string | undefined>> = true
const c: SameShape<OptionalTaggedType<string | undefined>, OptionalTaggedType<string>> = true
const d: SameShape<OptionalTaggedType<string>, OptionalTaggedType<number>> = false

// const
type StringState = OptionalTaggedType<'MyString'>

const stringState: StringState = {
  someState: 'sss',
  // __taggedType: 'MyString'
}


