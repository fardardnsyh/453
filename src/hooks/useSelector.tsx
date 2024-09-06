//#region Import
import type { RootState } from "@/lib/redux/root-reducer"

import { type TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux"
//#endregion

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export default useSelector
