import TruthContext from "./TruthContext/TruthContext";
import {useContext} from "react";



const First = () => {
    const myVal = useContext(TruthContext)
    return (
        <>
            {myVal && <strong>I love eggs baby</strong>}
        </>
    )
}
export default First