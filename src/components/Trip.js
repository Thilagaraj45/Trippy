import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/indonesia.jpg"
import Trip2 from "../assets/maldives.jpg"
import Trip3 from "../assets/thailand.jpg"


function Trip () {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using google map</p>
            <div className="tripcard">

<TripData 
                image = {Trip1}
                heading = "Trip in Indonesia"
                text = "Indonesia, officially the Republic of Indonesia, is an island nation in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
                />
 <TripData 
                image = {Trip2}
                heading = "Trip in Maldives"
                text = "The Maldives, officially the Republic of Maldives, is an archipelagic state and country in South Asia, situated in the Indian Ocean. It lies southwest of Sri Lanka and India, about 750 kilometres from the Asian continent's mainland."
                />
<TripData 
                image = {Trip3}
                heading = "Trip in Thailand"
                text = "Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha. In Bangkok, the capital, an ultramodern cityscape rises next to quiet canalside communities and the iconic temples of Wat Arun, Wat Pho and the Emerald Buddha Temple (Wat Phra Kaew). Nearby beach resorts include bustling Pattaya and fashionable Hua Hin."
                />                
            </div>
        </div>
   
    )
}
export default Trip;
