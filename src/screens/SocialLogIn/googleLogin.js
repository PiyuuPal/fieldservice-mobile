import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import { useDispatch } from 'react-redux';
import { hitgoogleLogin } from '@/actions/UserActions';


export const googleSign = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        GoogleSignin.configure();
        await GoogleSignin.signOut();
        const userInfo = await GoogleSignin.signIn();
        
        alert(JSON.stringify(userInfo?.user))
    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            
            
        } else if (error.code === statusCodes.IN_PROGRESS) {
            
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            
        } else {
            
        }
    }
}

export async function appleLogin() {
    
  // performs login request
  const authRes = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  });
  

}