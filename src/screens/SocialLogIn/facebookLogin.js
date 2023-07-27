import {
    GraphRequest,
    LoginManager,
    GraphRequestManager,
} from 'react-native-fbsdk-next';


// comment


export const onFacebookButtonPress = (resCallback) => {
    //  
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(["email", "public_profile"]).then(
        result => {
            
            if (result.declinedPermissions && result.declinedPermissions.includes("email")) {
                resCallback({ message: "Email is required" })
            }
            if (result.isCancelled) {
                
            }
            else {
                const infoRequest = new GraphRequest('/me?fields=email,name,picture,friend', null, resCallback);
                new GraphRequestManager().addRequest(infoRequest).start()
            }
        },
        function (error) {
            
        }
    )
}

export const fblogin = async () => {
    try {
        await onFacebookButtonPress(_responseInfoCalback);
    } catch (error) {
        

    }
}

const _responseInfoCalback = async (error, result) => {
    if (error) {
        
    }
    else {
        const userData = result;
        
    }


}

//   return (
//     <View>

//       {/* <LoginButton
//           onLoginFinished={
//             (error, result) => {
//               if (error) {
//                 
//               } else if (result.isCancelled) {
//                 
//               } else {
//                 AccessToken.getCurrentAccessToken().then(
//                   (data) => {
//                     
//                   }
//                 )
//               }
//             }
//           }
//           onLogoutFinished={() => 
//           /> */}
//           {/* <Button title={'Login with Facebook'} onPress={() => {
// LoginManager.logInWithPermissions(["public_profile", "email"]).then(
// function (result) {
// if (result.isCancelled) {
// alert("Login Cancelled " + JSON.stringify(result))
// } else {
// alert("Login success with  permisssions: " + result.grantedPermissions.toString());
// alert("Login Success " + result.toString());
// }
// },
// function (error) {
// alert("Login failed with error: " + error);
// }
// )
// }} /> */}
//       <TouchableOpacity style={style.fbbtn} onPress={fblogin}>
//         <Image style={style.image} source={require('../../assets/ic_socialogin/facebook.png')} />
//         <Text style={style.btntxt}>Continue with facebook</Text>
//       </TouchableOpacity>
//     </View>
//   );


