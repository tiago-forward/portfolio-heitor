import { SquareArrowOutUpRight } from 'lucide-react'

import Setup from '@/assets/imageProfile/Setup.jpg'
import MyLegendPortfolio from '@/assets/imageProject/My Legends Portfolio.jpg'

export default function HighlightsHome() {
  return (
    <section aria-labelledby="news-blocks" className="mt-auto pb-8">
      <nav>
        <ul className="mt-10 flex flex-col items-center gap-3 md:mt-4 md:flex-row md:items-start">
          <li className="group relative w-full sm:w-80">
            <a
              href="https://github.com/tiago-forward"
              target="_blank"
              className="flex flex-col gap-2"
              rel="noreferrer"
            >
              <div className="border border-black">
                <img
                  src={Setup}
                  alt=""
                  className="h-52 w-full border-2 border-zinc-700 group-hover:border-[#a18052] sm:h-44 sm:w-80"
                />
              </div>
              <h2 className="font-bold text-client-TextPrimary text-stroke group-hover:text-client-TextPrimaryHover">Meu setup</h2>
              <SquareArrowOutUpRight
                size={16}
                className="absolute right-1 top-1 text-client-AnchorIcon group-hover:text-client-AnchorIconHover"
              />
            </a>
          </li>
          <li className="group relative w-full sm:w-80">
            <a
              href="https://github.com/tiago-forward/my-legend-portfolio"
              target="_blank"
              className="flex flex-col gap-2"
              rel="noreferrer"
            >
              <div className="border border-black">
                <img
                  src={MyLegendPortfolio}
                  alt=""
                  className="h-52 w-full border-2 border-zinc-700 group-hover:border-[#a18052] sm:h-44 sm:w-80"
                />
              </div>
              <h2 className="font-bold text-client-TextPrimary text-stroke group-hover:text-client-TextPrimaryHover">
                Meu mais recente projeto em desenvolvimento - My Legend
                Portfolio
              </h2>
              <SquareArrowOutUpRight
                size={16}
                className="absolute right-1 top-1 text-client-AnchorIcon group-hover:text-client-AnchorIconHover"
              />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}
