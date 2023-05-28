'use client'

import { Memory } from '@/types/memory'
import { ChangeEvent, useState } from 'react'

interface MediaPickerProps {
  memory?: Memory
}

export function MediaPicker(props: MediaPickerProps) {
  const { memory } = props
  const [nameInput, setNameInput] = useState(
    memory?.coverUrl ? 'noChange' : 'coverUrl',
  )
  const [preview, setPreview] = useState<string | null>(
    memory?.coverUrl ? memory.coverUrl : null,
  )

  const [isVideo, setIsVideo] = useState(
    memory ? memory?.coverUrl.endsWith('.mp4') : false,
  )
  const [isImage, setIsImage] = useState(
    memory
      ? memory?.coverUrl.endsWith('.jpeg') ||
          memory?.coverUrl.endsWith('.jpg') ||
          memory?.coverUrl.endsWith('.png')
      : false,
  )

  console.log(preview)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target
    setNameInput('coverUrl')

    if (!files) {
      return
    }

    const isVideo = files[0].type.startsWith('video/')
    const isImage = files[0].type.startsWith('image/')

    setIsImage(isImage)
    setIsVideo(isVideo)

    const previewURL = URL.createObjectURL(files[0])

    setPreview(previewURL)
  }
  return (
    <>
      <input
        type="file"
        id="midia"
        name={nameInput}
        onChange={onFileSelected}
        accept="image/*, video/*"
        className="invisible h-0 w-0"
      />

      {preview && isImage && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt="Preview"
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
      {preview && isVideo && (
        <video
          src={preview}
          className="aspect-video w-full rounded-lg "
          controls
        ></video>
      )}
    </>
  )
}
