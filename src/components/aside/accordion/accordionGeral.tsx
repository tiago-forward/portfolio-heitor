import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion'
import { Play } from 'lucide-react'
import { useEffect, useState } from 'react'

import { AvatarFriend } from '../../avatar/avatarFriend'

import { api } from '@/services/axios'

interface FollowersProps {
  id: number
  avatarUrl: string
  login: string
  htmlUrl: string
}

export default function AccordionGeral() {
  const [accordionIsOpen, setAccordionIsOpen] = useState<boolean>(true)
  const [followers, setFollowers] = useState<FollowersProps[]>([])

  useEffect(() => {
    async function fetchFollowers() {
      try {
        const response = await api.get(`users/tiago-forward/followers`)
        const followersData = response.data.map((follower: any) => ({
          id: follower.id,
          avatarUrl: follower.avatar_url,
          login: follower.login,
          htmlUrl: follower.html_url,
        }))

        setFollowers(followersData)
      } catch (error) {
        console.error("Ops! Ocorreu um erro " + error)
      }
    }

    fetchFollowers()
  }, [])

  return (
    <Accordion
      type="single"
      collapsible
      onValueChange={(value) => setAccordionIsOpen(value === 'item-1')}
      className="shadow-friendlist"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex w-full items-center gap-2 px-2 py-1 uppercase hover:bg-[#e8edf928] text-client-TextSecondary opacity-80 hover:opacity-100">
          <Play
            size={10}
            className={`mb-1 transform transition-transform duration-200 ${accordionIsOpen ? 'rotate-90' : 'rotate-0'}`}
          />
          {`Seguidores do GITHUB (0/${followers.length})`}
        </AccordionTrigger>
        <AccordionContent className="overflow-auto max-h-[72vh]">
            {followers.map((follower) => (
              <a key={follower.id} href={follower.htmlUrl} target="_blank">
                <AvatarFriend
                  id={follower.id}
                  url={follower.avatarUrl}
                  label={follower.login}
                />
              </a>
            ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
