import { Link, Stack, Typography } from '@mui/material'

const PrincipalInformation = (props) => {
    const { userData } = props
    const { name, created_at, html_url, login } = userData

    const date = new Date(created_at).toLocaleString()

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
            {html_url ? (
                <Link href={html_url} target='_blank' rel='noreferrer'>
                    <Typography variant='caption'>@{login}</Typography>
                </Link>
            ) : (
                <Typography sx={{ cursor: 'not-allowed' }} variant='caption'>
                    @{login}
                </Typography>
            )}
        </>
    )
}

export default PrincipalInformation
