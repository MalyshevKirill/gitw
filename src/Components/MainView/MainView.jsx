import c from './MainView.module.css'
import UserInfo from './UserInfo/UserInfo'
import ReposList from './ReposList/ReposList'

const MainView = (props) => {
    return(
        <main className={c.main}>
            <UserInfo userInfo={props.userInfo}></UserInfo>
            <ReposList userReposList={props.userReposList}></ReposList>
        </main>
    )
}
export default MainView