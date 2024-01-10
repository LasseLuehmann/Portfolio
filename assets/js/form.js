function validation() {

    const firstName = document.registration.first_name.value
    const lastName = document.registration.last_name.value
    const email = document.registration.email.value
    const gender = document.registration.gender.value
    const country = document.registration.country.value

    if (email.endsWith("@dci-student.org") == false) {
        alert ("Email should end with @dci-student.org! You'll be terminated!!") 
        return false 
    }

    if (firstName.length < 8) {
        alert ("the name should be atleast 8 charecters long") 
        return false 
    }

    if (lastName.length == 0) {
        alert ("Last Name must be provided!")
        return false 
    }

    if (country == "usa" && gender != "female") {
        alert ("We only register females in USA")
    }
}
