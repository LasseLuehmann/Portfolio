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

    if (firstName.length < 5) {
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
function activateSubmit() {

    const firstName = document.registration.first_name.value
    const lastName = document.registration.last_name.value
    const email = document.registration.email.value
    const submitBtn = document.getElementById('submit')

    if (email.length > 0 && firstName.length > 0 && lastName.length > 0) {
        // remove 'submit-disabled' class from submit button
        submitBtn.classList.remove('submit-disabled')
    } else {
        // add 'submit-disabled' class if it doesn't exist
        submitBtn.classList.add('submit-disabled')
    }
}
function countText() {
    const textareaCnt = document.registration.message.value.length
    const para = document.getElementById('text-count')

    if (textareaCnt == 100) {
        // change the text color to green
        para.style.color = '#020'
    } else {
        // change the text color to red
        para.style.color = '#900'
    }
    para.textContent = textareaCnt + "/100"
}