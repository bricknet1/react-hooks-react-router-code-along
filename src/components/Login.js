function Login() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input type="text" name="password" placeholder="password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}

export default Login