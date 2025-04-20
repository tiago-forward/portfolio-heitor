import { useCallback } from 'react'

export function usePlayAudioOnClick(audioSrc: string) {
  const playAudio = useCallback(() => {
    const audio = new Audio(audioSrc)
    audio.play()
  }, [audioSrc])

  return playAudio
}
