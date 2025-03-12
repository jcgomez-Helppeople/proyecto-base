import { useState } from "react";
import InputOtp from "../components/InputOtp";

const InputOtpExample = () => {
    const [otp, setOtp] = useState("");

    return (
        <InputOtp
            value={otp}
            onChange={setOtp}
            length={6}
        />
    );
};

export default InputOtpExample;
