import {auth} from './Firebase' 

const logout = () => {
    return auth.signOut()
}

export default logout;