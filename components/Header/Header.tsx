import { PropsWithChildren } from 'react'
import Link, { LinkProps } from 'next/link'
import { NavBar } from '@ui/NavBar'
import { Button } from '@ui/Button'
import { PreviewModeBanner } from './PreviewMode'
import { TopArea } from './TopArea'

export function Header() {
  return (
    <>
      <div className="px-8 py-3">
        <TopArea />
      </div>
      <PreviewModeBanner />
      <div className="mx-auto" style={{ maxWidth: '98%' }}>
        <NavBar title="🌿 Plantpedia">
          <div>
            <NavLink href="/top-stories">Top Stories</NavLink>
          </div>
        </NavBar>
      </div>
    </>
  )
}

function NavLink({ children, ...linkProps }: PropsWithChildren<LinkProps>) {
  return (
    <Link {...linkProps} passHref>
      <Button color="inherit" variant="text" component="a">
        {children}
      </Button>
    </Link>
  )
}
