import { ComponentProps, ReactNode } from 'react'

import { NavLinkMain } from '@/components/navLinks/navLinkMain'

interface HeaderMainRootProps extends ComponentProps<'header'> {
  children: ReactNode
}

export function HeaderMainRoot({ children, ...props }: HeaderMainRootProps) {
  return (
    <>
      <header {...props}>{children}</header>
    </>
  )
}

interface HeaderMainNavProps extends ComponentProps<'nav'> {
  children: ReactNode
}

export function HeaderMainNav({ children, ...props }: HeaderMainNavProps) {
  return (
    <nav {...props}>
      <ul className="mb-8 flex gap-4 pt-2 uppercase">{children}</ul>
    </nav>
  )
}

interface HeaderMainNavItemProps extends ComponentProps<'li'> {
  to: string
  children: ReactNode
}

export function HeaderMainNavItem({
  to,
  children,
  ...props
}: HeaderMainNavItemProps) {
  return (
    <li {...props}>
      <NavLinkMain to={to}>{children}</NavLinkMain>
    </li>
  )
}
