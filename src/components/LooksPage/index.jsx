import { useLocation } from "react-router-dom";

function LooksPage() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const categoria = params.get("categoria");

    return (
        <div className="looks-page">
            <h1>{categoria ? categoria.toUpperCase() : "LOOKS"}</h1>
            <p>Aqui você pode colocar o conteúdo relacionado à categoria selecionada.</p>
        </div>
    );
}

export default LooksPage;
