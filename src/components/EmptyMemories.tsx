const EmptyMemories = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="leading-relaxe w-[360px] text-center">
        You haven't registered any memories yet, start{' '}
        <a href="#" className="underline hover:text-gray-50">
          Creating Now
        </a>
      </p>
    </div>
  )
}

export default EmptyMemories
