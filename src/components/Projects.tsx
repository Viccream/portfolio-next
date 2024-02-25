/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { PROJECTS } from '@/constants/project';

export default function Projects() {
	return (
		<section id="projects">
			<div className='p-10 bg-black'>
				<div className='m-auto w-full text-center'>
					<h2 className='text-4xl font-bold'>Projects</h2>
					<p className='p-6'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
					<div className='pt-4'>
						<Swiper
							spaceBetween={50}
							slidesPerView={3}
						>
							{PROJECTS.map(project =>
								<SwiperSlide key={project.label}>
									<div className='bg-white flex flex-col justify-center items-center h-48'>
										<p className='text-black'>{project.label}</p>
										<p className='text-black'>{project.desc}</p>
									</div>
								</SwiperSlide>)}
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	)
}
