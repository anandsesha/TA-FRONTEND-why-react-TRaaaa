var input = document.querySelector(`input[type="text"]`);
var rootElm = document.querySelector(`.movies-list`);

var allMovies = [];

{
  /* <li class="movie-card">
        <h2 class="movie-name">Forest Gump</h2>
        <button>To Watch</button>
    </li>
    <br /> */
}

function handleToggle(event, index) {
  allMovies[index].watched = !allMovies[index].watched;
  createUI();
}

function createUI() {
  rootElm.innerHTML = '';
  allMovies.forEach((movie, index) => {
    let li = document.createElement('li');
    let h2 = document.createElement('h2');
    let button = document.createElement('button');
    let br = document.createElement('br');

    li.classList.add('movie-card');
    h2.classList.add('movie-name');
    h2.innerText = movie.name;

    button.innerText = 'To Watch';
    movie.watched ? (button.innerText = 'Watched') : 'To Watch';

    button.addEventListener('click', (event) => {
      handleToggle(event, index);
    });

    li.append(h2, button);
    rootElm.append(li, br);
  });
}

function handleChange(event) {
  if (event.keyCode == 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = '';
    createUI();
  }
}

input.addEventListener('keyup', handleChange);
