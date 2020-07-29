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

        apiFetch.get('/game', header)
            .then(response => setGameData(response.data))
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }, [])
    return (gameData)
}

export function GetGame(id) {
    const [game, setGame] = React.useState([])
    React.useEffect(() => {

        const header = { headers: { 'Authorization': Token() } }

        apiFetch.get(`/game/${id}`, header)
            .then(response => setGame(response.data))
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }, [id])
    return (game)
}

export function GetPlayer() {
    const [playerData, setPlayerData] = React.useState([])

    React.useEffect(() => {

        const header = { headers: { 'Authorization': Token() } }

        apiFetch.get('/player', header)
            .then(response => setPlayerData(response.data))
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
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
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }, [game_id])
    return (teamData)
}

export function GetMyListGames() {
    const [myGames, setMyGames] = React.useState([])
    const { profileData } = useProfile()

   
    React.useEffect(() => {

        const header = {
            headers: { 'Authorization': Token() }, params: {
                player_id: profileData.id
            }
        }
        apiFetch.get('/mygames', header)
            .then(response => setMyGames(response.data))
            .catch(err => console.log(err))
    }, [])
    return (myGames)
}

export function JoinGame(game_id, player_id) {

    const header = { headers: { 'Authorization': Token() } }

    apiFetch.post('/team', { player_id, game_id }, header)
        .catch(err => alert(err))
}

// TODO leave a game 
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

    apiFetch.post(`/game`, values, header)
        .catch(err => alert(err))
}

export function GetMapKey() {
    const [apiKey, setApiKey] = React.useState('')

    React.useEffect(() => {

        const header = { headers: { 'Authorization': Token() } }

        apiFetch.get('/map', header)
            .then(response => setApiKey(response.data))
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }, [])
    return (apiKey)
}