//#region Import
import type { Editor } from "@tiptap/react"

import Toolbar from "@/components/ui/toolbar"
import BxCodeBlock from "~icons/bx/code-block"
import FaSolidList from "~icons/fa-solid/list"
import FaSolidListOl from "~icons/fa-solid/list-ol"
import LucideRedo from "~icons/lucide/redo"
import LucideUndo from "~icons/lucide/undo"
import RadixIconsCode from "~icons/radix-icons/code"
import RadixIconsFontBold from "~icons/radix-icons/font-bold"
import RadixIconsFontItalic from "~icons/radix-icons/font-italic"
import RadixIconsQuote from "~icons/radix-icons/quote"
import RadixIconsRulerHorizontal from "~icons/radix-icons/ruler-horizontal"
import RadixIconsStrikethrough from "~icons/radix-icons/strikethrough"
import RadixIconsTextAlignCenter from "~icons/radix-icons/text-align-center"
import RadixIconsTextAlignJustify from "~icons/radix-icons/text-align-justify"
import RadixIconsTextAlignLeft from "~icons/radix-icons/text-align-left"
import RadixIconsTextAlignRight from "~icons/radix-icons/text-align-right"
import RadixIconsUnderline from "~icons/radix-icons/underline"
import { useMemo } from "react"
//#endregion

export const TipTapToolbar = ({ editor }: { editor: Editor }) => {
	const activeAlignment = useMemo(
		() =>
			editor.isActive({ textAlign: "right" })
				? "right"
				: editor.isActive({ textAlign: "center" })
					? "center"
					: editor.isActive({ textAlign: "justify" })
						? "justify"
						: "left",
		[editor]
	)

	// editor.commands.clearContent()

	return (
		<Toolbar aria-label='Formatting options' className='p-1 md:p-2'>
			<Toolbar.Group aria-label='Text formatting' type='multiple'>
				<Toolbar.Button
					active={editor.isActive("bold")}
					aria-label='Bold'
					disabled={!editor.can().chain().focus().toggleBold().run()}
					onClick={() => editor.chain().focus().toggleBold().run()}
					title='Bold'>
					<RadixIconsFontBold />
				</Toolbar.Button>
				<Toolbar.Button
					active={editor.isActive("underline")}
					aria-label='Italic'
					disabled={!editor.can().chain().focus().toggleUnderline().run()}
					onClick={() => editor.chain().focus().toggleUnderline().run()}
					title='Italic'>
					<RadixIconsUnderline />
				</Toolbar.Button>
				<Toolbar.Button
					active={editor.isActive("italic")}
					aria-label='Italic'
					disabled={!editor.can().chain().focus().toggleItalic().run()}
					onClick={() => editor.chain().focus().toggleItalic().run()}
					title='Italic'>
					<RadixIconsFontItalic />
				</Toolbar.Button>
				<Toolbar.Button
					active={editor.isActive("strike")}
					aria-label='Strike through'
					disabled={!editor.can().chain().focus().toggleStrike().run()}
					onClick={() => editor.chain().focus().toggleStrike().run()}
					title='Strike through'>
					<RadixIconsStrikethrough />
				</Toolbar.Button>
				<Toolbar.Button
					active={editor.isActive("code")}
					aria-label='Code'
					disabled={!editor.can().chain().focus().toggleCode().run()}
					onClick={() => editor.chain().focus().toggleCode().run()}
					title='Code'>
					<RadixIconsCode />
				</Toolbar.Button>
				<Toolbar.Button
					active={editor.isActive("bulletList")}
					aria-label='Bullet List'
					onClick={() => editor.chain().focus().toggleBulletList().run()}
					title='Bullet List'>
					<FaSolidList />
				</Toolbar.Button>
				<Toolbar.Button
					active={editor.isActive("orderedList")}
					aria-label='Ordered List'
					onClick={() => editor.chain().focus().toggleOrderedList().run()}
					title='Ordered List'>
					<FaSolidListOl />
				</Toolbar.Button>
				<Toolbar.Button
					active={editor.isActive("blockquote")}
					aria-label='Block quote'
					onClick={() => editor.chain().focus().toggleBlockquote().run()}
					title='Block quote'>
					<RadixIconsQuote />
				</Toolbar.Button>
				<Toolbar.Button
					active={editor.isActive("codeBlock")}
					aria-label='Code Block'
					onClick={() => editor.chain().focus().toggleCodeBlock().run()}
					title='Code Block'>
					<BxCodeBlock />
				</Toolbar.Button>
				<Toolbar.Button
					aria-label='Horizontal rule'
					disabled={!editor.getHTML()?.length || editor.getHTML() === "<p></p>"}
					onClick={() => editor.chain().focus().setHorizontalRule().run()}
					title='Horizontal rule'>
					<RadixIconsRulerHorizontal />
				</Toolbar.Button>
			</Toolbar.Group>

			<Toolbar.Separator className='mx-[10px] w-[1px] bg-indigo-200' />

			{/* ALIGNMENT  */}
			<Toolbar.Group
				aria-label='Text alignment'
				defaultValue='left'
				onValueChange={(v = "left") => editor.chain().focus().setTextAlign(v).run()}
				type='single'
				value={activeAlignment}>
				<Toolbar.Item aria-label='Left aligned' title='Left aligned' value='left'>
					<RadixIconsTextAlignLeft />
				</Toolbar.Item>
				<Toolbar.Item aria-label='Center aligned' title='Center aligned' value='center'>
					<RadixIconsTextAlignCenter />
				</Toolbar.Item>
				<Toolbar.Item aria-label='Right aligned' title='Right aligned' value='right'>
					<RadixIconsTextAlignRight />
				</Toolbar.Item>
				<Toolbar.Item aria-label='Justify aligned' title='Justify aligned' value='justify'>
					<RadixIconsTextAlignJustify />
				</Toolbar.Item>
			</Toolbar.Group>

			<Toolbar.Separator className='mx-[10px] w-[1px] bg-indigo-200' />

			{/* UNDO / REDO  */}
			<Toolbar.Group aria-label='Text Correction actions' type='multiple'>
				<Toolbar.Button
					aria-label='Undo'
					disabled={!editor.can().chain().focus().undo().run()}
					onClick={() => editor.chain().focus().undo().run()}
					title='Undo'>
					<LucideUndo />
				</Toolbar.Button>
				<Toolbar.Button
					aria-label='Redo'
					disabled={!editor.can().chain().focus().redo().run()}
					onClick={() => editor.chain().focus().redo().run()}
					title='Redo'>
					<LucideRedo />
				</Toolbar.Button>
			</Toolbar.Group>
		</Toolbar>
	)
}
