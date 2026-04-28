import { useState, useCallback, useEffect } from "react";

function Generator() {
    const [length, setLength] = useState(8);
    const [result, setResult] = useState("");
    const [auto, setAuto] = useState(false);

    const generateString = useCallback(() => {
        const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let str = "";
        for (let i = 0; i < Number(length); i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setResult(str);
    }, [length]);

    // ✅ Auto-generate every 1 second
    useEffect(() => {
        let interval;

        if (auto) {
            interval = setInterval(() => {
                generateString();
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [auto, generateString]);

    // ✅ Copy function
    const copyToClipboard = () => {
        if (!result) return;
        navigator.clipboard.writeText(result);
        alert("Copied to clipboard!");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1>Random String Generator</h1>

            <div style={{ marginTop: "20px" }}>
                <input
                    type="number"
                    min="1"
                    max="50"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                    placeholder="Length"
                />

                <label style={{ marginLeft: "10px" }}>
                    <input
                        type="checkbox"
                        checked={auto}
                        onChange={(e) => setAuto(e.target.checked)}
                    />
                    Auto-generate
                </label>
            </div>

            <div style={{ marginTop: "20px" }}>
                <button onClick={generateString}>Generate</button>
                <button
                    onClick={copyToClipboard}
                    style={{ marginLeft: "10px" }}
                >
                    Copy
                </button>
            </div>

            <p style={{ marginTop: "20px", fontSize: "20px" }}>
                {result}
            </p>
        </div>
    );
}

export default Generator;