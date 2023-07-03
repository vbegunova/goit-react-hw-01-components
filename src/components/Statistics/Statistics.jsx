import { StatList } from "./StatList/StatList";

export const Statistics = ({ data }) => {
    return (
        <section>
            <h2>Upload stats</h2>
            <StatList data/>
        </section>
    );
}