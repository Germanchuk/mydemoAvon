export const cutTitle = (title, count = 10) => {

	let sliced = title.slice(0, count);
	const arr = title.split('.');
	const format = arr.pop();

	if ((sliced.length + format.length) < title.length) {
		sliced += ` ... .${format}`;
		return sliced;
	}
	return title;
}