"use client"

import { useInView } from "framer-motion"
import { useState, useEffect, useRef } from "react"

interface CountUpProps {
	target: number;
	suffix?: string;
	duration?: number;
}

export function CountUp({ target, suffix = "", duration = 1.5 }: CountUpProps) {
	const [count, setCount] = useState(0);
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (!isInView) return;

		const frameDuration = 1000 / 60; // ~60 fps
		const totalFrames = Math.round(duration * 60);
		let frame = 0;

		const counter = setInterval(() => {
			frame++;
			const progress = frame / totalFrames;
			const currentCount = Math.round(target * progress);
			setCount(currentCount);
			if (frame === totalFrames) {
				clearInterval(counter);
			}
		}, frameDuration);

		return () => clearInterval(counter);
	}, [isInView, target, duration]);

	return (
		<span ref={ref}>
			{count}
			{suffix}
		</span>
	);
}
