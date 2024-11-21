import './LoginForm.css'
import MyButton from "../MyButton/MyButton";

function LoginForm() {
    // @ts-ignore
    return (
        <>
            <h1>Realtime Communication With KMS</h1>
            <form id="login-form">
                <input type="text" id="username" placeholder="Enter your name" required/>
                <MyButton name={'Submit'} />
                {/*<button type="submit">Submit</button>*/}
            </form>
        </>
    );
}

export default LoginForm