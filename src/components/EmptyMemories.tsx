import Link from 'next/link'

const EmptyMemories = () => {
  return (
    <div className="flex flex-1 items-center justify-center p-16">
      <p className="leading-relaxe w-[360px] text-center">
        {/* eslint-disable-next-line */}
        You haven't registered any memories yet, start{' '}
        <Link href="/memories/new/" className="underline hover:text-gray-50">
          Creating Now
        </Link>
      </p>
    </div>
  )
}

export default EmptyMemories
