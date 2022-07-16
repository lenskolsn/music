const songs = [
  {
    id: 1,
    name: "Cơn Mưa Ngang Qua",
    author: "Sơn Tùng MTP",
    avatar: "./assets/images/cmnq.png",
    path: "./assets/song/cmnq.mp3",
  },
  {
    id: 2,
    name: "Em Của Ngày Hôm Qua - Onionn Remix",
    author: "Sơn Tùng MTP",
    avatar: "./assets/images/ecnhq.png",
    path: "./assets/song/ecnhq.mp3",
  },
  {
    id: 3,
    name: "Có chắc yêu là đây - Onionn Remix",
    author: "Sơn Tùng MTP",
    avatar: "./assets/images/ccyld.jpg",
    path: "./assets/song/ccyld.mp3",
  },
  {
    id: 4,
    name: "Có chắc yêu là đây",
    author: "Sơn Tùng MTP",
    avatar: "./assets/images/ccyld1.jpg",
    path: "./assets/song/ccyld1.m4a",
  },
  {
    id: 5,
    name: "Muộn rồi mà sao còn",
    author: "Sơn Tùng MTP",
    avatar: "./assets/images/mrmsc.jpg",
    path: "./assets/song/mrmsc.mp3",
  },
  {
    id: 6,
    name: "Chúng ta của hiện tại",
    author: "Sơn Tùng MTP",
    avatar: "./assets/images/ctcht.jpg",
    path: "./assets/song/ctcht.mp3",
  },
];

let isPlay = true;
let indexSong = 0;
let firstSong = songs[indexSong];

let btnPlay = document.querySelector(".play-btn i");
let btnPrev = document.querySelector(".prev-btn i");
let btnNext = document.querySelector(".next-btn i");

let songAvatar = document.querySelector(".song-avatar");
let songName = document.querySelector(".song-info h3");
let songAuthor = document.querySelector(".song-info h5");
let urlAvatar = document.querySelector(".song-avatar img");
let audio = document.querySelector(".audio");
let lists = document.querySelector(".lists");

audio.setAttribute("src", firstSong.path);
songName.innerHTML = firstSong.name;
songAuthor.innerHTML = firstSong.author;
urlAvatar.setAttribute("src", firstSong.avatar);

// Render HTML
songs.forEach((e) => {
  var div = document.createElement("div");
  var html = `
    <div class="lists-item" onclick="play('${e.name}','${e.author}','${e.path}','${e.avatar}','${e.id}')" key="${e.id}">
        <div class="lists-avatar">
            <img src="${e.avatar}" alt="">
        </div>
        <div class="lists-info">
            <h5>${e.name}</h5>
            <h6>${e.author}</h6>
        </div>
    </div>
    `;
  div.innerHTML = html;
  lists.appendChild(div);
});

const play = (name, author, path, avatar, key) => {
  indexSong = key - 1;
  audio.setAttribute("src", path);
  audio.play();
  urlAvatar.setAttribute("src", avatar);
  songName.innerHTML = name;
  songAuthor.innerHTML = author;
  btnPlay.setAttribute("class", "fas fa-pause");
  songAvatar.classList.remove("pause");
  songAvatar.classList.add("play");
  var list_item = document.querySelectorAll(".lists-item");
  list_item.forEach((e) => {
    e.getAttribute("key") == key
      ? e.classList.add("active")
      : e.classList.remove("active");
  });
};

btnPlay.onclick = () => {
  audio.play();
  if (isPlay) {
    btnPlay.setAttribute("class", "fas fa-pause");
    songAvatar.classList.remove("pause");
    songAvatar.classList.add("play");
    isPlay = false;
  } else {
    btnPlay.setAttribute("class", "fas fa-play");
    audio.pause();
    songAvatar.classList.add("pause");
    isPlay = true;
  }
};

btnPrev.onclick = () => {
  indexSong = indexSong - 1;
  if (indexSong < 0) {
    indexSong = songs.length - 1;
  }
  console.log(indexSong);
  audio.setAttribute("src", songs[indexSong].path);
  audio.play();
  urlAvatar.setAttribute("src", songs[indexSong].avatar);
  songName.innerHTML = songs[indexSong].name;
  songAuthor.innerHTML = songs[indexSong].author;
  btnPlay.setAttribute("class", "fas fa-pause");
  songAvatar.classList.remove("pause");
  songAvatar.classList.add("play");
  var list_item = document.querySelectorAll(".lists-item");
  list_item.forEach((e) => {
    e.getAttribute("key") == songs[indexSong].id
      ? e.classList.add("active")
      : e.classList.remove("active");
  });
};
btnNext.onclick = () => {
  indexSong += 1;
  if (indexSong >= songs.length) {
    indexSong = 0;
  }
  audio.setAttribute("src", songs[indexSong].path);
  audio.play();
  urlAvatar.setAttribute("src", songs[indexSong].avatar);
  songName.innerHTML = songs[indexSong].name;
  songAuthor.innerHTML = songs[indexSong].author;
  btnPlay.setAttribute("class", "fas fa-pause");
  songAvatar.classList.remove("pause");
  songAvatar.classList.add("play");
  var list_item = document.querySelectorAll(".lists-item");
  list_item.forEach((e) => {
    e.getAttribute("key") == songs[indexSong].id
      ? e.classList.add("active")
      : e.classList.remove("active");
  });
};
