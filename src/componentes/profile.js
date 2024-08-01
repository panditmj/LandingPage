import{useState} from 'react'
function Profile(){
    // if/else/elseif
    const[loggedIn, setLoggedIn] = useState(4)
    return(
        // <div>
        //     {
        //         loggedIn?<h1>welcome Nisha</h1>:
        //         <h1>welcome guest</h1>
        //     }
        // </div>
        <div>
         {
            loggedIn == 1?
            <h1>welcome user 1</h1>:
            loggedIn == 2?<h1>welcome user 2</h1>:
            loggedIn == 3?<h1>welcome user 3</h1>:
            <h1>welcome guest</h1>

         }
        </div>
    )
}
export default Profile