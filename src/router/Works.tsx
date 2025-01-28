import PageTitle from "../components/PageTitle";

function Works() {
    function WorkItem(props: { image: string; path: string; name: string }) {
        return (
            <div
                className="work-item"
                onClick={() => (window.location.href = props.path)}
            >
                <img src={props.image} />
                <h4>{props.name}</h4>
            </div>
        );
    }

    return (
        <>
            <PageTitle title="WORKS | Hazorah" />
            <div className="works-container">
                <div className="header">
                    <h2>Welcome to my works</h2>
                    <p>
                        This page contains all of my works over the years. If
                        any one of these tickles your fancy, feel free to click
                        on them to head over to their github page.
                    </p>
                </div>
                <div className="works">
                    <WorkItem
                        image="/slifer-thumbnail.png"
                        path="https://slifer.hazyvt.com"
                        name="Slifer Game Framework"
                    />
                    <WorkItem
                        image="/bobazilla-thumbnail.png"
                        path="https://sleepyowlstudios.itch.io/bobazilla"
                        name="Bobazilla"
                    />
                </div>
            </div>
        </>
    );
}

export default Works;
