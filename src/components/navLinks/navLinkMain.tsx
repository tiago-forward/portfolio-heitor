import { Link, LinkProps, useLocation } from 'react-router-dom'
import audioGold from '@/assets/audio/Audio-menu.wav'
import { usePlayAudioOnClick } from '@/hooks/usePlayAudioOnClick'
import { useState } from 'react'

export interface NavLinkMainProps extends LinkProps {
  exact?: boolean
}

export function NavLinkMain(props: NavLinkMainProps) {
  const location = useLocation()
  const [_, setActiveLink] = useState<string>(location.pathname)
  const playAudio = usePlayAudioOnClick(audioGold)

  const handleSetActiveLink = (href: string) => {
    setActiveLink(href)
    playAudio()
  }

  const isActive = location.pathname.startsWith(props.to as string)

  return (
    <div className="flex flex-col items-center px-2">
      <Link
        onClick={() => handleSetActiveLink(props.to as string)}
        data-current={isActive}
        className={`transition duration-300 hover:text-client-TextPrimaryHover ${isActive ? `text-client-TextPrimaryActive` : `text-client-TextPrimary`}`}
        {...props}
      />
      {isActive && (
        <div className="h-px w-full [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(199,160,0.65)_50%,rgba(0,0,0,0)_100%)]"></div>
      )}
    </div>
  )
}
