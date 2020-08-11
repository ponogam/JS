import getData from "./get_data";

const avatar = document.getElementById('my_image'),
      fullname = document.getElementById('fullname'),
      email = document.getElementById('email'),
      phone = document.getElementById('phone'),
      address = document.getElementById('address'),
      url = 'https://randomuser.me/api/';

let getProfile = (profile) => {
    avatar.src = profile.results[0].picture.large;
    fullname.innerHTML = profile.results[0].name.first + ' ' + profile.results[0].name.last;
    email.innerHTML = profile.results[0].email;
    email.href = 'mailto:' + profile.results[0].email;
    phone.innerHTML = profile.results[0].phone;
    phone.href = 'tel:' + profile.results[0].phone;
    address.innerHTML = profile.results[0].location.country + ', ' +
                        profile.results[0].location.city + ', ' +
                        profile.results[0].location.street.name + ' ' +
                        profile.results[0].location.street.number + ', ' +
                        profile.results[0].location.postcode;
}

export default getData(url, getProfile);