import List from 'list.js'
import getData from "./get_data";

const url = 'https://jsonplaceholder.typicode.com/posts';

let getPosts = (data) => {
    let options = {
            valueNames: [ 'title', 'body', ],
            item: '<li class="post"><h2 class="title"></h2><p class="body"></p></li>'
        };
    new List('posts', options, data);
}

export default getData(url, getPosts);