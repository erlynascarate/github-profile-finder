import { Link, Stack, Typography } from '@mui/material'

const PrincipalInformation = (props) => {
    const { userData } = props
    const { bio, name, created_at, html_url, login } = userData

    const date = new Date(created_at).toDateString()

    return (
        <>
            <Stack
                direction={{ sx: 'column', sm: 'row' }}
                alignItems={{ sx: 'start', sm: 'center' }}
                justifyContent='space-between'
            >
                <Typography variant='h4'>{name}</Typography>
                <Typography variant='subtitle2'>{date}</Typography>
            </Stack>
            <Link
                href={html_url}
                target='_blank'
                rel='noreferrer'
                color={html_url ? 'primary' : 'inherit'}
                underline={html_url ? 'always' : 'none'}
                variant='caption'
            >
                @{login}
            </Link>
            <Typography>{bio ?? 'No biography unu'}</Typography>
        </>
    )
}

export default PrincipalInformation
