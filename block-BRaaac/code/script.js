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

function createElement(type, attr = {}, ...children) {
  let element = document.createElement(type);

  for (let key in attr) {
    if (key.startsWith('data-')) {
      element.setAttribute(key, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }

  children.forEach((child) => {
    console.log(typeof child);
    if (typeof child === 'object') {
      element.append(child);
    }
    if (typeof child === 'string') {
      let node = document.createTextNode(child);
      element.append(node);
      console.log(element);
    }

    if (child === 'button') {
      child.innerText = 'To Watch';
      movie.watched ? (child.innerText = 'Watched') : 'To Watch';
    }
  });

  return element;
}

function createUI() {
  rootElm.innerHTML = '';
  allMovies.forEach((movie, index) => {
    // let li = document.createElement('li');
    // let h2 = document.createElement('h2');
    // let button = document.createElement('button');
    // let br = document.createElement('br');

    let li = createElement(
      'li',
      {
        className: 'movie-card',
      },
      createElement(
        'h2',
        {
          className: 'movie-name',
        },
        movie.name
      ),
      createElement('button', {}),
      createElement('br')
    );

    // movie.watched ? (button.innerText = 'Watched') : 'To Watch';

    // button.addEventListener('click', (event) => {
    //   handleToggle(event, index);
    // });

    // li.append(h2, button);
    rootElm.append(li);
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
