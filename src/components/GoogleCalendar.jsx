
const GoogleCalendar = () => {
    return (
        <>
        <section className="cal__df">
            <p className="cal__title">Volunteer Events Coming Up!</p>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&showTitle=0&src=dDExMjEyMDE5QGdtYWlsLmNvbQ&color=%23039BE5" style={{
                border: '3px solid #ff2c2c',
                borderRadius: '12px',
                height: '600px',
                width: '80%',
                overflow: 'hidden',
                
            }}></iframe>
        </section>
        </>
    );
}

export default GoogleCalendar;