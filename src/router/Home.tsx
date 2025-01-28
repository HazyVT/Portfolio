import GameLog from "../components/GameLog";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import { BsGithub } from "react-icons/bs";
import { FaItchIo } from "react-icons/fa";

function Home() {
    return (
        <>
            <PageTitle title="HOME | Hazorah" />
            <div className="home-container">
                <h2 className="welcome">Welcome</h2>
                <img src="/image.png" />
                <h3>I am Hazy.</h3>
                <p className="tag-container">
                    <span className="tag0">Programmer</span>
                    {" | "}
                    <span className="tag1">Developer</span>
                    {" | "}
                    <span className="tag2">Gamer</span>
                </p>
                <div className="icon-container">
                    <BsGithub
                        onClick={() =>
                            (window.location.href = "https://github.com/hazyvt")
                        }
                    />
                    <FaItchIo
                        onClick={() =>
                            (window.location.href =
                                "https://hazyautumnrain.itch.io")
                        }
                    />
                </div>
                <div className="about-me">
                    <h2 className="heading">About Me</h2>
                    <div className="text">
                        <p>
                            Hello and welcome to my website. I am a programmer
                            who likes to make web apps and games. I live and
                            breath gruvbox and will die on the hill that gruvbox
                            is the best theme ever created.
                        </p>
                        <p>
                            I am a software development major working on my own
                            projects on the side when I do not have a job,
                            commission or game jam to work on. ALl of my
                            personal projects can be found on my github page if
                            you would like to see that.
                        </p>
                        <p>
                            I have worked on a lot of games with my friends, all
                            of which can be found on our teams{" "}
                            <a href="https://sleepyowlstudios.itch.io">
                                itch page
                            </a>
                            .
                        </p>
                    </div>
                </div>
                <GameLog />
                <Footer />
            </div>
        </>
    );
}

export default Home;
