//#region Import
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
//#endregion

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export default cn
