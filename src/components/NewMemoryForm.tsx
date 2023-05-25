'use client'
import { Camera } from 'lucide-react'
import { MediaPicker } from './MediaPicker'
import { FormEvent } from 'react'
import { api } from '@/lib/api'
import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'

export function NewMemoryForm() {
  const router = useRouter()
  async function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    console.log(Array.from(formData.entries()))

    const fileToUpload = formData.get('coverUrl') as File

    let coverUrl = ''

    const token = Cookie.get('token')

    if (fileToUpload.name !== '') {
      const uploadFormData = new FormData()
      uploadFormData.set('file', fileToUpload)

      const uploadResponse = await api.post('/upload', uploadFormData)

      coverUrl = uploadResponse.data.fileUrl
    }
    console.log('coverUrl', coverUrl)
    console.log('content', formData.get('content'))

    console.log(formData)

    await api.post(
      '/memories',
      {
        coverUrl,
        content: formData.get('content'),
        isPublic: formData.get('isPublic'),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    router.push('/')
  }

  return (
    <form onSubmit={handleCreateMemory} className="flex flex-1 flex-col gap-2">
      <div className="flex items-center gap-4">
        <label
          htmlFor="midia"
          className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <Camera className="h-4 w-4" />
          Choose File
        </label>

        <label
          htmlFor="isPublic"
          className="flex items-start gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <input
            type="checkbox"
            id="isPublic"
            name="isPublic"
            value="true"
            className="botder-gray-400 h-4 w-4 rounded bg-gray-700 text-purple-500 focus:ring-0"
          />
          Make Public Memory
        </label>
      </div>
      <MediaPicker />
      <textarea
        name="content"
        spellCheck={false}
        className="flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
        placeholder="Feel free to add photos, videos and stories about that experience you want to remember forever. It's your time capsule! 🚀"
      />

      <button
        type="submit"
        className='hover:bg-green-600" inline-block self-end rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black'
      >
        SAVE MEMORY
      </button>
    </form>
  )
}
