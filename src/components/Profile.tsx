import { getUser } from '@/lib/auth'
import Image from 'next/image'

const Profile = () => {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left transition-colors">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt="Avatar image"
        className="h-10 w-10 rounded-full"
      />
      <p className="max-w-[155px] text-sm leading-snug">
        {name}

        <a href="" className="block text-red-400 hover:text-red-300">
          Log out
        </a>
      </p>
    </div>
  )
}

export default Profile
