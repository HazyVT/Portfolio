import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function PageTitle(props: { title: string }) {
    const loc = useLocation();

    useEffect(() => {
        document.title = props.title;
    }, []);

    return null;
}

export default PageTitle;
