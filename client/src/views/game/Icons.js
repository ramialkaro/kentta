import React from 'react'
import {
    SportsTennis as Tennis,
    SportsBasketball as Basketball,
    SportsBaseball as Baseball,
    SportsRugbyTwoTone as Rugby,
    SportsSoccer as Football,
    SportsCricket as Cricket,
    SportsGolf as Golf,
    SportsMma as Mma,
    SportsKabaddi as Kabaddi,
    SportsHockey as Hocky,
    Sports as Other,
    SportsVolleyball as Vollyball,
    Rowing
} from '@material-ui/icons/'

const Icon = (props) => {
    switch (props.type) {
        case 'Tennis':
            return <Tennis {...props}/>
        case 'Basketball':
            return <Basketball {...props}/>
        case 'Baseball':
            return <Baseball {...props}/>
        case 'Football':
            return <Football {...props}/>
        case 'Cricket':
            return <Cricket {...props}/>
        case 'Golf':
            return <Golf {...props}/>
        case 'Mma':
            return <Mma {...props}/>
        case 'Kabaddi':
            return <Kabaddi {...props}/>
        case 'Hocky':
            return <Hocky {...props}/>
        case 'Other':
            return <Other {...props}/>
        case 'Vollyball':
            return <Vollyball {...props}/>
        case 'Rowing':
            return <Rowing {...props}/>
        default:
            return <Rugby {...props}/>

    }
}

export default Icon

/*
<Tennis />, Football: <Football />, Basketball: <Basketball />, Cricket: <Cricket />,
Golf: <Golf />, Mma: <Mma/>, Kabaddi: <Kabaddi/>, Hocky: <Hocky/>, Rugby: <Rugby/>, Other: <Other/>,
Vollyball: <Vollyball/>, Rowing: <Rowing/> */
