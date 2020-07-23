import React from 'react'
import apiFetch from '../lib/apiFetch'


export function GetGames() {
    const [gameData, setGameData] = React.useState([])

    React.useEffect(() => {
        apiFetch.get('/game')
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
        apiFetch.get(`/game/${id}`)
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
        apiFetch.get('/player')
            .then(response => setPlayerData(response.data))
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }, [])
    return (playerData)
}


export function GetTeam() {
    const [teamData, setTeamData] = React.useState([])

    React.useEffect(() => {
        apiFetch.get('/team')
            .then(response => setTeamData(response.data))
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }, [])
    return (teamData)
}

export function PostGame(values) {

    apiFetch.post(`/game`, values)
        .catch(err => alert(err))
}

export function GetMapKey() {
    const [apiKey, setApiKey] = React.useState('')

    React.useEffect(() => {
        apiFetch.get('/map')
            .then(response => setApiKey(response.data))
            .catch(err => {
                if(err){
                    console.log(err)
                }
            })
    }, [])
    return (apiKey)    
}