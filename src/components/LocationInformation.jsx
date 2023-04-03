import { Grid, Link, Stack, Typography } from '@mui/material'
import { Business, Language, LocationOn, Twitter } from '@mui/icons-material'

const LocationInformation = (props) => {
    const { userData } = props
    const { location, twitter_username, blog, company } = userData

    return (
        <Grid container spacing={2} sx={{ marginTop: '15px' }}>
            <Grid item xs={12} sm={6}>
                <Stack direction='row' spacing={2}>
                    <LocationOn />
                    <Typography>{location ?? 'Not Available'}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Stack direction='row' spacing={2}>
                    <Twitter />
                    {twitter_username ? (
                        <Link
                            href={`https://twitter.com/${twitter_username}`}
                            target='_blank'
                            rel='noreferrer'
                            underline='hover'
                        >
                            <Typography>@{twitter_username}</Typography>
                        </Link>
                    ) : (
                        <Typography sx={{ cursor: 'not-allowed' }}>
                            Not Available
                        </Typography>
                    )}
                </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Stack direction='row' spacing={2}>
                    <Language />
                    {blog ? (
                        <Link
                            href={blog}
                            target='_blank'
                            rel='noreferrer'
                            underline='hover'
                        >
                            <Typography>{blog}</Typography>
                        </Link>
                    ) : (
                        <Typography sx={{ cursor: 'not-allowed' }}>
                            Not Available
                        </Typography>
                    )}
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
