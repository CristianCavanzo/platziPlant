import { useRouter } from 'next/router'

import { Grid } from '@ui/Grid'
import { Typography } from '@ui/Typography'
import { Button } from '@ui/Button'

export function TopArea() {
  const { locales, locale, asPath } = useRouter()
  const pathname = asPath.split('#')[0].split('?')[0]

  // Locales aren't configured
  if (locales == undefined || locale == undefined) {
    return null
  }

  return (
    <Grid container justify="space-between">
      <Grid item></Grid>
      <Grid item>
        <Typography variant="body2" component="span" className="pr-3">
          Language:
        </Typography>
        {locales.map((loc) => (
          <form
            action="/api/language"
            method="POST"
            key={loc}
            className="inline-block"
          >
            <input name="preferredLocale" value={loc} type="hidden"></input>
            <input name="actualPage" value={pathname} type="hidden"></input>
            <Button
              variant={loc === locale ? 'outlined' : 'text'}
              className="ml-1"
              type="submit"
            >
              {loc}
            </Button>
          </form>
        ))}
      </Grid>
    </Grid>
  )
}
