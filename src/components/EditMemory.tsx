'use client'

import { Memory } from '@/types/memory'
import dayjs from 'dayjs'
import { ArrowLeft, Edit, Eye, Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { EditMemoryForm } from './EditMemoryForm'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

interface propsEdit {
  memory: Memory
  isUser: boolean
}

const EditMemory = (props: propsEdit) => {
  const { memory } = props
  const router = useRouter()
  const token = Cookies.get('token')
  console.log(token)

  const handleClickDelete = () => {
    api.delete(`/memories/${memory.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    router.push('/')
  }
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

        {edit ? (
          <div className="flex flex-row gap-5">
            <div
              onClick={() => handleClickDelete()}
              className="flex cursor-pointer flex-row items-center gap-2 text-gray-200 hover:text-red-400"
            >
              Delete
              <Trash className="h-4 w-4" />
            </div>
            <div
              onClick={() => setEdit(!edit)}
              className="flex cursor-pointer flex-row items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
            >
              View
              <Eye className="h-4 w-4" />
            </div>
          </div>
        ) : (
          <div
            onClick={() => setEdit(!edit)}
            className="flex  cursor-pointer flex-row  items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
          >
            Edit
            <Edit className="h-4 w-4" />
          </div>
        )}
      </div>
      {edit ? (
        <EditMemoryForm memory={memory} />
      ) : (
        <div key={memory.id} className="space-y-4">
          <time className="flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
            {dayjs(memory.createdAt).format('DD MMMM YYYY')}
          </time>
          <div className="space-y-2">
            <Image
              src={memory.coverUrl}
              width={800}
              height={280}
              alt="Memory Cover"
              className="aspect-video w-full object-cover"
            />
            <p className="p-0 text-lg leading-relaxed text-gray-100">
              {memory.content}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default EditMemory
