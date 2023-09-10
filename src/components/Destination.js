import taj1 from "../assets/taj1.jpg"
import taj2 from "../assets/taj2.jpg"
import paris1 from "../assets/paris1.jpg"
import paris2 from "../assets/paris2.jpg"
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"


const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot , within a time frame</p>
           
        <DestinationData
        className = "first-des"
        heading = "Taj Mahal, INDIA - Symbol of Love"
        text = "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself."
        img1 = {taj1} img2 = {taj2}
        />

       <DestinationData
        className = "first-des-reverse"
        heading = "Eiffel Tower, Paris"
        text = "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. Constructed from 1887, it is named after the engineer Gustave Eiffel, whose company designed and built the tower. Locally nicknamed La dame de fer, it was constructed from 1887 to 1889 as the centerpiece of the 1889 World's Fair."
        img1 = {paris1} img2 = {paris2}
        />

        </div>

    )
}
export default Destination;