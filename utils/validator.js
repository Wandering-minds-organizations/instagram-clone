const registerValidation = (body) => {
    const { email, password} = body

    let error = null

    if(!email || !password) {
        error = 'Please fill all fields'
    }

    return error
}

module.exports = { registerValidation }