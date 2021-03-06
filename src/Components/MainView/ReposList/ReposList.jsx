import c from './ReposList.module.css'
import ReposCard from './ReposCard/ReposCard'

const ReposList = (props) => {
    return (
        <ul className={c.reposList}>
            {   
                props.userReposList.map((value, idx)=>{
                    return <ReposCard key={idx} reposName={value.name} reposForks={value.forks} reposStars={value.stargazers_count}></ReposCard>
                })
            }
        </ul>
    )
}
export default ReposList