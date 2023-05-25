import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { NewMemoryForm } from '@/components/NewMemoryForm'

const page = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-16">
      <Link
        href="/"
        className="flex w-32 items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        back to timeline
      </Link>

      <NewMemoryForm />
    </div>
  )
}

export default page
