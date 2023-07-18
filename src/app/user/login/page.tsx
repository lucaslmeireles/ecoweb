async function LoginUser() {

}

function handleLogin() {

}
export default function Login() {
    return (
        <main className="flex flex-col w-screen h-screen items-center align-middle">
            <form className="flex flex-col w-5/12 " onSubmit={handleLogin} method="POST">
                <input type="email" name="email" id="" />
                <input type="text" name="passqord" id="" />
                <button type="button">Enviar</button>
            </form>
        </main>
    )
}