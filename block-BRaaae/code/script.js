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

// function createElement(type, attr = {}, ...children) {
//   let element = document.createElement(type);

//   for (let key in attr) {
//     if (key.startsWith('data-')) {
//       element.setAttribute(key, attr[key]);
//     } else if (key.startsWith('on')) {
//       let eventType = key.replace('on', '').toLowerCase();
//       element.addEventListener(eventType, attr[key]);
//     } else {
//       element[key] = attr[key];
//     }
//   }

//   children.forEach((child) => {
//     if (typeof child === 'object') {
//       element.append(child);
//     }
//     if (typeof child === 'string') {
//       let node = document.createTextNode(child);
//       element.append(node);
//     }
//   });

//   return element;
// }

function createUI() {
  //   rootElm.innerHTML = '';

  let allMoviesUI = allMovies.map((movie, index) => {
    let li = React.createElement(
      'li',
      {
        className: 'movie-card',
      },
      React.createElement(
        'h2',
        {
          className: 'movie-name',
        },
        movie.name
      ),
      React.createElement(
        'button',
        {
          id: index,
          onClick: (event) => {
            handleToggle(event, index);
          },
        },
        // The same way onClick can be passed in a HTML element as attribute like class. Hence passing as attribute.
        movie.watched ? 'Watched' : 'To Watch'
      ),
      React.createElement('br')
    );

    // rootElm.append(li);
    return li;
  });

  ReactDOM.render(allMoviesUI, rootElm);
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
