import { useCallback } from 'react'

export function usePlayAudioOnHover(audioSrc: string) {
  // Cria uma função de callback que toca o áudio
  const playAudio = useCallback(() => {
    const audio = new Audio(audioSrc)
    audio.play()
  }, [audioSrc])

  return playAudio
}
