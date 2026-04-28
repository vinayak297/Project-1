import { Link } from "react-router-dom";

function Home() {
    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1>Welcome</h1>

            <Link to="/translator">
                <button>Go to Translator</button>
            </Link>
        </div>
    );
}

export default Home;