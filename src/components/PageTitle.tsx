import { useEffect } from "react";

function PageTitle(props: { title: string }) {
    useEffect(() => {
        document.title = props.title;
    }, []);

    return null;
}

export default PageTitle;
