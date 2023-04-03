import { Stack, Typography } from '@mui/material'
import LocationInformation from '../components/LocationInformation'
import PaperInformation from '../components/PaperInformation'

const Description = (props) => {
    const { userData } = props
    const { bio } = userData

    return (
        <>
            <Stack
                sx={{
                    justifyContent: 'center',
                }}
            >
                <Typography variant='body1'>
                    {bio ?? 'No biography unu'}
                </Typography>
            </Stack>
            <PaperInformation userData={userData} />
            <LocationInformation userData={userData} />
        </>
    )
}

export default Description
