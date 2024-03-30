
import Navbar from "./Navbar"
import Card from "./Card"


export default function Products(){
    return(
        <>
            <Navbar />
            <div className="products">
            
                <div className="cards">
                    <Card id={1} />
                    <Card id={2} />
                    <Card id={3} />
                    <Card id={4} />
                    <Card id={5} />
                    <Card id={6} />
                    <Card id={7} />
                    <Card id={8} />
                </div>
                
            </div>
            
           
        </>
    )
}