import {
  HeaderMainNav,
  HeaderMainNavItem,
  HeaderMainRoot,
} from '@/components/header/headerMainRoot'
import HighlightsHome from '@/components/sections/highlights/highlightsHome'
import { Button } from '@/components/ui/button'

export function ClientGeral() {
  return (
    <>
      <section
        aria-labelledby="welcome-section"
        className="flex flex-col items-center md:items-start"
      >
        <HeaderMainRoot>
          <HeaderMainNav>
            <HeaderMainNavItem to={'/'}>Geral</HeaderMainNavItem>
            {/* <HeaderMainNavItem to={'/github'}>Github</HeaderMainNavItem> */}
          </HeaderMainNav>
        </HeaderMainRoot>
        <article className="mt-10 flex flex-col items-start gap-4 md:w-2/5 xl:mt-60">
          <h1 className="text-5xl font-bold uppercase text-client-TextSecondary cursor-default">
            Seja bem vindo ao meu novo portfolio
          </h1>
          <h2 className="text-xl text-client-TextTertiary cursor-default">Desenvolvedor front-end</h2>
          <Button asChild className="buttonGeral group rounded-none">
            <a
              href="https://drive.google.com/file/d/18hPHHTmwgMZo4tQgbZHmrZD1OXwvSUf0/view?usp=sharing"
              target="_blank"
              className="border-2 uppercase tracking-widest text-client-TextPrimary hover:text-client-TextSecondary"
              rel="noreferrer"
            >
              Download CV
            </a>
          </Button>
        </article>
      </section>
      <HighlightsHome />
    </>
  )
}
