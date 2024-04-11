import BtnCreate from "../createAccount/CreateNewAccount"

function Login() {

    const loginBtn = {
        backgroundColor: "blue",
        color: "white",
        fontSize: "20px"
}

    return (

        <div id="Login-container">
            <form id="Login-form-container">

                <div className="input-container">
                    <input type="text" placeholder="Email address or Phone number" />
                </div>

                <div className="input-container">
                    <input type="password" placeholder="Password" />
                </div>

                <div>
                    <button style={loginBtn}>Log in</button>
                </div>
            </form>
            <p>Forgotten password?</p>
            <hr />
            <BtnCreate />
        </div>
    )
}

export default Login