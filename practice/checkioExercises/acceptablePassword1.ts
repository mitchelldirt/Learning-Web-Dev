// password must be bigger than 6 characters.
function isAcceptablePassword(password: string): boolean {
    let passwordLength: Number = password.length;
    if (passwordLength <= 6) {
        return false;
    } else {
        return true;
    }
}