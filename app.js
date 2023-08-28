console.log("M");

const game_data = [
     {
          name: 'valo',
          url: "http://youtube.com",
     },
     {
          name: 'valorant',
          url: "http://youtube.com",
     },

     {
          name: 'league',
          url: "http://youtube.com",
     },
     {
          name: 'league of legends',
          url: "http://youtube.com",
     },
     {
          name: 'league legends',
          url: "http://youtube.com",
     },

     {
          name: 'gta',
          url: "http://youtube.com",
     },
     {
          name: 'gtav',
          url: "http://youtube.com",
     },
     {
          name: 'gta v',
          url: "http://youtube.com",
     },
     {
          name: 'grand theft auto',
          url: "http://youtube.com",
     },
     {
          name: 'grand theft auto v',
          url: "http://youtube.com",
     },
     {
          name: 'grand theft auto 5',
          url: "http://youtube.com",
     },
     {
          name: 'gta 5',
          url: "http://youtube.com",
     },

     {
          name: 'csgo',
          url: "http://youtube.com",
     },
     {
          name: 'cs:go',
          url: "http://youtube.com",
     },
     {
          name: 'cs: go',
          url: "http://youtube.com",
     },
     {
          name: 'cs go',
          url: "http://youtube.com",
     },
     {
          name: 'counter-strike: global offensive',
          url: "http://youtube.com",
     },
     {
          name: 'counter-strike global offensive',
          url: "http://youtube.com",
     },
     {
          name: 'counter strike: global offensive',
          url: "http://youtube.com",
     },
     {
          name: 'counter strike global offensive',
          url: "http://youtube.com",
     },
     {
          name: 'counter-strike',
          url: "http://youtube.com",
     },
     {
          name: 'counter strike',
          url: "http://youtube.com",
     },

     {
          name: 'apex',
          url: "http://youtube.com",
     },
     {
          name: 'apex legends',
          url: "http://youtube.com",
     },
]

// const game_data = [
//      {
//           name: ['cs:go', 'csgo', 'cs go', 'cs: go', 'cs', 'counter strike', 'counter-strike', 'counter-strike: global offensive', 'counter-strike global offensive', 'counter strike global offensive', 'counter strike: global offensive', 'counter strike: global offensive'],
//           url: "http://youtube.com",
//      },
// ]

function getVal() {
     const val = document.getElementById("search-input").value;
     console.log(val);
     game_data.forEach(redirect);
}

function redirect(item) {
     if (item = game_data.name) {
          window.location.href = 'game_data.url';
     }
     else {
          alert("NOT FOUND");
     }
}

function getVal() {
     const val = document.getElementById("search-input").value;
     console.log(val);
     redirect(val);
}

function redirect(inputName) {
     const foundGame = game_data.find(item => item.name.toLowerCase() === inputName);

     if (foundGame) {
          window.location.href = foundGame.url;
     } else {
          alert("NOT FOUND");
     }
}

// D:\GitHub_Repositories\Web_Dev\Streak_GamingWebsite\Img