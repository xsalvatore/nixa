const ProfileDisplay = () => {
    return (
        <div className='display-profile-container'>
           <div className="display-profile">
                <header>
                    <div className="profile-summary">
                        <p>Leanne Graham</p>
                        <p>1-770-736-8031 x56442</p>
                    </div>

                    <button>Log out</button>
                </header>

                <div className="profile-complete-wrapper">
                    <div className='profile-complete'>
                        <div className="left-column">
                            <p>Leanne Graham</p>
                            <p>1-770-736-8031 x56442</p>
                            <p>Sincere@april.biz</p>
                        </div>
                        <div className="right-column">
                            <p>Street: Victor Plains</p>
                            <p>City: Wisokyburgh</p>
                            <p>Suit: Apt. 556</p>
                            <p>Zip: 92998-3874</p>
                            <p>Website: hideguard.org</p>
                            <p>Company Name: Romaguera-Crona</p>
                        </div>
                    </div>
                </div>

                <footer>
                    <p>Nixa 2022</p>
                </footer>
           </div>
        </div>
    );
}

export default ProfileDisplay;