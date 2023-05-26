import { api } from '@/lib/api'
import dayjs from 'dayjs'
import { ArrowLeft } from 'lucide-react'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

const page = async (props: any) => {
  const token = cookies().get('token')?.value
  const memoryId = props.params.id as string

  const response = await api.get(`/memories/${memoryId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memory = response.data

  return (
    <div className="flex flex-col gap-10 p-8">
      <Link
        href={`/`}
        className="flex w-20 items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
      >
        <ArrowLeft className="h-4 w-4" />
        Go back
      </Link>
      <div key={memory.id} className="space-y-4">
        <time className="flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
          {dayjs(memory.createdAt).format('DD MMMM YYYY')}
        </time>
        <Image
          src={memory.coverUrl}
          width={800}
          height={280}
          alt="Memory Cover"
          className="aspect-video w-full object-cover"
        />
        <p className="text-lg leading-relaxed text-gray-100">
          {memory.content}
        </p>
      </div>
    </div>
  )
}

export default page
