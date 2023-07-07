import { useState } from 'react'
import { Avatar, Container, CssBaseline, Stack } from '@mui/material'
import Searcher from './components/Searcher'
import UserCard from './containers/UserCard'
import PrincipalInformation from './components/PrincipalInformation'
import PaperInformation from './components/PaperInformation'
import LocationInformation from './components/LocationInformation'

function App() {
    const [userData, setUserData] = useState({})
    const { avatar_url, login } = userData

    return (
        <>
            <CssBaseline />
            <Container
                sx={{
                    marginBlock: 5,
                    borderRadius: 4,
                    paddingBlock: 3,
                    inlineSize: '80vw',
                    bgcolor: 'whitesmoke',
                }}
            >
                <Searcher userData={userData} setUserData={setUserData} />
                <UserCard
                    renderAvatar={() => (
                        <Avatar
                            sx={{
                                inlineSize: '100%',
                                maxInlineSize: '350px',
                                blockSize: 'auto',
                            }}
                            alt={login}
                            src={avatar_url}
                        />
                    )}
                    renderDescription={() => (
                        <Stack
                            sx={{
                                m: { sm: 4 },
                            }}
                            spacing={1}
                        >
                            <PrincipalInformation userData={userData} />
                            <PaperInformation userData={userData} />
                            <LocationInformation userData={userData} />
                        </Stack>
                    )}
                />
            </Container>
        </>
    )
}

export default App
