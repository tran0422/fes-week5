import GoogleCalendar from "../components/GoogleCalendar";
import VolunteerLanding from "../components/VolunteerLanding";

import '../components/VolunteerLanding.css'
import '../components/GoogleCalendar.css'

const Volunteers = () => {
    return (
        <>
            <VolunteerLanding />
            <GoogleCalendar />
        </>
    );
}

export default Volunteers;