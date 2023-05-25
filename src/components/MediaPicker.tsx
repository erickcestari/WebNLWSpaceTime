'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)
  const [isVideo, setIsVideo] = useState(false)
  const [isImage, setIsImage] = useState(false)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

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
        name="coverUrl"
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
