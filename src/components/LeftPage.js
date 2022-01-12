import { useEffect, useState } from "react"
import heart1 from "../assets/heart1.svg"
import heart2 from "../assets/heart2.svg"


function researchUsers(users, label) {
    return users.filter((user) => user.first_name.includes(label) || user.last_name.includes(label) ||user.email.includes(label) )
}


export default function LeftPage({users, setUsers, favoris, setFavoris}) {
    const [searchUser, setSearchUser] = useState([])

    useEffect(() => {
        setSearchUser(users)
    }, [users])
    
    function handleFavorite(id) { 
        users.forEach(element => {
            if (id == element.id) {
                element.favorite = !element.favorite
                if (element.favorite){
                    console.log(favoris)
                    favoris = [...favoris, id]
                    localStorage.setItem("favoris", JSON.stringify(favoris));
                    setFavoris([...favoris])
                } 
                else {
                    favoris = favoris.filter(item => item !== id)
                    localStorage.setItem("favoris", JSON.stringify(favoris));
                    setFavoris(favoris)
                }
            }
        })
        setUsers([...users])
    }
    
    return (
        <>
            <h1>My contacts</h1>
            <input placeholder="rechercher" type="text" onChange={(e) => 
                setSearchUser(researchUsers(users, e.target.value))}></input>
            <div className="usersContainer">
                {searchUser.map((user, key) => {
                    return(
                <div className="oneUser" key={key}>
                    <div className="userInfo">
                    <img src={user.avatar}/>
                    </div>
                    <div className="userInfo">
                        {user.first_name} {user.last_name}<br/>{user.email}
                    </div>
                    <div className="heart" onClick={() => {handleFavorite(user.id)}}>
                    <img src={user.favorite ? heart2 : heart1}/>
                    </div>
                </div>)
                })}
            </div>
        </>
    )
}