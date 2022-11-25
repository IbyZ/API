const cargarPeliculas = async() => {
	const respuesta = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473");
    console.log(respuesta);
}
cargarPeliculas();