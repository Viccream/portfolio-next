/* eslint-disable @next/next/no-img-element */
import { CONTACTS } from '@/constants/contact'
import Link from 'next/link'
import React from 'react'

export default function Contact() {
	return (
		<div className="flex flex-row space-x-2">
			{CONTACTS
				.map(menu => (
					<Link
						href={menu.link}
						className={"cursor-pointer"}
						target={menu.newTab ? '_blank' : ''}
						key={menu.label}
					>
						<div className='border rounded-full p-3 bg-[#d9d9d91a] hover:bg-transparent'>
							<img
								src={menu.image} alt={menu.label}
							/>
						</div>
					</Link>
				))}
		</div>
	)
}
