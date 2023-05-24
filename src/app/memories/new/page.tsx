import { Camera, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link
        href="/"
        className="flex w-32 items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        back to timeline
      </Link>

      <form className="flex flex-1 flex-col gap-2">
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
        <input type="file" id="midia" className="invisible h-0 w-0" />
        <textarea
          name="content"
          spellCheck={false}
          className="flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
          placeholder="Feel free to add photos, videos and stories about that experience you want to remember forever. It's your time capsule! 🚀"
        />
      </form>
    </div>
  )
}

export default page
