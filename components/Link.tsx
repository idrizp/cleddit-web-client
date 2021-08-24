import React from 'react'
import Link from "next/link";

export interface CledditLinkProps extends React.PropsWithChildren<{}> {
	href: string;
	className?: string;
}

export default function CledditLink(props: CledditLinkProps) {
	return (
		<Link href={props.href}>
			<a className={`text-blue-500 font-bold font-main underline ${props.className || ""}`}>
				{props.children}
			</a>
		</Link>
	)
}
