import { FC } from "react";
import { Card as CardPrime } from "primereact/card";

type Props = {
    title: string;
    subtitle?: string;
    content: string;
};

const Card: FC<Props> = ({ title, subtitle, content }) => {
    return (
        <div className="">
            <CardPrime title={title} subTitle={subtitle} className="p-4 shadow-lg rounded-lg w-96">
                <p className="mt-2 text-gray-700">{content}</p>
            </CardPrime>
        </div>
    );
};

export default Card;
