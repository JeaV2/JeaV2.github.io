function handleForm(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
} 