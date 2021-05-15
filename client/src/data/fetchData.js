import React from 'react'
import apiFetch from '../lib/apiFetch'
import { useProfile } from '../context/profile'

export function Token() {
    const token = "Bearer " + localStorage.getItem("token").replace("\"", "").replace("\"", "")
    return token
}

export function Header() {
    return
}

export function GetGames() {
    const [gameData, setGameData] = React.useState([])

    React.useEffect(() => {

        const header = { headers: { 'Authorization': Token() } }

        apiFetch.get('/games', header)
            .then(response => setGameData(response.data))
            .catch(err => alert(err))
    }, [])
    return (gameData)
}

export function GetGame(id) {
    const [game, setGame] = React.useState([])
    React.useEffect(() => {

        const header = { headers: { 'Authorization': Token() } }

        apiFetch.get(`/games/${id}`, header)
            .then(response => setGame(response.data))
            .catch(err => alert(err))
    }, [id])
    return (game)
}

export function GetPlayer() {
    const [playerData, setPlayerData] = React.useState([])

    React.useEffect(() => {

        const header = { headers: { 'Authorization': Token() } }

        apiFetch.get('/player', header)
            .then(response => setPlayerData(response.data))
            .catch(err => alert(err))
    }, [])
    return (playerData)
}

export function GetTeam(game_id) {
    const [teamData, setTeamData] = React.useState([])

    const { profileData } = useProfile()
    React.useEffect(() => {

        const header = {
            headers: { 'Authorization': Token() }, params: {
                game_id,
                player_id: profileData.id
            }
        }

        apiFetch.get('/team', header)
            .then(response => setTeamData(response.data))
            .catch(err => alert(err))
    }, [game_id, profileData.id])
    return (teamData)
}

export function GetMyListGames() {
    const [data, setData] = React.useState([])
    const { profileData } = useProfile()
    const [error, setError] = React.useState([])

    React.useEffect(() => {
        
        const header = {
            headers: { 'Authorization': Token() }, params: {
                playerID: profileData.id
            }
        }
        apiFetch.get('/mygames', header)
            .then(response => setData(response.data))
            .catch(err => setError(err.response.data.msg))
    }, [profileData.id])
    return ({data, error})
}

export function JoinGame(game_id, player_id) {

    const header = { headers: { 'Authorization': Token() } }

    apiFetch.post('/team', { player_id, game_id }, header)
        .catch(err => alert(err))
}

// [x] TODO leave a game 
export function LeaveGame(game_id, player_id) {

    const header = {
        headers: { 'Authorization': Token() }, params: {
            game_id,
            player_id
        }
    }

    apiFetch.delete('/team', header)
        .catch(err => alert(err))
}

export function PostGame(values) {

    const header = { headers: { 'Authorization': Token() } }

    apiFetch.post(`/games`, values, header)
        .catch(err => alert(err))
}

export function GetMapKey() {
    const [apiKey, setApiKey] = React.useState('')

    React.useEffect(() => {

        const header = { headers: { 'Authorization': Token() } }

        apiFetch.get('/map', header)
            .then(response => setApiKey(response.data))
            .catch(err => alert(err))
    }, [])
    return (apiKey)
}