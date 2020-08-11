import 'reset-css'
import './css/styles.css'
import './css/responsive.css'
import './js/get_height.js'
import './js/add_avatar.js'

import loanProfile from './js/profile.js'
import loanFriends from './js/friends.js'
import loanPosts from './js/posts.js'

window.onload = function () {
    loanProfile;
    loanFriends;
    loanPosts;
}