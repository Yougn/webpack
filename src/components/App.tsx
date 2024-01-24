import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import classes  from './App.module.scss'
import AvatarPng from '@/assets/avatar.png'
import AvatarJpg from '@/assets/avatar.jpg'
import Calendar from '@/assets/app-image.svg'

export const App = () => {
    const [count, setCount] = useState<number>(0)
    const increment = () => setCount(prev => prev + 1)

    // if(__PLATFORM__ === 'mobile') {
    //     return(<div>ISMOBILE</div>)
    // }

    // if(__PLATFORM__ === 'desktop') {
    //     return(<div>ISDESKTOP</div>)
    // }
    
    return (
        <div dada-testid={'App.DataTestId'}>
            <div>
                <h1 dada-testid={'Platform'}>__PLATFORM__:{__PLATFORM__}</h1>
                <div>
                    <img width={100} height={100} src={AvatarPng} />
                    <img width={100} height={100} src={AvatarJpg} />
                </div>
                <Link to={'/about'}>about</Link>
                <br />
                <Link to={'/shop'}>shop</Link>
                <br />
                <h1>{count}</h1>
                <button className={classes.button} onClick={increment}>click</button>
            </div>
            <Outlet />
        </div>
    )
}