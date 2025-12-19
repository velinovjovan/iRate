const computeAvg = (songs) =>
  songs.reduce((sum, song) => sum + song.rating, 0) / songs.length;

export const albums = {
  jovan: [
    {
      title: "To Pimp A Butterfly",
      artist: "Kendrick Lamar",
      cover:
        "https://t2.genius.com/unsafe/847x0/https%3A%2F%2Fimages.genius.com%2Fde919556998a79d8ebfe51b9963121d1.1000x1000x1.png",
      songs: [
        { title: "Wesley's Theory", rating: 10.0, placement: "none" },
        { title: "For Free? - Interlude", rating: 9.0, placement: "none" },
        { title: "King Kunta", rating: 10.0, placement: "none" },
        { title: "Institutionalized", rating: 10.0, placement: "1st" },
        { title: "These Walls", rating: 10.0, placement: "none" },
        { title: "u", rating: 10.0, placement: "2nd" },
        { title: "Alright", rating: 10.0, placement: "none" },
        { title: "For Sale? - Interlude", rating: 9.5, placement: "none" },
        { title: "Momma", rating: 8.0, placement: "none" },
        { title: "Hood Politics", rating: 6.0, placement: "none" },
        { title: "How Much A Dollar Cost", rating: 10.0, placement: "none" },
        { title: "Complexion (A Zulu Love)", rating: 9.5, placement: "none" },
        { title: "The Blacker The Berry", rating: 10.0, placement: "none" },
        {
          title: "You Ain't Gotta Lie (Momma Said)",
          rating: 10.0,
          placement: "none",
        },
        { title: "i", rating: 10.0, placement: "none" },
        { title: "Mortal Man", rating: 10.0, placement: "3rd" },
      ],
      get avg() {
        return computeAvg(this.songs);
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
          rating: 10.0,
          placement: "none",
        },
        { title: "Bitch, Don't Kill My Vibe", rating: 10.0, placement: "none" },
        { title: "Backseat Freestyle", rating: 8.0, placement: "none" },
        { title: "The Art of Peer Pressure", rating: 10.0, placement: "2nd" },
        { title: "Money Trees", rating: 10.0, placement: "none" },
        { title: "Poetic Justice", rating: 9.5, placement: "none" },
        { title: "good kid", rating: 10.0, placement: "none" },
        { title: "m.A.A.d city", rating: 8.0, placement: "none" },
        { title: "Swimming Pools (Drank)", rating: 10.0, placement: "none" },
        {
          title: "Sing About Me, I'm Dying Of Thirst",
          rating: 10.0,
          placement: "1st",
        },
        { title: "Real", rating: 10.0, placement: "3rd" },
        { title: "Compton", rating: 7.0, placement: "none" },
      ],
      get avg() {
        return computeAvg(this.songs);
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
          rating: 10.0,
          placement: "1st",
        },
        { title: "Corpus Christi Carol", rating: 5.0, placement: "none" },
        { title: "Eternal Life", rating: 10.0, placement: "3rd" },
        { title: "Dream Brother", rating: 8.7, placement: "none" },
        { title: "Forget Her", rating: 10.0, placement: "2nd" },
      ],
      get avg() {
        return computeAvg(this.songs);
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
        { title: "In My Bed", rating: 10.0, placement: "1st" },
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
        return computeAvg(this.songs);
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
        return computeAvg(this.songs);
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
        return computeAvg(this.songs);
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
        return computeAvg(this.songs);
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
        { title: "Bad Religion", rating: 10.0, placement: "1st" },
        { title: "Pink Mater", rating: 10.0, placement: "3rd" },
        { title: "Forrest Gump", rating: 9.2, placement: "none" },
        { title: "End", rating: 9.4, placement: "none" },
      ],
      get avg() {
        return computeAvg(this.songs);
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
        { title: "Seigfried", rating: 10.0, placement: "1st" },
        { title: "Godspeed", rating: 9.8, placement: "none" },
        { title: "Futura Free", rating: 9.0, placement: "none" },
      ],
      get avg() {
        return computeAvg(this.songs);
      },
    },
    {
      title: "When The Pawn...",
      artist: "Fiona Apple",
      cover:
        "https://t2.genius.com/unsafe/344x344/https%3A%2F%2Fimages.genius.com%2F65a8cb694b1227cf62f9a95d639343ca.1000x1000x1.png",
      songs: [
        { title: "On The Bound", rating: 9.5, placement: "none" },
        { title: "To Your Love", rating: 8.4, placement: "none" },
        { title: "Limp", rating: 9.0, placement: "none" },
        { title: "Love Ridden", rating: 9.2, placement: "none" },
        { title: "A Mistake", rating: 9.1, placement: "none" },
        { title: "Paper Bag", rating: 10.0, placement: "3rd" },
        { title: "Fast As You Can", rating: 8.0, placement: "none" },
        { title: "The Way Things Are", rating: 10.0, placement: "1st" },
        { title: "Get Gone", rating: 10.0, placement: "2nd" },
        { title: "I Know", rating: 10.0, placement: "none" },
      ],
      get avg() {
        return computeAvg(this.songs);
      },
    },

    {
      title: "Tidal",
      artist: "Fiona Apple",
      cover:
        "https://t2.genius.com/unsafe/847x0/https%3A%2F%2Fimages.genius.com%2F142d665ba13db54bd2237a8cc111383b.1000x1000x1.jpg",
      songs: [
        { title: "Sleep to Dream", rating: 9.8, placement: "2nd" },
        { title: "Sullen Girl", rating: 10.0, placement: "1st" },
        { title: "Shadowboxer", rating: 8.7, placement: "none" },
        { title: "Criminal", rating: 9.6, placement: "none" },
        { title: "Slow Like Honey", rating: 8.2, placement: "none" },
        { title: "The First Taste", rating: 9.8, placement: "3rd" },
        { title: "Never Is a Promise", rating: 8.0, placement: "none" },
        { title: "The Child Is Gone", rating: 9.0, placement: "none" },
        { title: "Pale September", rating: 9.5, placement: "none" },
        { title: "Carrion", rating: 9.1, placement: "none" },
      ],
      get avg() {
        return computeAvg(this.songs);
      },
    },

    {
      title: "Love Deluxe",
      artist: "Sade",
      cover:
        "https://t2.genius.com/unsafe/563x0/https%3A%2F%2Fimages.genius.com%2F9f56e2b608e7164a504b3373cc507c9d.600x600x1.png",
      songs: [
        { title: "No Ordinary Love", rating: 9.9, placement: "3rd" },
        { title: "Feel No Pain", rating: 8.6, placement: "none" },
        { title: "I Couldn't Love You More", rating: 7.5, placement: "none" },
        { title: "Like a Tattoo", rating: 10.0, placement: "2nd" },
        { title: "Kiss of Life", rating: 9.5, placement: "none" },
        { title: "Cherish the Day", rating: 9.0, placement: "none" },
        { title: "Pearls", rating: 10.0, placement: "1st" },
        { title: "Bullet Proof Soul", rating: 9.2, placement: "none" },
        { title: "Mermaid", rating: 8.9, placement: "none" },
      ],
      get avg() {
        return computeAvg(this.songs);
      },
    },

    {
      title: "Diamond Life",
      artist: "Sade",
      cover:
        "https://t2.genius.com/unsafe/563x0/https%3A%2F%2Fimages.genius.com%2Ff557bc2f32e38800a9c334f90ef1a1bc.1000x1000x1.jpg",
      songs: [
        { title: "Smooth Operator", rating: 10.0, placement: "1st" },
        { title: "Your Love Is King", rating: 9.5, placement: "3rd" },
        { title: "Hang On to Your Love", rating: 9.0, placement: "none" },
        { title: "Frankie's First Affair", rating: 8.4, placement: "none" },
        {
          title: "When Am I Going To Make A Living",
          rating: 9.1,
          placement: "none",
        },
        { title: "Cherry Pie", rating: 9.0, placement: "none" },
        { title: "Sally", rating: 10.0, placement: "2nd" },
        { title: "I Will Be Your Friend", rating: 9.2, placement: "none" },
        { title: "Why Can't We Live Together", rating: 7.5, placement: "none" },
      ],
      get avg() {
        return computeAvg(this.songs);
      },
    },
    {
      title: "Born To Die (The Paradise Edition)",
      artist: "Lana Del Rey",
      cover:
        "https://t2.genius.com/unsafe/847x0/https%3A%2F%2Fimages.genius.com%2F5ca29d15f0592a32ff9bee5560626cd3.1000x1000x1.png",
      songs: [
        { title: "Born To Die", rating: 10.0, placement: "none" },
        { title: "Off To The Races", rating: 9.2, placement: "none" },
        { title: "Blue Jeans", rating: 10.0, placement: "none" },
        { title: "Video Games", rating: 9.5, placement: "none" },
        { title: "Diet Mountain Dew", rating: 10.0, placement: "none" },
        { title: "National Anthem", rating: 10.0, placement: "3rd" },
        { title: "Dark Paradise", rating: 10.0, placement: "2nd" },
        { title: "Radio", rating: 10.0, placement: "none" },
        { title: "Carmen", rating: 9.7, placement: "none" },
        { title: "Million Dollar Man", rating: 9.5, placement: "none" },
        { title: "Summertime Sadness", rating: 9.5, placement: "none" },
        {
          title: "This Is What Makes Us Girls",
          rating: 9.6,
          placement: "none",
        },
        { title: "Without You", rating: 9.8, placement: "none" },
        { title: "Lolita", rating: 7.5, placement: "none" },
        { title: "Lucky Ones", rating: 9.7, placement: "none" },
        { title: "Ride", rating: 10.0, placement: "1st" },
        { title: "American", rating: 8.9, placement: "none" },
        { title: "Cola", rating: 9.2, placement: "none" },
        { title: "Body Electric", rating: 9.0, placement: "none" },
        { title: "Blue Velvet", rating: 10.0, placement: "none" },
        { title: "Gods & Monsters", rating: 9.3, placement: "none" },
        { title: "Yayo", rating: 9.0, placement: "none" },
        { title: "Bel Air", rating: 9.7, placement: "none" },
      ],
      get avg() {
        return computeAvg(this.songs);
      },
    },
    {
      title: "Ultraviolence",
      artist: "Lana Del Rey",
      cover:
        "https://t2.genius.com/unsafe/847x0/https%3A%2F%2Fimages.genius.com%2F2d75da553694a85f5ea5879a6ed54745.1000x1000x1.png",
      songs: [
        { title: "Cruel World", rating: 10.0, placement: "none" },
        { title: "Ultraviolence", rating: 10.0, placement: "none" },
        { title: "Shades Of Cool", rating: 9.8, placement: "none" },
        { title: "Brooklyn Baby", rating: 9.6, placement: "none" },
        { title: "West Coast", rating: 10.0, placement: "2nd" },
        { title: "Sad Girl", rating: 9.8, placement: "none" },
        { title: "Pretty When You Cry", rating: 10.0, placement: "1st" },
        { title: "Money Power Glory", rating: 9.3, placement: "none" },
        {
          title: "Fucked My Way Up To The Top",
          rating: 9.1,
          placement: "none",
        },
        { title: "Old Money", rating: 9.5, placement: "none" },
        { title: "The Other Woman", rating: 10.0, placement: "3rd" },
        { title: "Black Beauty", rating: 9.8, placement: "none" },
        { title: "Guns And Roses", rating: 8.9, placement: "none" },
        { title: "Florida Kilos", rating: 9.9, placement: "none" },
      ],
      get avg() {
        return computeAvg(this.songs);
      },
    },
    {
      title: "Honeymoon",
      artist: "Lana Del Rey",
      cover:
        "https://t2.genius.com/unsafe/847x0/https%3A%2F%2Fimages.genius.com%2Fe18c20526b8fea8446f8bd6e1db92f27.1000x1000x1.png",
      songs: [
        { title: "Honeymoon", rating: 10.0, placement: "1st" },
        { title: "Music To Watch Boys To", rating: 9.8, placement: "none" },
        { title: "Terrence Loves You", rating: 8.8, placement: "none" },
        { title: "God Knows I Tried", rating: 10.0, placement: "none" },
        { title: "High By The Beach", rating: 9.8, placement: "none" },
        { title: "Freak", rating: 9.5, placement: "none" },
        { title: "Art Deco", rating: 10.0, placement: "3rd" },
        { title: "Burnt Norton - Interlude", rating: 9.6, placement: "none" },
        { title: "Religion", rating: 9.2, placement: "none" },
        { title: "Salvatore", rating: 9.7, placement: "none" },
        { title: "The Blackest Day", rating: 10.0, placement: "2nd" },
        { title: "24", rating: 9.5, placement: "none" },
        { title: "Swan Song", rating: 9.2, placement: "none" },
        {
          title: "Don't Let Me Be Misunderstood",
          rating: 9.0,
          placement: "none",
        },
      ],
      get avg() {
        return computeAvg(this.songs);
      },
    },
    {
      title: "Lust For Life",
      artist: "Lana Del Rey",
      cover:
        "https://t2.genius.com/unsafe/847x0/https%3A%2F%2Fimages.genius.com%2F92e6ef7151a3ece56d2754dd38ef58d3.1000x1000x1.png",
      songs: [
        { title: "Love", rating: 9.0, placement: "none" },
        { title: "Lust For Life", rating: 9.5, placement: "none" },
        { title: "13 Beaches", rating: 8.8, placement: "none" },
        { title: "Cherry", rating: 9.8, placement: "none" },
        { title: "White Mustang", rating: 10.0, placement: "1st" },
        { title: "Summer Bummer", rating: 10.0, placement: "2nd" },
        { title: "Groupie Love", rating: 9.7, placement: "none" },
        { title: "In My Feelings", rating: 8.5, placement: "none" },
        {
          title: "Coachella - Woodstock In My Mind",
          rating: 7.5,
          placement: "none",
        },
        {
          title: "God Bless America - And All The Beautiful Women In It",
          rating: 9,
          placement: "none",
        },
        {
          title: "When The World Was At War We Kept Dancing",
          rating: 7.5,
          placement: "none",
        },
        {
          title: "Beautiful People Beautiful Problems",
          rating: 9.6,
          placement: "none",
        },
        { title: "Tomorrow Never Came", rating: 9.9, placement: "3rd" },
        { title: "Herion", rating: 8.8, placement: "none" },
        { title: "Change", rating: 9, placement: "none" },
        { title: "Get Free", rating: 9.5, placement: "none" },
      ],
      get avg() {
        return computeAvg(this.songs);
      },
    },
    {
      title: "Norman Fucking Rockwell",
      artist: "Lana Del Rey",
      cover:
        "https://t2.genius.com/unsafe/847x0/https%3A%2F%2Fimages.genius.com%2Fe796229756efd491e842812e8af1df47.1000x1000x1.png",
      songs: [
        { title: "Norman Fucking Rockwell", rating: 10.0, placement: "2nd" },
        { title: "Mariners Apartment Complex", rating: 9.8, placement: "none" },
        { title: "Venice Bitch", rating: 9.9, placement: "none" },
        { title: "Fuck it I love you", rating: 9.7, placement: "none" },
        { title: "Doin' Time", rating: 9.5, placement: "none" },
        { title: "Love song", rating: 9.3, placement: "none" },
        { title: "Cinnamon Girl", rating: 10.0, placement: "3rd" },
        { title: "How to disappear", rating: 9.6, placement: "none" },
        { title: "California", rating: 9.5, placement: "none" },
        {
          title: "The Next Best American Record",
          rating: 8.5,
          placement: "none",
        },
        { title: "The greatest", rating: 9.9, placement: "none" },
        { title: "Bartender", rating: 9.6, placement: "none" },
        { title: "Happiness is a butterfly", rating: 9.8, placement: "none" },
        {
          title:
            "hope is a dangerous thing for a woman like me to have -but I have it",
          rating: 10.0,
          placement: "1st",
        },
      ],
      get avg() {
        return computeAvg(this.songs);
      },
    },
    {
      title: "Back To Black",
      artist: "Amy Winehouse",
      cover:
        "https://t2.genius.com/unsafe/847x0/https%3A%2F%2Fimages.genius.com%2F2517e498e32bcb597265cf923480e473.1000x1000x1.png",
      songs: [
        { title: "Rehab", rating: 10.0, placement: "none" },
        { title: "You Know I'm Not Good", rating: 10.0, placement: "1st" },
        { title: "Me & Mr Jones", rating: 10.0, placement: "none" },
        { title: "Just Friends", rating: 9, placement: "none" },
        { title: "Back To Black", rating: 10.0, placement: "none" },
        { title: "Love Is A Losing Game", rating: 10, placement: "3rd" },
        { title: "Tears Dry On Their Own", rating: 10, placement: "none" },
        { title: "Wake Up Alone", rating: 9.6, placement: "none" },
        { title: "Some Unholy War", rating: 9.8, placement: "none" },
        { title: "He Can Only Hold Her", rating: 9.5, placement: "none" },
        { title: "Addicted", rating: 9.2, placement: "none" },
        { title: "Valerie", rating: 10.0, placement: "none" },
        { title: "Cupid", rating: 10.0, placement: "none" },
        { title: "Monkey Man", rating: 8.5, placement: "none" },
        { title: "Hey Little Rich Girl", rating: 9.4, placement: "none" },
        { title: "You're Wondering Now", rating: 9.2, placement: "none" },
        { title: "To Know Him Is To Love Him", rating: 10, placement: "2nd" },
      ],
      get avg() {
        return computeAvg(this.songs);
      },
    },
    {
      title: "AM",
      artist: "Arctic Monkeys",
      cover:
        "https://t2.genius.com/unsafe/847x0/https%3A%2F%2Fimages.genius.com%2F8189e957069d9b6c7accea66c7fbab10.1000x1000x1.png",
      songs: [
        { title: "Do I Wanna Know", rating: 9.4, placement: "none" },
        { title: "R U Mine?", rating: 9.1, placement: "none" },
        { title: "One For The Road", rating: 9, placement: "none" },
        { title: "Arabella", rating: 10.0, placement: "2nd" },
        { title: "I Want It All", rating: 8, placement: "none" },
        { title: "No.1 Party Anthemn", rating: 10.0, placement: "3rd" },
        { title: "Mad Sounds", rating: 9.6, placement: "none" },
        { title: "Fireside", rating: 9, placement: "none" },
        {
          title: "Whyd You Only Call Me When You're High",
          rating: 9.6,
          placement: "none",
        },
        { title: "Snap Out Of It", rating: 10.0, placement: "none" },
        { title: "Knee Socks", rating: 9.8, placement: "none" },
        { title: "I Wanna Be Yours", rating: 10.0, placement: "1st" },
      ],
      get avg() {
        return computeAvg(this.songs);
      },
    },
  ],
};
