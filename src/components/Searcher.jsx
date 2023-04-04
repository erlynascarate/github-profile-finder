import { IconButton, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useEffect, useState } from 'react'

import { getGitHubUser } from '../services/users'

const userNotFound = {
    avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
    followers: 0,
    following: 0,
    login: 'usernotfound',
    name: 'User not found',
    public_repos: 0,
}

const Searcher = (props) => {
    const { setUserData } = props

    const [searchedUser, setSearchedUser] = useState('octocat')
    const [notFound, setNotFound] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        const { value } = event.target.searchedUser
        setSearchedUser(value)
    }

    useEffect(() => {
        gettingUser(searchedUser)
    }, [searchedUser])

    const gettingUser = async (user) => {
        const userResponse = await getGitHubUser(user)

        if (userResponse.message === 'Not Found') {
            setUserData(userNotFound)
            setNotFound(true)
        } else {
            setUserData(userResponse)
            setNotFound(false)
        }

        console.log(userResponse)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack
                sx={{
                    marginInline: 'auto',
                    inlineSize: '80%',
                }}
            >
                <TextField
                    sx={{
                        inlineSize: '100%',
                    }}
                    name='searchedUser'
                    label={notFound ? 'GitHub User Not Found' : 'GitHub User'}
                    placeholder='Octocat'
                    variant='outlined'
                    color={notFound ? 'error' : 'primary'}
                    InputProps={{
                        endAdornment: (
                            <IconButton type='submit'>
                                <SearchIcon />
                            </IconButton>
                        ),
                    }}
                />
            </Stack>
        </form>
    )
}

export default Searcher
