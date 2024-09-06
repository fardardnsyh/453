/**
 * Converts a file to a Base64 string.
 *
 * @param {File} file - The file to convert.
 * @returns {Promise<string>} A promise that resolves to a Base64 string.
 */
const convertToBase64 = (file: File): Promise<string> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()

		reader.readAsDataURL(file)
		reader.onload = () => resolve(reader.result as string)
		reader.onerror = (error) => reject(error)
	})
}

export default convertToBase64
