import { Paper, Stack, Typography } from '@mui/material'

const PaperInformation = (props) => {
    const { userData } = props
    const { public_repos, followers, following } = userData

    const userInformation = [
        { title: 'Public Repos', value: public_repos },
        { title: 'Followers', value: followers },
        { title: 'Following', value: following },
    ]
    return (
        <Paper elevation={3}>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent='space-evenly'
                alignItems='center'
                margin='20px'
                spacing={2}
            >
                {userInformation.map(({ title, value }) => (
                    <Stack key={title} spacing={1} textAlign='center'>
                        <Typography component='h3' variant='h5'>
                            {title}
                        </Typography>
                        <Typography component='h4' variant='h6'>
                            {value}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Paper>
    )
}

export default PaperInformation
