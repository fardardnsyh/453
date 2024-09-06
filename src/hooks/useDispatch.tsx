//#region Import
import type { AppDispatch } from "@/lib/redux/store"

import { useDispatch as useReduxDispatch } from "react-redux"
//#endregion

const useDispatch: () => AppDispatch = useReduxDispatch

export default useDispatch
