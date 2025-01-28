import PageTitle from "../components/PageTitle";

function Works() {
    return (
        <>
            <PageTitle title="WORKS | Hazorah" />
            <div className="works-container">
                <div className="header">
                    <h2>Welcome to my works</h2>
                    <p>
                        This page contains all of my works over the years. If
                        any one of these tickles your fancy, feel free to click
                        on them to learn more or head over to their github page.
                    </p>
                </div>
                <div className="works"></div>
            </div>
        </>
    );
}

export default Works;
