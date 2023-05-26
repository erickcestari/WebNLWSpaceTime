import EmptyMemories from '@/components/EmptyMemories'
import { api } from '@/lib/api'
import dayjs from 'dayjs'
import { ArrowRight } from 'lucide-react'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { Memory } from '@/types/memory'

export default async function Home() {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value

  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memories = response.data as Memory[]

  if (memories.length === 0) {
    return <EmptyMemories />
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => (
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
            {memory.excerpt}
          </p>
          <Link
            href={`memories/memory/${memory.id}`}
            className="flex w-24 items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
          >
            Read More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ))}
    </div>
  )
}
