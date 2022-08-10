import ReactMarkdown from "react-markdown";
import fs from "fs";

export default function Page({content}) {
    console.log(content);

    return (
        <ReactMarkdown>
            {content}
        </ReactMarkdown>
    )
}

export async function getServerSideProps(ctx) {
    return {
        props: {
            content: fs.readFileSync(`./md/${ctx.params.page}.md`).toString("utf8")
        }
    }
}
