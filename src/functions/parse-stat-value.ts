interface StatValue {
	num: number;
	suffix: string;
};

export function parseStatValue(value: string): StatValue {
	const num = Number.parseInt(value, 10);
	const suffix = value.replace(num.toString(), "");
	return { num, suffix };
}
