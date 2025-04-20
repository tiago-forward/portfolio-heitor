import { Link, LinkProps, useLocation } from 'react-router-dom'
import audioGold from '@/assets/audio/Audio-menu.wav'
import { usePlayAudioOnClick } from '@/hooks/usePlayAudioOnClick';
import { useEffect, useState } from 'react';

export interface NavLinkHeaderProps extends LinkProps {
  exact?: boolean
}

export function NavLinkHeader(props: NavLinkHeaderProps) {
  const location = useLocation()
  const [_, setActiveLink] = useState<string>(location.pathname)
  const playAudio = usePlayAudioOnClick(audioGold)

  useEffect(() => {
    setActiveLink(location.pathname)
  })

  const handleSetActiveLink = (href: string) => {
    setActiveLink(href)
    playAudio()
  }

  const isActive = props.exact
  ? location.pathname === props.to
  : location.pathname.startsWith(props.to as string)

  return (
    <>
      {isActive && (
        <div className="absolute right-[40%] top-0 border-l-[14px] border-r-[14px] border-t-[14px] border-l-transparent border-r-transparent border-t-border-header"></div>
      )}
      <Link
        onClick={() => handleSetActiveLink(props.to as string)}
        data-current={isActive}
        className={`font-semibold flex h-full items-center px-2 text-sm transition duration-300 hover:bg-navLinkHover text-client-TextPrimary hover:text-client-TextPrimaryHover ${isActive ? 'text-client-TextPrimaryActive data-[current=true]:bg-navLinkHover' : ''}`}
        {...props}
      />
    </>
  )
}
