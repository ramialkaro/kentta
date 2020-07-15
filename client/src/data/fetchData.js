import React from 'react'
import apiFetch from '../lib/apiFetch'


export function GetGame(){
    const [gameData, setGameData] = React.useState([])

    React.useEffect(()=>{
        apiFetch.get('/game')
        .then(response => setGameData(response.data))
        .catch(err=>{
            if(err){
                console.log(err)
            }
        })
    }, [])
    return (gameData)
}


export function GetPlayer(){
    const [playerData, setPlayerData] = React.useState([])

    React.useEffect(()=>{
        apiFetch.get('/player')
        .then(response => setPlayerData(response.data))
        .catch(err=>{
            if(err){
                console.log(err)
            }
        })
    }, [])
    return (playerData)
}


export function GetTeam(){
    const [teamData, setTeamData] = React.useState([])

    React.useEffect(()=>{
        apiFetch.get('/team')
        .then(response => setTeamData(response.data))
        .catch(err=>{
            if(err){
                console.log(err)
            }
        })
    }, [])
    return (teamData)
}

export function PostGame(values){

    console.log(values)
    apiFetch.post(`/game`, values)
    .catch(err=>alert(err))
}