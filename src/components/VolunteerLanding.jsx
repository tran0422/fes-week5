import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faHand } from "@fortawesome/free-solid-svg-icons";

const VolunteerLanding = () => {
    return (
        <>
            <section className="volunteer__df">
                <div className="event-volunteer__panel">
                    <p className="event-volunteer__title">Event Volunteers</p>
                    <p className="event-volunteer__description">
                        As an event volunteer, you will play a crucial role in supporting our furry friends as they wait for their forever homes. Your time and care will make a huge difference in the lives of these dogs, and your volunteer work helps them become better prepared for adoption into loving homes. Thank you for making an impact!
                    </p>

                    <div className="event-volunteer__duties">
                        <p className="event-volunteer__subtitle">Your duties include:</p>
                        <ul>
                            <li className="event-volunteer__list">
                                Helping a Dog in Need: Provide care and attention to dogs who may be waiting for adoption, ensuring they feel safe and loved.
                            </li>
                            <li className="event-volunteer__list">
                                Set Up & Teardown of Playpen: Help set up and take down playpens or play areas where dogs can interact and socialize in a safe, controlled environment.
                            </li>
                            <li className="event-volunteer__list">
                                Socializing with Dogs: Spend time engaging with the dogs, offering playtime, training, and socialization to help them develop positive behaviors and better adjust to family life.
                            </li>
                            <li className="event-volunteer__list">
                                Clean Up After the Dogs: Assist with cleaning up after the dogs, including picking up waste, maintaining clean play areas, and ensuring that the surrounding spaces are tidy and hygienic.
                            </li>
                        </ul>
                    </div>

                    <button className="event-volunteer__button" onClick={()=> window.open("https://docs.google.com/forms/d/e/1FAIpQLScelAtkfE0nP76fjOVXA8BUsTiwdj3xxYKt0OBhOuJFIhQX2w/viewform", "_blank")}><FontAwesomeIcon icon={faHand} /> Event Volunteer Form</button>
                </div>
                <div className="event-volunteer__panel">
                    <p className="event-volunteer__title">Foster Volunteers</p>
                    <p className="event-volunteer__description">
                        Since we do not have a shelter or facility, all of our dogs are cared for in private homes, and you could be a vital part of their journey! By fostering, you are directly helping to rescue and rehabilitate dogs who may otherwise have no chance. Your role is essential in giving these dogs the time, care, and love they need before they find their new homes. Thank you for being a lifesaving part of our mission!
                    </p>

                    <div className="event-volunteer__duties">
                        <p className="event-volunteer__subtitle">Your duties include:</p>
                        <ul>
                            <li className="event-volunteer__list">
                                Caring for Dogs in Need: Open your heart and home to dogs rescued from shelters, neglectful situations, or abandonment. You'll provide a safe, loving environment while they recover and prepare for their forever homes.
                            </li>
                            <li className="event-volunteer__list">
                                Providing Updates: Keep us informed of the dog's progress, temperament, and any special needs they may have. This is crucial in helping us match them with the right forever family.
                            </li>
                            <li className="event-volunteer__list">
                                Socializing with the Dogs: Spend time with the dogs, helping them adjust to life outside of the shelter. Whether it's basic training, socializing with other pets, or simply offering companionship, your support helps them become well-adjusted and adoptable.
                            </li>
                            <li className="event-volunteer__list">
                                Cleaning Up After Them: Maintain cleanliness in your foster home by regularly cleaning up after the dogs, including waste management and sanitizing spaces to ensure a healthy environment.
                            </li>
                        </ul>
                    </div>

                    <button className="foster-volunteer__button" onClick={()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLSdMAE5DWEaVC0cI1g77r8a_n0dVe5f4Niqp4fx_xIW69w5DPA/viewform", "_blank")}><FontAwesomeIcon icon={faHouse} /> Foster Volunteer Form</button>
                </div>

            </section>
        </>
    );
}

export default VolunteerLanding;