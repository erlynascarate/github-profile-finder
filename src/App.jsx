import { Container } from '@mui/material'
import { useState } from 'react'
import Searcher from './components/Searcher'
import UserCard from './containers/UserCard'

function App() {
    const [userData, setUserData] = useState({})

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                marginBlock: '40px',
                paddingBlock: '20px',
                borderRadius: '16px',
                inlineSize: '80vw',
                background: 'whitesmoke',
            }}
        >
            <Searcher userData={userData} setUserData={setUserData} />
            <UserCard userData={userData} />
        </Container>
    )
}

export default App
