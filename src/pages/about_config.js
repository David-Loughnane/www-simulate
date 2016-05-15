exports.panes = {
  'intro': {
    title: 'Introduction'
  , description: 'Hello@hello heeelllo ehhhhasdw lllll'
  }
, 'motive': {
    title: 'Motivation'
  , description: "Motivational speech <br> <b>blub blub</b>"
  }
, 'content': {
    title: 'Content-Addressing'
  , description: 'dear content'
  }
, 'cache': {
    title: 'Caching'
  , description: 'Caught youg'
  }
, 'algo': {
    title: 'Algorithm'
  , description: 'Bob dole'
  }
, 'who': {
    title: 'Who is behind it?'
  , description: 'Kin Leung'
  }
}

exports.render = section => {
  var el = document.createElement( 'html' );
  el.innerHTML = section.description
  return (h, store) => {
    return h`<div class='section'>
      <h2 class='title'>${section.title}</h2>
      <p class='description'>${el}</p>
    </div>`
  }
}
