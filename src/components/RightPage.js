import heart1 from "../assets/heart1.svg"
import heart2 from "../assets/heart2.svg"

export default function RightPage({users}) {
    return (
        <>
            <h1>Favorites</h1>
            <div className="usersContainer rightContainer">
                {users.map((user, key) => {
                    if (user.favorite) {
                    return(
                <div className="oneUser" key={key}>
                    <div className="userInfo">
                    <img src={user.avatar}/>
                    </div>
                    <div className="userInfo">
                        {user.first_name} {user.last_name}<br/>{user.email}
                    </div>
                    <div className="heart">
                    <img src={user.favorite ? heart2 : heart1}/>
                    </div>
                </div>)}
                })}
            </div>
        </>
    )
}