import { SKILLS } from '@/constants/skill'
import React from 'react'

export default function Skills() {
  return (
    <section id="skills">
			<div className='p-10 bg-black'>
				<div className='m-auto w-full bg-[#151515] rounded-lg p-12 text-center'>
					<h2 className='text-white text-4xl font-bold'>Skills</h2>
					<div className='flex flex-wrap justify-center space-x-5 py-6'>
						{SKILLS.map(skill =>
							<div key={skill.label} className='my-2 p-2 border rounded-xl hover:bg-black bg-[#151515]'>
								<p className='text-sm'>{skill.label}</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
  )
}
