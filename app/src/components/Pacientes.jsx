const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function Pacientes() {
    console.log(VITE_API_BASE_URL)
    return (
        <>
          <h1>Area de pacientes</h1>
          <p>{VITE_API_BASE_URL}</p>
        </>
    )
}

