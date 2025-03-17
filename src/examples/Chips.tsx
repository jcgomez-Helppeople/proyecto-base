import { useState } from "react";
import Chips from "../components/Chips";

const ChipsExample = () => {
    const [tags, setTags] = useState<string[]>([]);

    return (
        <Chips
            value={tags}
            onChange={setTags}
        />
    );
};

export default ChipsExample;
