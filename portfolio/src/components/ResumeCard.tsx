import type { ExperienceType } from '@/types'

type Props = {
  item: ExperienceType
}

const ResumeCard = ({ item }: Props) => {
  return (
    <div className="relative group">
      <div className='absolute -left-7.5 top-2 size-3 bg-muted-foreground
      group-hover:bg-primary rounded-full transition duration-300'></div>
      <span className='text-neutral-400 lining-nums
        group-hover:text-primary transition duration-300'>
        {item.year}
      </span>
      <h3 className='text-lg font-semibold mt-1'>{item.title}</h3>
      <p className='text-sm text-neutral-400 mb-1'>
        Course by {''}
        <span className='font-medium text-foreground'>{item.institute}</span>
      </p>
      <p className='text-sm text-neutral-400'>{item.desc}</p>
      <div className='mt-3 flex flex-wrap gap-2'>
        {item.courses.map((course, index) => (
          <span key={index} className='border border-neutral-600
          text-neutral-300 rounded-xl px-3 py-1 text-xs'>
            {course}
          </span>
        ))}

      </div>
    </div>
  )
}

export default ResumeCard
