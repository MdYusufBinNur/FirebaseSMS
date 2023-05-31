const {firebase} = require('firebase/app');
const {getAuth} = require('firebase/auth');
const {PhoneAuthProvider} = require('firebase/auth');
const config = require('config');

module.exports = {
    sendSMS: async (req, res) => {

        const app = firebase.initializeApp()
        const auth = app.auth();
        const provider = new PhoneAuthProvider(auth);
        console.log(provider)
        const {phone} = req.body
        // const phoneNumber = '+8801815627375';

        console.log(phone)
        return res.status(200).json({error: true, message: 'List', phone})
        // phoneAuthProvider.verifyPhoneNumber(phoneNumber, {
        //     timeout: 60000,
        //     resendToken: true,
        //     verificationCallbacks: {
        //         success: function (verificationId, forceResendingToken) {
        //             console.log(verificationId)
        //             console.log(forceResendingToken)
        //         },
        //         error: function (error) {
        //             // An error occurred while verifying the user's phone number.
        //             // Handle the error accordingly.
        //             console.log(error)
        //         }
        //     }
        // });

    },
}