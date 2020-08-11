export default function getData (url, getValues) {
    fetch(url)
        .then(parseJSON)
        .then(getValues)
}

function parseJSON (res) {
    return res.json();
}