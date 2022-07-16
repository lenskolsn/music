const songs = [
  {
    id: 1,
    name: "Cơn Mưa Ngang Qua",
    author: "Sơn Tùng MTP",
    avatar: "./assets/images/cmnq.jpg",
    path: "./assets/song/cmnq.mp3",
  },
  {
    id: 2,
    name: "Có chắc yêu là đây - Onionn Remix",
    author: "Sơn Tùng MTP",
    avatar: "./assets/images/ccyld.jpg",
    path: "./assets/song/ccyld.mp3",
  },
  {
    id: 3,
    name: "Có chắc yêu là đây",
    author: "Sơn Tùng MTP",
    avatar: "./assets/images/ccyld1.jpg",
    path: "./assets/song/ccyld1.m4a",
  },
  {
    id: 4,
    name: "Muộn rồi mà sao còn",
    author: "Sơn Tùng MTP",
    avatar: "./assets/images/mrmsc.jpg",
    path: "./assets/song/mrmsc.mp3",
  },
  {
    id: 5,
    name: "Chúng ta của hiện tại",
    author: "Sơn Tùng MTP",
    avatar: "./assets/images/ctcht.jpg",
    path: "./assets/song/ctcht.mp3",
  },
];

let isPlay = true;
let firstSong = songs[0];
let indexSong = 0;

let btnPlay = document.querySelector(".play-btn i");
let songAvatar = document.querySelector(".song-avatar");
let songName = document.querySelector(".song-info h3");
let songAuthor = document.querySelector(".song-info h5");
let urlAvatar = document.querySelector(".song-avatar img");
let audio = document.querySelector(".audio");
let lists = document.querySelector(".lists");

audio.setAttribute("src", firstSong.path);
urlAvatar.setAttribute("src", firstSong.avatar);

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
// onclick="play('${e.name}','${e.author}','${e.path}','${e.avatar}','${e.id}')" key="${e.id}"
const play = (name, author, path, avatar, key) => {
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
