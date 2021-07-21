import './App.css';
import { useState } from 'react';
import Header from './Components/Header/Header'
import MainView from './Components/MainView/MainView'

function App() {
  const [loadingStatus, setLoadingStatus] = useState(0)
  const [userInfo, setUserInfo] = useState(null)
  const [userReposList, setUserReposList] = useState([])

  const CheckGitAcc = (userName) => {
    setLoadingStatus(1);
    fetch('https://api.github.com/users/' + userName)
      .then(responce => 
        {
          if(responce.status===200) {
            return responce.text()
          }
          else {
            setLoadingStatus(responce.status)
            return null
          }        
        }
      )
      .then(
          (result) => {
            if(result !== null) {
              result = JSON.parse(result)
              setUserInfo(result)
            }
          }
        )
      fetch('https://api.github.com/users/' + userName + '/repos')
      .then(responce => 
        {
          if(responce.status===200) {
            return responce.text()
          }
          else {
            setLoadingStatus(responce.status)
            return null
          }        
        }
      )
      .then(
          (result) => {
            if(result !== null) {
              result = JSON.parse(result)
              setUserReposList(result)
              setLoadingStatus(2)
            }
          })
  }

  return (
    <div className="App">
        <Header CheckGitAcc={CheckGitAcc} loadingStatus={loadingStatus}></Header>
        {loadingStatus===2?<MainView userInfo={userInfo} userReposList={userReposList}></MainView>:null}
    </div>
  );
}

export default App;
