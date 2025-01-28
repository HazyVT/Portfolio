import { useNavigate } from "react-router-dom";

function Footer() {
    const nav = useNavigate();

    function InternalLink(props: { text: string; path: string }) {
        return (
            <li className="list-el" onClick={() => nav(props.path)}>
                {props.text}
            </li>
        );
    }

    function ExternalLink(props: { text: string; path: string }) {
        return (
            <li className="list-el">
                <a href={props.path}>{props.text}</a>
            </li>
        );
    }

    return (
        <footer>
            <div>
                <h4>Site Links</h4>
                <ul>
                    <InternalLink text="Home" path="/" />
                    <InternalLink text="Works" path="/works" />
                </ul>
            </div>
            <div>
                <h4>Find Me</h4>
                <ul>
                    <ExternalLink
                        text="Github"
                        path="https://github.com/hazyvt"
                    />
                    <ExternalLink
                        text="ItchIo"
                        path="https://hazyautumnrain.itch.io"
                    />
                    <ExternalLink
                        text="Backloggd"
                        path="https://backloggd.com/u/Hazorah"
                    />
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
