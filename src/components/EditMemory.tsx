'use client'

import { Memory } from '@/types/memory'
import dayjs from 'dayjs'
import { ArrowLeft, Edit, Eye } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { EditMemoryForm } from './EditMemoryForm'

interface propsEdit {
  memory: Memory
  isUser: boolean
}

const EditMemory = (props: propsEdit) => {
  const { memory } = props

  const [edit, setEdit] = useState(false)

  return (
    <div className="flex h-full flex-col gap-10 p-8">
      <div className="flex flex-row justify-between">
        <Link
          href={`/`}
          className="flex w-20 items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Go back
        </Link>
        <div
          onClick={() => setEdit(!edit)}
          className="flex cursor-pointer flex-row text-sm text-gray-200 hover:text-gray-100"
        >
          {edit ? (
            <div className="flex flex-row items-center gap-2">
              View
              <Eye className="h-4 w-4" />
            </div>
          ) : (
            <div className="flex flex-row items-center gap-2">
              Edit
              <Edit className="h-4 w-4" />
            </div>
          )}
        </div>
      </div>
      {edit ? (
        <EditMemoryForm memory={memory} />
      ) : (
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
      )}
    </div>
  )
}

export default EditMemory
