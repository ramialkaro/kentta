import React from 'react'
import apiFetch from '../lib/apiFetch'

export function GetGames() {
    const [gameData, setGameData] = React.useState([])
    
    React.useEffect(() => {
        const token = "Bearer " + localStorage.getItem("token").replace("\"", "").replace("\"", "")
        const header = { headers: { 'Authorization': token } }

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
        const token = "Bearer " + localStorage.getItem("token").replace("\"", "").replace("\"", "")
        const header = { headers: { 'Authorization': token } }

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
        const token = "Bearer " + localStorage.getItem("token").replace("\"", "").replace("\"","")
        const header = { headers: { 'Authorization': token }}

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


export function GetTeam() {
    const [teamData, setTeamData] = React.useState([])
    
    React.useEffect(() => {
        const token = "Bearer " + localStorage.getItem("token").replace("\"", "").replace("\"","")
        const header = { headers: { 'Authorization': token }}

        apiFetch.get('/team', header)
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
    const token = "Bearer " + localStorage.getItem("token").replace("\"", "").replace("\"","")
    const header = { headers: { 'Authorization': token }}

    apiFetch.post(`/game`, values, header)
        .catch(err => alert(err))
}

export function GetMapKey() {
    const [apiKey, setApiKey] = React.useState('')
    
    React.useEffect(() => {
        const token = "Bearer " + localStorage.getItem("token").replace("\"", "").replace("\"","")
        const header = { headers: { 'Authorization': token }}
        
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