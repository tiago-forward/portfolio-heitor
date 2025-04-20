import { CodeXml, Instagram, Linkedin } from 'lucide-react'

import HeitorProfile from '@/assets/heitor.jpg'

import { useMainHeight } from '@/hooks/useMainHeight'
// import { useEffect, useState } from 'react'

export function Historia() {
  const mainHeight = useMainHeight(180)
  // const [isLoadingImage, setIsLoadingImage] = useState(false)

  // useEffect(() => {
  //   const loadData = async () => {
  //     await new Promise((resolve) => setTimeout(resolve, 2000))
  //     setIsLoadingImage(true)
  //   }

  //   loadData()
  // }, [])

  return (
    <>
      <main
        style={{ maxHeight: mainHeight }}
        className={`flex-1 overflow-y-auto`}
      >
        <header className="sticky top-0 z-10 border-b border-[#e9b874] border-opacity-30 bg-aside-bg shadow-xl shadow-[#010a13]">
          <h1 className="text-4xl font-semibold uppercase text-client-TextSecondary">
            Heitor Silva
          </h1>
          <div className="flex gap-2">
            <span className="mb-4 text-lg text-client-Tertiary">
              Campina Grande-PB
            </span>
            <a
              href="https://www.linkedin.com/in/heitor-d-silva-884169239/"
              target="_blank"
              rel="noreferrer"
              className="duration-300 text-client-AnchorIconMedia hover:text-client-AnchorIconMediaHover"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/ectosilva?igsh=cm1jN3J2eGc4OHo5"
              target="_blank"
              rel="noreferrer"
              className="duration-300 text-client-AnchorIconMedia hover:text-client-AnchorIconMediaHover"
            >
              <Instagram size={18} />
            </a>
          </div>
        </header>
        <article className="md:w-2/5">
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex">
              <CodeXml className="mr-2" />
              <span className="text-xl text-client-TextSecondary">
                Desenvolvedor de Jogos | Artista Digital | Explorador de Mundos Imaginários
              </span>
              <CodeXml className="ml-2" />
            </div>
            <p className="ml-8 text-lg text-client-TextSecondary">
              Criador movido pela curiosidade, com mais de 10 anos de experiência em tecnologia e um foco atual no desenvolvimento de jogos digitais. Estudo Jogos Digitais na Facisa, e sou fundador da Hybrasil Games, uma startup independente que une tecnologia, arte e cultura brasileira em experiências imersivas e inovadoras.
            </p>
            <h2 className="ml-8 border-b border-[#e9b874] border-opacity-30 pb-3 text-4xl font-semibold uppercase text-client-TextSecondary">
              Trajetória
            </h2>
            <p className="ml-8 text-lg text-client-TextSecondary">
              Minha trajetória passa por desenvolvimento em Unreal Engine, Unity e Construct 2, com foco em  World building e narrativa interativa, estética estilizada e mecânicas bem diververtidas. Crio jogos que misturam cultura regional, sci-fi e crítica social — como Cordel Sangrento, Lázaro e a Pedra Encantada, e Cat Ronnin.
            </p>
            {/* <h2 className="ml-8 border-b border-[#e9b874] border-opacity-30 pb-3 text-4xl font-semibold uppercase text-client-TextSecondary">
              Experiência profissional
            </h2> */}
            <p className="ml-8 text-lg text-client-TextSecondary">
              Além disso, participo ativamente de hackathons, como o NASA Space Apps Challenge, e desenvolvo experiências com Realidade Virtual e Realidade Aumentada voltadas ao turismo, através do projeto Perspective.
            </p>
            <p className="ml-8 text-lg text-client-TextSecondary">
              Sou apaixonado por storytelling, pixel art, level design e teoria dos jogos — e sempre busco criar mundos que inspirem, provoquem e conectem pessoas.
            </p>
            <div>
              {/* <div className="ml-8 flex items-center text-lg text-client-TextAnchor hover:text-client-TextAnchorHover">
                <a
                  href="mailto:"
                  target="_blank"
                  rel="noreferrer"
                >
                  Email
                </a>
                <MoveUpRight size={14} />
              </div>
              <div className="ml-8 flex items-center text-lg text-client-TextAnchor hover:text-client-TextAnchorHover">
                <a
                  href="https://wa.me/5583986236928"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telefone
                </a>
                <MoveUpRight size={14} />
              </div> */}
            </div>
          </div>
        </article>
        <section aria-labelledby="news-blocks" className="mt-auto pb-8">
          <div className="border border-black">
              <img
                  src={HeitorProfile}
                  alt="Heitor Silva"
                  className={`h-52 object-cover transition-opacity duration-300 opacity-100`}
              />
          </div>
        </section>
      </main>
    </>
  )
}
