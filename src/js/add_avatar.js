onFileSelected = (event) => {
    let selectedFile = event.target.files[0],
        reader = new FileReader(),
        images = document.getElementById('my_image');

    images.title = selectedFile.name;
    reader.onload = (event) => images.src = event.target.result;
    reader.readAsDataURL(selectedFile);
};