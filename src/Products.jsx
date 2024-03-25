
import Navbar from "./Navbar"
import Card from "./Card"


export default function Products(){
    return(
        <>
            <Navbar />
            <div className="products">
            
                <div className="cards">
                    <Card id={1} />
                    <Card id={1} />
                    <Card id={1} />
                    <Card id={1} />
                </div>
                
            </div>
            
           
        </>
    )
}