//#region Import
import ErrorBoundary from "@/components/common/error-boundary"
import { Color } from "@tiptap/extension-color"
import ListItem from "@tiptap/extension-list-item"
import TextAlign from "@tiptap/extension-text-align"
import TextStyle from "@tiptap/extension-text-style"
import Underline from "@tiptap/extension-underline"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { twMerge } from "tailwind-merge"

import { TipTapToolbar } from "./tiptap-toolbar"
//#endregion

interface TipTapEditorProps {
	invalid?: boolean

	onChange: (v: string) => void

	/**
	 * Default Value if available
	 */
	value?: string
}

export const TipTapEditor = ({ invalid, onChange, value }: TipTapEditorProps) => {
	const editor = useEditor({
		content: value || "",
		extensions,
		onUpdate: ({ editor }) => onChange(editor.getHTML() || ""),
	})

	if (!editor) return

	return (
		<div
			className={twMerge(
				"flex h-full w-full flex-col gap-4 overflow-hidden rounded-md p-2 ring-1 ring-inset ring-indigo-100 transition-basic focus-within:ring-2 focus-within:ring-indigo-500 md:row-span-2 [&>div:nth-of-type(2)>div]:h-full [&>div:nth-of-type(2)>div]:!outline-none [&>div:nth-of-type(2)]:flex-1",
				invalid && "ring-red-500"
			)}>
			<TipTapToolbar editor={editor} />

			<ErrorBoundary>
				<EditorContent className='h-full overflow-y-auto overflow-x-hidden p-2' editor={editor} />
			</ErrorBoundary>
		</div>
	)
}

const extensions = [
	Color.configure({ types: [TextStyle.name, ListItem.name] }),
	TextAlign.configure({ types: ["heading", "paragraph", ListItem.name] }),
	Underline,
	TextStyle,
	StarterKit.configure({
		blockquote: {
			HTMLAttributes: {
				style:
					"padding: 8px 24px; border-left: 4px solid rgba(99, 102, 241, 0.8); background-color: rgba(99, 102, 241, 0.05); width: max-content",
			},
		},
		bulletList: {
			HTMLAttributes: {
				style: "list-style-type: disc; padding-left: 24px",
			},
		},
		code: {
			HTMLAttributes: {
				style: "background-color: rgba(255, 74, 83, 0.1); color: #990505",
			},
		},
		codeBlock: {
			HTMLAttributes: {
				style:
					"background: #0D0D0D; color: #FFF; font-family: 'JetBrainsMono', monospace; padding: 0.75rem 1rem; border-radius: 0.5rem; font-size: 0.8rem",
			},
		},
		horizontalRule: {
			HTMLAttributes: {
				style: "border: none; border-top: 2px solid rgba(99, 102, 241, 0.2); margin: 2rem 0;",
			},
		},
		orderedList: {
			HTMLAttributes: {
				style: "list-style-type: upper-greek; padding-left: 24px",
			},
		},
	}),
]
