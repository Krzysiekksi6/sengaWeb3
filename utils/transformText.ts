export const transformText = (text: string): string => {
	if (text) {
		const transformedText = text.replace(/[\n\r\[\]]/g, '');
		return transformedText;
	}
	return '';
};
