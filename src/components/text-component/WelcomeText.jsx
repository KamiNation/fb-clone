import IndexForm from "../index-form/IndexForm"


function WelcomeText() {
    return (
        <div id="WelcomeText-container">

            <div id="left">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
                <h2>Facebook helps you connect and share with the people in your life.</h2>
            </div>
            <div id="right">
                <IndexForm />
            </div>

        </div>
    )
}

export default WelcomeText