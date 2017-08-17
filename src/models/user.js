import powerform from 'powerform'
import { required } from 'validatex'

let User =
  powerform({
    firstName: required(true),
    lastName: required(false),
    middleInitial: required(false),
    preferredName: required(false),
    gender: required(false),
    race: required(false),
    dob: required(false),
    maritalStatus: required(false),
    emailAddress: required(false),
    phoneNumber: required(false),
    mobileNumber: required(false)
  })

User.encryptedPassowrd =
  pw => {
    return btoa(pw)
  }

export default User
