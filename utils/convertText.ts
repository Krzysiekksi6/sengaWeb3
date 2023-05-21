export const transformText = (text: string): string => {
	if (text) {
		const transformedText = text.replace(/[\n\r\[\]]/g, '');
		return transformedText;
	}
	return '';
};

type DateProps = {
	day: string;
	month: string;
	year: string;
  };
  
  export const transformDate = ({ day, month, year }: DateProps): string | null => {
	if (day && month && year) {
	  return `${day}/${month}/${year}`;
	}
	return null;
  };
