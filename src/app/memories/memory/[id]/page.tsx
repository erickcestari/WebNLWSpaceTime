import EditMemory from '@/components/EditMemory'
import { api } from '@/lib/api'
import { getUser } from '@/lib/auth'
import { cookies } from 'next/headers'

const page = async (props: any) => {
  const token = cookies().get('token')?.value
  const memoryId = props.params.id as string
  const response = await api.get(`/memories/${memoryId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memory = response.data

  const user = getUser()
  const isUser = user.sub === memory.userId

  return <EditMemory memory={memory} isUser={isUser} />
}

export default page
