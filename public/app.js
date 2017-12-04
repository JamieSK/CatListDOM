const app = function() {
  let cats = [
    {name: 'Boba',
    food: 'Sock fluff',
    image: 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg',
    },
    {name: 'Barnaby',
    food: 'Tuna',
    image: 'https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg',
    },
    {name: 'Max',
    food: 'Whiskas Temptations',
    image: 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg',
    },
  ];

  for (cat of cats) {
    addCat(cat);
  }
};

addCat = function(cat) {
  let list = createList();
  let items = createListItems(cat);

  for (item of items) {
    list.appendChild(item);
  }
  appendToCats(list);
};

createList = function() {
  let list = document.createElement('ul');
  list.classList.add('cat');
  return list;
};

createListItems = function(cat) {
  let items = [];

  for (let i = 0; i < 3; i++) {
    items.push(document.createElement('li'));
  }

  items[0].innerHTML = 'Name: ' + cat.name;
  items[1].innerHTML = 'Favourite food: ' + cat.food;

  let image = document.createElement('img');
  image.width = 500;
  image.src = cat.image;
  items[2].appendChild(image);

  return items;
};

appendToCats = function(list) {
  let cats = document.querySelector('#cats');
  cats.appendChild(list);
};

window.onload = app;
