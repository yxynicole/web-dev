


const NavigationSidebar = () => {
    return(`
            <ul class="list-group list-group-margin">
                <li class="list-group-item "><i class="fab fa-twitter left-column-icons"></i></li>
                <li class="list-group-item "><i class="fas fa-home left-column-icons"></i>Home</li>
                <li class="list-group-item active"><i class="fas fa-hashtag left-column-icons"></i>Explore</li>
                <li class="list-group-item "><i class="fas fa-bell left-column-icons"></i>Notifications</li>
                <li class="list-group-item "><i class="fas fa-envelope left-column-icons"></i>Messages</li>
                <li class="list-group-item"><i class="fas fa-bookmark left-column-icons"></i>Bookmarks</li>
                <li class="list-group-item"><i class="fas fa-list left-column-icons"></i>Lists</li>
                <li class="list-group-item"><i class="fas fa-user-alt left-column-icons"></i>Profile</li>
                <li class="list-group-item"><i class="fas fa-ellipsis-h left-column-icons"></i>More</li>
                <button type="button" class="btn btn-primary form-control wd-buttons">
                    Tweet
                </button>
            </ul> 
        `);
}

export default NavigationSidebar;
