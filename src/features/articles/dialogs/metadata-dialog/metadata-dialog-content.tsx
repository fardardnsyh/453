interface MetadataDialogContentProps {
	/**
	 * Callback function used to close the dialog
	 */
	onDialogClose: () => void
}

const MetadataDialogContent = ({ onDialogClose }: MetadataDialogContentProps) => {
	return (
		<div>
			<div>MetadataDialogContent</div>

			<button onClick={onDialogClose}>Close</button>
		</div>
	)
}

export default MetadataDialogContent
