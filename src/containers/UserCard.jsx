import { Avatar, Grid, Stack } from '@mui/material'
import PrincipalInformation from '../components/PrincipalInformation'
import Description from './Description'

const UserCard = (props) => {
    const { userData } = props
    const { login, avatar_url } = userData

    return (
        <Grid
            container
            justifyContent='center'
            spacing={2}
            sx={{
                marginBlockStart: '15px',
            }}
        >
            <Grid item md={3}>
                <Avatar
                    sx={{
                        inlineSize: '100%',
                        maxInlineSize: '350px',
                        blockSize: 'auto',
                    }}
                    alt={login}
                    src={avatar_url}
                />
            </Grid>
            <Grid item md={9}>
                <Stack
                    sx={{
                        margin: { sm: '30px' },
                    }}
                    spacing={1}
                >
                    <PrincipalInformation userData={userData} />
                    <Description userData={userData} />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default UserCard
