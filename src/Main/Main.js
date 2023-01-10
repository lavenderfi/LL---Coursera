import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Homepage } from "./Homepage"
import { Reservation } from "../Reserve"

function Main () {
    return (
        <div>
<BrowserRouter>
<Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/reserve' element={<Reservation/>}/>
</Routes>
</BrowserRouter>

        </div>
    )
}

export default Main