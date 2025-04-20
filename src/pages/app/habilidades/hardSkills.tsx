import { hardSkills, hardSkillsProps } from '@/constants/index'
import { useCountUp } from '@/hooks/useCountUp'
import { useMainHeight } from '@/hooks/useMainHeight'
import { usePlayAudioOnHover } from '@/hooks/usePlayAudioOnHover'
import hoverSound from '@/assets/audio/Audio-collection.wav'

export function HardSkills() {
  const mainHeight = useMainHeight(180)
  useCountUp({ start: 0, end: 10, duration: 700, elementId: 'elementCounter' })

  const playHoverSound = usePlayAudioOnHover(hoverSound)

  return (
    <main
      style={{ maxHeight: mainHeight }}
      className="grid flex-1 justify-center gap-8 overflow-y-auto md:grid-cols-4"
    >
      <div className="col-span-1">
        <div className="flex cursor-default flex-col items-center border border-[#e9b874] pb-4">
          <span id="elementCounter" className="text-[80px] text-client-Primary">
            0
          </span>
          <p className="text-center uppercase text-client-TextCounter">Quantidade de hard skills</p>
        </div>
      </div>
      <div className="col-span-1 md:col-span-3">
        <ul className="flex flex-wrap items-center gap-4">
          {hardSkills.map((skill: hardSkillsProps) => (
            <li
              key={skill.id}
              className="m-auto flex flex-col flex-wrap items-center gap-4 text-client-Secondary"
              onMouseEnter={playHoverSound}
            >
              <div className="opacity-80 hover:opacity-100 cursor-pointer">{skill.icon}</div>
              <h3 className="cursor-default">{skill.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
