import { Grid, Link, Stack, Typography } from '@mui/material'
import { Business, Language, LocationOn, Twitter } from '@mui/icons-material'

const LocationInformation = (props) => {
    const { userData } = props
    const { location, twitter_username, blog, company } = userData

    return (
        <Grid container sx={{ mt: 2 }} spacing={2}>
            <Grid item xs={12} sm={6}>
                <Stack direction='row' spacing={2}>
                    <LocationOn />
                    <Typography>{location ?? 'Not Available'}</Typography>
                </Stack>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Stack direction='row' spacing={2}>
                    <Twitter />
                    <Link
                        href={
                            twitter_username &&
                            `https://twitter.com/${twitter_username}`
                        }
                        target='_blank'
                        rel='noreferrer'
                        color={twitter_username ? 'primary' : 'inherit'}
                        underline={twitter_username ? 'always' : 'none'}
                    >
                        @{twitter_username ?? 'NotAvailable'}
                    </Link>
                </Stack>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Stack direction='row' spacing={2}>
                    <Language />
                    <Link
                        href={blog}
                        target='_blank'
                        rel='noreferrer'
                        color={blog ? 'primary' : 'inherit'}
                        underline={blog ? 'always' : 'none'}
                    >
                        {blog || 'Not Available'}
                    </Link>
                </Stack>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Stack direction='row' spacing={2}>
                    <Business />
                    <Typography>{company ?? 'Not Available'}</Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default LocationInformation
