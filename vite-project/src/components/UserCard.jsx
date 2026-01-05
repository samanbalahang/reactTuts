import React from 'react'; 

function UserCard(props){
    return (
        <div>
            <h2>
                نام: 
                {props.name}
            </h2>
            <p>
                شغل:
                {props.job}
            </p>
            <p>
                وضعیت:
                {props.isOnline ? "🔴 آفلاین" : "🟢 آنلاین"}
            </p>
        </div>
    )
}
export default UserCard;