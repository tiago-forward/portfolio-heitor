import {
  HeaderMainNav,
  HeaderMainNavItem,
  HeaderMainRoot,
} from '@/components/header/headerMainRoot'

export function ClientGithub() {
  return (
    <section className="flex h-full w-full flex-col">
      <HeaderMainRoot>
        <HeaderMainNav>
          <HeaderMainNavItem to={'/'}>Geral</HeaderMainNavItem>
          <HeaderMainNavItem to={'/github'}>Github</HeaderMainNavItem>
        </HeaderMainNav>
      </HeaderMainRoot>
      <div className="mt-52 text-center">
        <h2 className="text-xl">Sem informação!</h2>
      </div>
    </section>
  )
}
