import { Grid } from '@mui/material'

const UserCard = (props) => {
    const { renderAvatar, renderDescription } = props

    return (
        <Grid
            sx={{
                justifyContent: 'center',
                marginBlockStart: 2,
            }}
            container
            spacing={2}
        >
            <Grid item md={3}>
                {renderAvatar()}
            </Grid>

            <Grid item md={9}>
                {renderDescription()}
            </Grid>
        </Grid>
    )
}

export default UserCard
