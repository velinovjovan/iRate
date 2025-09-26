export const albums = {
  jovan: [
    {
      title: "DAMN.",
      artist: "Kendrick Lamar",
      cover:
        "https://t2.genius.com/unsafe/847x0/https%3A%2F%2Fimages.genius.com%2Ff3f77222e1b615e0a10354ea6282ff22.1000x1000x1.png",
      songs: [
        { title: "BLOOD.", rating: 9.5, placement: "none" },
        { title: "DNA.", rating: 10.0, placement: "none" },
        { title: "YAH.", rating: 7.5, placement: "none" },
        { title: "ELEMENT.", rating: 8.0, placement: "none" },
        { title: "FEEL.", rating: 9.3, placement: "none" },
        { title: "LOYALTY.", rating: 9.0, placement: "none" },
        { title: "PRIDE", rating: 10.1, placement: "2nd" },
        { title: "HUMBLE.", rating: 9.8, placement: "none" },
        { title: "LUST.", rating: 9.5, placement: "none" },
        { title: "LOVE.", rating: 9.3, placement: "none" },
        { title: "XXX.", rating: 10.0, placement: "none" },
        { title: "FEAR.", rating: 10.1, placement: "1st" },
        { title: "GOD.", rating: 7.0, placement: "none" },
        { title: "DUCKWORTH.", rating: 10.1, placement: "3rd" },
      ],
      get avg() {
        return (
          this.songs.reduce((sum, song) => sum + song.rating, 0) /
          this.songs.length
        );
      },
    },
    {
      title: "untitled unmastered.",
      artist: "Kendrick Lamar",
      cover:
        "https://t2.genius.com/unsafe/847x0/https%3A%2F%2Fimages.genius.com%2F539168707d36a67a51a4c1ed8a9d32c3.1000x1000x1.jpg",
      songs: [
        { title: "untitled 01 | 08.19.2014.", rating: 7.0, placement: "none" },
        { title: "untitled 02 | 06.23.2014.", rating: 9.0, placement: "none" },
        { title: "untitled 03 | 05.28.2013.", rating: 9.5, placement: "3rd" },
        { title: "untitled 04 | 08.14.2014.", rating: 8.0, placement: "none" },
        { title: "untitled 05 | 09.21.2014.", rating: 10.0, placement: "1st" },
        { title: "untitled 06 | 06.30.2014.", rating: 9.0, placement: "none" },
        { title: "untitled 07 | 2014 - 2016", rating: 8.0, placement: "none" },
        { title: "untitled 08 | 09.06.2014.", rating: 9.8, placement: "2nd" },
      ],
      get avg() {
        return (
          this.songs.reduce((sum, song) => sum + song.rating, 0) /
          this.songs.length
        );
      },
    },
    {
      title: "To Pimp A Butterfly",
      artist: "Kendrick Lamar",
      cover:
        "https://t2.genius.com/unsafe/847x0/https%3A%2F%2Fimages.genius.com%2Fde919556998a79d8ebfe51b9963121d1.1000x1000x1.png",
      songs: [
        { title: "Wesley's Theory", rating: 10.0, placement: "none" },
        { title: "For Free? - Interlude", rating: 9.5, placement: "none" },
        { title: "King Kunta", rating: 10.0, placement: "none" },
        { title: "Institutionalized", rating: 10.1, placement: "1st" },
        { title: "These Walls", rating: 10.0, placement: "3rd" },
        { title: "u", rating: 10.0, placement: "2nd" },
        { title: "Alright", rating: 10.0, placement: "none" },
        { title: "For Sale? - Interlude", rating: 9.5, placement: "none" },
        { title: "Momma", rating: 8.5, placement: "none" },
        { title: "Hood Politics", rating: 7.0, placement: "none" },
        { title: "How Much A Dollar Cost", rating: 10.0, placement: "none" },
        { title: "Complexion (A Zulu Love)", rating: 9.7, placement: "none" },
        { title: "The Blacker The Berry", rating: 10.0, placement: "none" },
        {
          title: "You Ain't Gotta Lie (Momma Said)",
          rating: 10.0,
          placement: "none",
        },
        { title: "i", rating: 10.0, placement: "none" },
        { title: "Mortal Man", rating: 10.0, placement: "none" },
      ],
      get avg() {
        return (
          this.songs.reduce((sum, song) => sum + song.rating, 0) /
          this.songs.length
        );
      },
    },
    {
      title: "good kid, m.A.A.d city",
      artist: "Kendrick Lamar",
      cover:
        "https://t2.genius.com/unsafe/344x344/https%3A%2F%2Fimages.genius.com%2Fb4d6d87f080c362200ce55ed35ec65bb.1000x1000x1.png",
      songs: [
        {
          title: "Sharane a.k.a Master Splinter's Daughter",
          rating: 9.5,
          placement: "none",
        },
        { title: "Bitch, Don't Kill My Vibe", rating: 10.0, placement: "none" },
        { title: "Backseat Freestyle", rating: 9.0, placement: "none" },
        { title: "The Art of Peer Pressure", rating: 10.0, placement: "3rd" },
        { title: "Money Trees", rating: 10.0, placement: "none" },
        { title: "Poetic Justice", rating: 9.7, placement: "none" },
        { title: "good kid", rating: 10.0, placement: "none" },
        { title: "m.A.A.d city", rating: 9.4, placement: "none" },
        { title: "Swimming Pools (Drank)", rating: 10.0, placement: "none" },
        {
          title: "Sing About Me, I'm Dying Of Thirst",
          rating: 10.1,
          placement: "1st",
        },
        { title: "Real", rating: 10.0, placement: "2nd" },
        { title: "Compton", rating: 8.5, placement: "none" },
      ],
      get avg() {
        return (
          this.songs.reduce((sum, song) => sum + song.rating, 0) /
          this.songs.length
        );
      },
    },
    {
      title: "channel ORANGE",
      artist: "Frank Ocean",
      cover:
        "https://t2.genius.com/unsafe/344x344/https%3A%2F%2Fimages.genius.com%2F6523ef2dbe975dd04570ee626edf53ca.1000x1000x1.png",
      songs: [
        { title: "Start", rating: 8.0, placement: "none" },
        { title: "Thinkin Bout You", rating: 10.0, placement: "none" },
        { title: "Fertilizer", rating: 8.0, placement: "none" },
        { title: "Sierra Leone", rating: 9.5, placement: "none" },
        { title: "Sweet Life", rating: 10.0, placement: "none" },
        { title: "Not Just Money", rating: 7.0, placement: "none" },
        { title: "Super Rich Kids", rating: 9.0, placement: "none" },
        { title: "Pilot Jones", rating: 8.7, placement: "none" },
        { title: "Crack Rock", rating: 9.6, placement: "none" },
        { title: "Pyramids", rating: 10.0, placement: "3rd" },
        { title: "Lost", rating: 9.8, placement: "none" },
        { title: "White", rating: 9.5, placement: "none" },
        { title: "Monks", rating: 10.0, placement: "none" },
        { title: "Bad Religion", rating: 10.0, placement: "2nd" },
        { title: "Pink Matter", rating: 10.0, placement: "1st" },
        { title: "Forrest Gump", rating: 9.1, placement: "none" },
        { title: "End", rating: 8.5, placement: "none" },
      ],
      get avg() {
        return (
          this.songs.reduce((sum, song) => sum + song.rating, 0) /
          this.songs.length
        );
      },
    },
    {
      title: "Born Sinner",
      artist: "J. Cole",
      cover:
        "https://t2.genius.com/unsafe/847x0/https%3A%2F%2Fimages.genius.com%2Fcae5014446bde04b411c6fa684963ba8.592x592x1.webp",
      songs: [
        { title: "Villuminati", rating: 8.5, placement: "none" },
        { title: "Kerney Sermon - Skit", rating: 7.5, placement: "none" },
        { title: "Land Of The Snakes", rating: 8.2, placement: "none" },
        { title: "Power Trip", rating: 9.2, placement: "none" },
        { title: "No Money - Interlude", rating: 7.0, placement: "none" },
        { title: "Trouble", rating: 7.5, placement: "none" },
        { title: "Runaway", rating: 8.4, placement: "none" },
        { title: "She Knows", rating: 10.0, placement: "1st" },
        { title: "Rich Niggaz", rating: 8.3, placement: "none" },
        { title: "Where's Jerimaine? - Skit", rating: 8.5, placement: "none" },
        { title: "Forbidden Fruit", rating: 9.7, placement: "none" },
        { title: "Chaining Day", rating: 7.7, placement: "none" },
        {
          title: "Ain't That Some Shit - interlude",
          rating: 7.0,
          placement: "none",
        },
        { title: "Crooked Smile", rating: 10.0, placement: "3rd" },
        { title: "Let Nas Down", rating: 10.0, placement: "2nd" },
        { title: "Born Sinner", rating: 8.0, placement: "none" },
      ],
      get avg() {
        return (
          this.songs.reduce((sum, song) => sum + song.rating, 0) /
          this.songs.length
        );
      },
    },
    {
      title: "2014 Forrest Hills Drive",
      artist: "J. Cole",
      cover:
        "https://t2.genius.com/unsafe/344x344/https%3A%2F%2Fimages.genius.com%2F3b02f41397586e2b3c8bd3fbbc586928.1000x1000x1.png",
      songs: [
        { title: "Intro", rating: 7.5, placement: "none" },
        { title: "January 28th", rating: 10.0, placement: "none" },
        { title: "Wet Dreamz", rating: 10.0, placement: "3rd" },
        { title: "03' Adolesence", rating: 9.0, placement: "none" },
        { title: "A Tale Of 2 Citiez", rating: 8.0, placement: "none" },
        { title: "Fire Squad", rating: 8.7, placement: "none" },
        { title: "St. Tropez", rating: 8.8, placement: "none" },
        { title: "G.O.M.D", rating: 9.0, placement: "none" },
        { title: "No Role Modelz", rating: 10.0, placement: "2nd" },
        { title: "Hello", rating: 8.2, placement: "none" },
        { title: "Apperently", rating: 9.0, placement: "none" },
        { title: "Love Yourz", rating: 10.1, placement: "1st" },
        { title: "Note To Self", rating: 7.5, placement: "none" },
      ],
      get avg() {
        return (
          this.songs.reduce((sum, song) => sum + song.rating, 0) /
          this.songs.length
        );
      },
    },
    {
      title: "Dookie",
      artist: "Green Day",
      cover:
        "https://t2.genius.com/unsafe/847x0/https%3A%2F%2Fimages.genius.com%2F7761dad5538269755257550d04dc5bac.1000x1000x1.png",
      songs: [
        { title: "Burnout", rating: 10.0, placement: "3rd" },
        { title: "Having a Blast", rating: 10.0, placement: "none" },
        { title: "Chump", rating: 8.7, placement: "none" },
        { title: "Longview", rating: 9.5, placement: "none" },
        { title: "Welcome to Paradise", rating: 9.6, placement: "none" },
        { title: "Pulling Teeth", rating: 10.0, placement: "none" },
        { title: "Basket Case", rating: 10.0, placement: "2nd" },
        { title: "She", rating: 9.0, placement: "none" },
        { title: "Sassafras Roots", rating: 8.5, placement: "none" },
        { title: "When I Come Around", rating: 10.0, placement: "1st" },
        { title: "Coming Clean", rating: 8.4, placement: "none" },
        { title: "Emenius Sleepus", rating: 9.5, placement: "none" },
        { title: "In the End", rating: 9.7, placement: "none" },
        { title: "F.O.D.", rating: 8.5, placement: "none" },
        { title: "All by Myself", rating: 7.0, placement: "none" },
      ],
      get avg() {
        return (
          this.songs.reduce((sum, song) => sum + song.rating, 0) /
          this.songs.length
        );
      },
    },
    {
      title: "GNX",
      artist: "GNX",
      cover:
        "https://t2.genius.com/unsafe/847x0/https%3A%2F%2Fimages.genius.com%2Faa7b86debf8b362bad3018cb881cfdc1.1000x1000x1.png",
      songs: [
        { title: "wacced out murals", rating: 7.0, placement: "none" },
        { title: "squabble up", rating: 9.7, placement: "none" },
        { title: "luther", rating: 10.0, placement: "3rd" },
        { title: "man at the garden", rating: 8.5, placement: "none" },
        { title: "hey now", rating: 9.0, placement: "none" },
        { title: "reincarnated", rating: 10.0, placement: "2nd" },
        { title: "tv off", rating: 9.3, placement: "none" },
        { title: "dodger blue", rating: 8.0, placement: "none" },
        { title: "peekaboo", rating: 9.5, placement: "none" },
        { title: "heart pt.6", rating: 10.0, placement: "1st" },
        { title: "gnx", rating: 7.0, placement: "none" },
        { title: "gloria", rating: 7.5, placement: "none" },
      ],
      get avg() {
        return (
          this.songs.reduce((sum, song) => sum + song.rating, 0) /
          this.songs.length
        );
      },
    },
  ],
  meli: [
    {
      title: "Grace",
      artist: "Jeff Buckley",
      cover:
        "https://t2.genius.com/unsafe/847x0/https%3A%2F%2Fimages.genius.com%2F8dd609cb1f601ff21ec21c888cc25773.1000x1000x1.png",
      songs: [
        { title: "Mojo Pin", rating: 7.8, placement: "none" },
        { title: "Grace", rating: 9.0, placement: "none" },
        { title: "Last Goodbye", rating: 8.5, placement: "none" },
        { title: "Lilac Wine", rating: 9.7, placement: "none" },
        { title: "So Real", rating: 10.0, placement: "none" },
        { title: "Hallelujah", rating: 9.5, placement: "none" },
        {
          title: "Lover, You Should've Come Over",
          rating: 10.1,
          placement: "1st",
        },
        { title: "Corpus Christi Carol", rating: 5.0, placement: "none" },
        { title: "Eternal Life", rating: 10.0, placement: "3rd" },
        { title: "Dream Brother", rating: 8.7, placement: "none" },
        { title: "Forget Her", rating: 10.0, placement: "2nd" },
      ],
      get avg() {
        return (
          this.songs.reduce((sum, song) => sum + song.rating, 0) /
          this.songs.length
        );
      },
    },
    {
      title: "Frank",
      artist: "Amy Winehouse",
      cover:
        "https://t2.genius.com/unsafe/847x0/https%3A%2F%2Fimages.genius.com%2Fe2c709ffce2aa9d18dc1f08698f1275f.1000x1000x1.png",
      songs: [
        { title: "Intro / Stronger Than Me", rating: 10.0, placement: "3rd" },
        {
          title: "You Sent Me Flying / Cherry",
          rating: 9.8,
          placement: "none",
        },
        { title: "Know You Now", rating: 10.0, placement: "none" },
        { title: "Fuck Me Pumps", rating: 7.0, placement: "none" },
        { title: "I Heard Love Is Blind", rating: 9.0, placement: "none" },
        {
          title: "Moody's Mood For Love / Teo Licks",
          rating: 9.9,
          placement: "none",
        },
        { title: "(There Is) No Greater Love", rating: 8.5, placement: "none" },
        { title: "In My Bed", rating: 10.1, placement: "1st" },
        { title: "Take The Box", rating: 8.8, placement: "none" },
        { title: "October Song", rating: 9.5, placement: "none" },
        { title: "What Is It About Men", rating: 10.0, placement: "2nd" },
        { title: "Help Yourself", rating: 9.3, placement: "none" },
        { title: "Amy Amy Amy", rating: 10.0, placement: "none" },
        { title: "Outro", rating: 10.0, placement: "none" },
        { title: "Brother", rating: 9.1, placement: "none" },
        {
          title: "Mr Magic (Through The Smoke)",
          rating: 9.5,
          placement: "none",
        },
      ],
      get avg() {
        return (
          this.songs.reduce((sum, song) => sum + song.rating, 0) /
          this.songs.length
        );
      },
    },
    {
      title: "Madvillainy",
      artist: "MF DOOM",
      cover:
        "https://t2.genius.com/unsafe/847x0/https%3A%2F%2Fimages.genius.com%2F34ca415cf9ccfd68d859fb84e3645e8a.768x768x1.jpg",
      songs: [
        { title: "The Illest Villains", rating: 6.0, placement: "none" },
        { title: "Accordion", rating: 7.5, placement: "none" },
        { title: "Meat Grinder", rating: 9.7, placement: "none" },
        { title: "Bistro", rating: 10.0, placement: "2nd" },
        { title: "Raid", rating: 8.3, placement: "none" },
        { title: "America's Most Blunted", rating: 9.2, placement: "none" },
        { title: "Sickfit (Instrumental)", rating: 8.0, placement: "none" },
        { title: "Rainbows", rating: 9.4, placement: "none" },
        { title: "Curls", rating: 9.7, placement: "none" },
        {
          title: "Do Not Fire! (Instrumental)",
          rating: 8.8,
          placement: "none",
        },
        { title: "Money Folder", rating: 9.0, placement: "none" },
        { title: "Shadows of Tomorrow", rating: 7.5, placement: "none" },
        {
          title: "Operation LifeSaver aka Mint Test",
          rating: 9.8,
          placement: "none",
        },
        { title: "Figaro", rating: 9.9, placement: "3rd" },
        { title: "Hardcore Hustle", rating: 7.2, placement: "none" },
        { title: "Strange Ways", rating: 9.6, placement: "none" },
        { title: "Fancy Clown", rating: 9.2, placement: "none" },
        { title: "Eye", rating: 9.4, placement: "none" },
        { title: "All Caps", rating: 10.0, placement: "1st" },
        { title: "Great Day", rating: 7.9, placement: "none" },
        { title: "Rhinestone Cowboy", rating: 9.3, placement: "none" },
      ],
      get avg() {
        return (
          this.songs.reduce((sum, song) => sum + song.rating, 0) /
          this.songs.length
        );
      },
    },
    {
      title: "Operation: Doomsday",
      artist: "MF DOOM",
      cover:
        "https://t2.genius.com/unsafe/847x0/https%3A%2F%2Fimages.genius.com%2F244fc416deda77738fea30048e2e6201.1000x1000x1.png",
      songs: [
        {
          title: "The Time We Faced Doom (Skit)",
          rating: 7.5,
          placement: "none",
        },
        { title: "Doomsday", rating: 10.0, placement: "2nd" },
        { title: "Rhymes Like Dimes", rating: 8.5, placement: "none" },
        { title: "The Finest", rating: 9.7, placement: "3rd" },
        { title: "Back In The Days (Skit)", rating: 6.0, placement: "none" },
        { title: "Go With The Flow", rating: 7.0, placement: "none" },
        { title: "Tick, Tick", rating: 6.5, placement: "none" },
        { title: "Red and Gold", rating: 8.3, placement: "none" },
        { title: "The Hands of Doom (Skit)", rating: 9.0, placement: "none" },
        { title: "Who You Think I Am", rating: 8.6, placement: "none" },
        { title: "Doom Are You Awake (Skit)", rating: 8.0, placement: "none" },
        { title: "Hey!", rating: 9.5, placement: "none" },
        { title: "Operation: Greenbacks", rating: 8.6, placement: "none" },
        { title: "The Mic", rating: 7.5, placement: "none" },
        { title: "The Mystery of Doom (Skit)", rating: 7.0, placement: "none" },
        { title: "Dead Bent", rating: 7.0, placement: "none" },
        { title: "Gas Drawls", rating: 8.5, placement: "none" },
        { title: "?", rating: 10.0, placement: "1st" },
        { title: "Hero v.s. Villain", rating: 6.9, placement: "none" },
      ],
      get avg() {
        return (
          this.songs.reduce((sum, song) => sum + song.rating, 0) /
          this.songs.length
        );
      },
    },
    {
      title: "Doris",
      artist: "Earl Sweatshirt",
      cover:
        "https://t2.genius.com/unsafe/847x0/https%3A%2F%2Fimages.genius.com%2Fc5a84e1fffc69e59a2cae6e1e07f2f13.720x720x1.png",
      songs: [
        { title: "Pre", rating: 8.7, placement: "none" },
        { title: "Burgundy", rating: 9.2, placement: "none" },
        { title: "20 Wave Caps", rating: 8.7, placement: "none" },
        { title: "Sunday", rating: 10.0, placement: "2nd" },
        { title: "Hive", rating: 9.5, placement: "3rd" },
        { title: "Chum", rating: 10.0, placement: "1st" },
        { title: "Sasquatch", rating: 9.2, placement: "none" },
        { title: "Centurion", rating: 7.7, placement: "none" },
        { title: "523", rating: 8.5, placement: "none" },
        { title: "Uncle Al", rating: 7.5, placement: "none" },
        { title: "Guild", rating: 8.5, placement: "none" },
        { title: "Molasses", rating: 9.0, placement: "none" },
        { title: "Whoa", rating: 9.3, placement: "none" },
        { title: "Hoarse", rating: 9.5, placement: "none" },
        { title: "Knight", rating: 9.2, placement: "none" },
      ],
      get avg() {
        return (
          this.songs.reduce((sum, song) => sum + song.rating, 0) /
          this.songs.length
        );
      },
    },
    {
      title: "channel ORANGE",
      artist: "Frank Ocean",
      cover:
        "https://t2.genius.com/unsafe/344x344/https%3A%2F%2Fimages.genius.com%2F6523ef2dbe975dd04570ee626edf53ca.1000x1000x1.png",
      songs: [
        { title: "Start", rating: 7.9, placement: "none" },
        { title: "Thinking Bout You", rating: 9.8, placement: "none" },
        { title: "Fertillizer", rating: 8.5, placement: "none" },
        { title: "Sierra Leone", rating: 9.5, placement: "none" },
        { title: "Sweet Life", rating: 9.8, placement: "none" },
        { title: "Not Just Money", rating: 7.0, placement: "none" },
        { title: "Super Rich Kids", rating: 9.5, placement: "none" },
        { title: "Pilot Jones", rating: 8.8, placement: "none" },
        { title: "Crack Rock", rating: 9.3, placement: "none" },
        { title: "Pyramids", rating: 10.0, placement: "2nd" },
        { title: "Lost", rating: 9.8, placement: "none" },
        { title: "White", rating: 9.0, placement: "none" },
        { title: "Monks", rating: 9.5, placement: "none" },
        { title: "Bad Religion", rating: 10.1, placement: "1st" },
        { title: "Pink Mater", rating: 10.0, placement: "3rd" },
        { title: "Forrest Gump", rating: 9.2, placement: "none" },
        { title: "End", rating: 9.4, placement: "none" },
      ],
      get avg() {
        return (
          this.songs.reduce((sum, song) => sum + song.rating, 0) /
          this.songs.length
        );
      },
    },
    {
      title: "Blonde",
      artist: "Frank Ocean",
      cover:
        "https://t2.genius.com/unsafe/847x0/https%3A%2F%2Fimages.genius.com%2F750737a023d383b93057b73d546bfe4e.1000x1000x1.png",
      songs: [
        { title: "Nikes", rating: 9.5, placement: "none" },
        { title: "Ivy", rating: 9.8, placement: "none" },
        { title: "Pink + White", rating: 10.0, placement: "none" },
        { title: "Be Yourself", rating: 8.7, placement: "none" },
        { title: "Solo", rating: 9.4, placement: "none" },
        { title: "Skyline To", rating: 9.1, placement: "none" },
        { title: "Self Control", rating: 10.0, placement: "2nd" },
        { title: "Good Guy", rating: 7.0, placement: "none" },
        { title: "Nights", rating: 10.0, placement: "3rd" },
        { title: "Solo (Reprise)", rating: 7.2, placement: "none" },
        { title: "Pretty Sweet", rating: 7.0, placement: "none" },
        { title: "Facebook Story", rating: 8.9, placement: "none" },
        { title: "Close To You", rating: 9.4, placement: "none" },
        { title: "White Ferrari", rating: 10.0, placement: "none" },
        { title: "Seigfried", rating: 10.1, placement: "1st" },
        { title: "Godspeed", rating: 9.8, placement: "none" },
        { title: "Futura Free", rating: 9.0, placement: "none" },
      ],
      get avg() {
        return (
          this.songs.reduce((sum, song) => sum + song.rating, 0) /
          this.songs.length
        );
      },
    },
  ],
};
