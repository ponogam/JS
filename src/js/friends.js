import List from 'list.js'
import getData from "./get_data";

const url = 'https://reqres.in/api/users?page=1';

let getFriends = (data) => {
    data.data.forEach( data => data.link = 'mailto:' + data.email)

    let options = {
        valueNames: [
            'first_name', 'last_name', 'email',
            { name: 'avatar', attr: 'src' },
            { name: 'link', attr: 'href' }
        ],
        item: '<li><img class="avatar" src="" alt=""/>' +
            '<div><span class="first_name"></span><br/>\n' +
            '<span class="last_name"></span><br/>\n' +
            'email: <a class="email link" href=""></a></div></li>',
        page: 3,
        pagination: true
    };
    new List('friends', options, data.data);
}

export default getData(url, getFriends);
