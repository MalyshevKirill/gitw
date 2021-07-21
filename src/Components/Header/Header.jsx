import c from './Header.module.css'
import { useState } from 'react'

const Header = (props) => {
    const [userGitName, setUserGitName] = useState("")

    return(
        <header className={c.header}>
            <input
                type="text"
                className={c.userGitName_input}
                placeholder="Type username"
                value={userGitName}
                onChange={e => setUserGitName(e.target.value)}
            />
            <button className={c.userGitInfo_button} onClick={() => props.CheckGitAcc(userGitName)}>Show</button>
            {props.loadingStatus===1?<p className={c.userGitLoadingStatus}>Loading...</p>:
            props.loadingStatus===404?<p className={c.userGitLoadingStatus}>User not found</p>:
            props.loadingStatus===403?<p className={c.userGitLoadingStatus}>API rate limit exceeded</p>:null}
        </header>
    )
}
export default Header