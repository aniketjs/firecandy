const social = document.getElementsByClassName('social');
const socialLink = document.getElementsByClassName('socialLink');
const music = document.getElementsByClassName('music');
const musicLink = document.getElementsByClassName('musicLink');
const code = document.getElementsByClassName('code');
const codeLink = document.getElementsByClassName('codeLink');
const google = document.getElementsByClassName('google');
const googleLink = document.getElementsByClassName('googleLink');
const util = document.getElementsByClassName('util');
const utilLink = document.getElementsByClassName('utilLink');
const shop = document.getElementsByClassName('shop');
const shopLink = document.getElementsByClassName('shopLink');
const fun = document.getElementsByClassName('fun');
const funLink = document.getElementsByClassName('funLink');

const socialData =  [
    {
        "name": "Facebook",
        "link": "https://www.facebook.com/",
        "ico": "/assets/svg/shortcuts/Facebook.svg"
    },
    {
        "name": "Whatsapp",
        "link": "https://web.whatsapp.com/",
        "ico": "/assets/svg/shortcuts/Whatsapp.svg"
    },
    {
        "name": "Reddit",
        "link": "https://www.reddit.com/",
        "ico": "/assets/svg/shortcuts/Reddit.svg"
    },
    {
        "name": "Discord",
        "link": "https://discord.com/app",
        "ico": "/assets/svg/shortcuts/Discord.svg"
    },
    {
        "name": "Instagram",
        "link": "https://www.instagram.com/",
        "ico": "/assets/svg/shortcuts/Instagram.svg"
    },
    {
        "name": "Twitter",
        "link": "https://twitter.com/home",
        "ico": "/assets/svg/shortcuts/Twitter.svg"
    },
    {
        "name": "Telegram",
        "link": "https://web.telegram.org/k/",
        "ico": "/assets/svg/shortcuts/Telegram.svg"
    },
    {
        "name": "4chan",
        "link": "https://4chan.org/",
        "ico": "/assets/svg/shortcuts/4chan.svg"
    },
    {
        "name": "Gab",
        "link": "https://gab.com/",
        "ico": "/assets/svg/shortcuts/Gab.svg"
    },
    {
        "name": "Youtube",
        "link": "https://www.youtube.com/",
        "ico": "/assets/svg/shortcuts/YouTube.svg"
    }
]
const musicData =   [
    {
        "name": "Soundcloud",
        "link": "https://soundcloud.com/discover",
        "ico": "/assets/svg/shortcuts/Soundcloud.svg"
    },
    {
        "name": "Spotify",
        "link": "https://open.spotify.com/",
        "ico": "/assets/svg/shortcuts/Spotify.svg"
    },
    {
        "name": "Spotify Artists",
        "link": "https://artists.spotify.com/c",
        "ico": "/assets/svg/shortcuts/spotifyartists.svg"
    },
    {
        "name": "Routenote",
        "link": "https://www.routenote.com/rn/",
        "ico": "/assets/svg/shortcuts/Routenote.svg"
    },
    {
        "name": "Bandcamp",
        "link": "https://bandcamp.com/",
        "ico": "/assets/svg/shortcuts/Bandcamp.svg"
    },
    {
        "name": "YouTube Music",
        "link": "https://music.youtube.com/",
        "ico": "/assets/svg/shortcuts/youtube_music.svg"
    },
    {
        "name": "NightRideFM",
        "link": "https://nightride.fm/",
        "ico": "/assets/svg/shortcuts/nightridefm.svg"
    },
    {
        "name": "null",
        "link": "",
        "ico": "/assets/svg/shortcuts/null.svg"
    },
    {
        "name": "null",
        "link": "",
        "ico": "/assets/svg/shortcuts/null.svg"
    },
    {
        "name": "null",
        "link": "",
        "ico": "/assets/svg/shortcuts/null.svg"
    }
]
const codeData =   [
    {
        "name": "Stack Overflow",
        "link": "https://stackoverflow.com/",
        "ico": "/assets/svg/shortcuts/StackOverflow.svg"
    },
    {
        "name": "Free Code Camp",
        "link": "https://www.freecodecamp.org/",
        "ico": "/assets/svg/shortcuts/FreeCodeCamp.svg"
    },
    {
        "name": "Mozilla Web Docs",
        "link": "https://developer.mozilla.org/en-US/",
        "ico": "/assets/svg/shortcuts/Mdn.svg"
    },
    {
        "name": "JSInfo",
        "link": "https://javascript.info/",
        "ico": "/assets/svg/shortcuts/jsinfo.svg"
    },
    {
        "name": "DevDocs",
        "link": "https://devdocs.io/",
        "ico": "/assets/svg/shortcuts/DevDocs.svg"
    },
    {
        "name": "Github",
        "link": "https://github.com/",
        "ico": "/assets/svg/shortcuts/Github.svg"
    },
    {
        "name": "JSFiddle",
        "link": "https://jsfiddle.net/",
        "ico": "/assets/svg/shortcuts/jsfiddle.svg"
    },
    {
        "name": "Codepen",
        "link": "https://codepen.io/",
        "ico": "/assets/svg/shortcuts/Codepen.svg"
    },
    {
        "name": "Stackblitz",
        "link": "https://stackblitz.com/",
        "ico": "/assets/svg/shortcuts/stackblitz.svg"
    },
    {
        "name": "Leetcode",
        "link": "https://leetcode.com/",
        "ico": "/assets/svg/shortcuts/leetcode.svg"
    }
]

const googleData =  [
    {
        "name": "Docs",
        "link": "https://docs.google.com/document/u/0/",
        "ico": "/assets/svg/shortcuts/Docs.svg"
    },
    {
        "name": "Sheets",
        "link": "https://docs.google.com/spreadsheets/u/0/",
        "ico": "/assets/svg/shortcuts/Sheets.svg"
    }, 
    {
        "name": "Slides",
        "link": "https://docs.google.com/presentation/u/0/",
        "ico": "/assets/svg/shortcuts/Slides.svg"
    }, 
    {
        "name": "Forms",
        "link": "https://docs.google.com/forms/u/0/",
        "ico": "/assets/svg/shortcuts/Forms.svg"
    }, 
    {
        "name": "Meet",
        "link": "https://meet.google.com/",
        "ico": "/assets/svg/shortcuts/Meet.svg"
    }, 
    {
        "name": "Maps",
        "link": "https://www.google.com/maps",
        "ico": "/assets/svg/shortcuts/Maps.svg"
    }, 
    {
        "name": "Photos",
        "link": "https://photos.google.com/",
        "ico": "/assets/svg/shortcuts/Photos.svg"
    }, 
    {
        "name": "Keep",
        "link": "https://keep.google.com/u/0/",
        "ico": "/assets/svg/shortcuts/Keep.svg"
    }, 
    {
        "name": "Drive",
        "link": "https://drive.google.com/drive/u/0/my-drive",
        "ico": "/assets/svg/shortcuts/Drive.svg"
    }, 
    {
        "name": "Gmail",
        "link": "https://mail.google.com/mail/u/0/#inbox",
        "ico": "/assets/svg/shortcuts/Gmail.svg"
    }
]
const utilData =  [
    {
        "name": "Pixlr",
        "link": "https://pixlr.com/e/",
        "ico": "/assets/svg/shortcuts/pixlr.svg"
    },
    {
        "name": "ImgFlip",
        "link": "https://imgflip.com/memegenerator",
        "ico": "/assets/svg/shortcuts/imgflip.svg"
    }, 
    {
        "name": "Speedtest",
        "link": "https://www.speedtest.net/",
        "ico": "/assets/svg/shortcuts/speedtest.svg"
    }, 
    {
        "name": "BoxySVG",
        "link": "https://boxy-svg.com/app",
        "ico": "/assets/svg/shortcuts/boxysvg.svg"
    }, 
    {
        "name": "SVGViewer",
        "link": "https://www.svgviewer.dev/",
        "ico": "/assets/svg/shortcuts/svgviewer.svg"
    }, 
    {
        "name": "Unsplash",
        "link": "https://unsplash.com/",
        "ico": "/assets/svg/shortcuts/unplash.svg"
    }, 
    {
        "name": "Pexels",
        "link": "https://www.pexels.com/",
        "ico": "/assets/svg/shortcuts/pexels.svg"
    }, 
    {
        "name": "Google Fonts",
        "link": "https://fonts.google.com/",
        "ico": "/assets/svg/shortcuts/google_fonts.svg"
    }, 
    {
        "name": "",
        "link": "",
        "ico": "/assets/svg/shortcuts/null.svg"
    }, 
    {
        "name": "",
        "link": "",
        "ico": "/assets/svg/shortcuts/null.svg"
    }
]

const funData =  [
    {
        "name": "1337x",
        "link": "https://www.1337x.to/home/",
        "ico": "/assets/svg/shortcuts/1337x.svg"
    }, 
    {
        "name": "RuTracker",
        "link": "https://rutracker.org/forum/index.php",
        "ico": "/assets/svg/shortcuts/rutracker.svg"
    }, 
    {
        "name": "Nyaa",
        "link": "https://nyaa.si/",
        "ico": "/assets/svg/shortcuts/nyaa.svg"
    }, 
    {
        "name": "FitGirl",
        "link": "https://fitgirl-repacks.site/",
        "ico": "/assets/svg/shortcuts/fitgirl.svg"
    }, 
    {
        "name": "",
        "link": "",
        "ico": "/assets/svg/shortcuts/null.svg"
    }, 
    {
        "name": "",
        "link": "",
        "ico": "/assets/svg/shortcuts/null.svg"
    }, 
    {
        "name": "",
        "link": "",
        "ico": "/assets/svg/shortcuts/null.svg"
    }, 
    {
        "name": "",
        "link": "",
        "ico": "/assets/svg/shortcuts/null.svg"
    }, 
    {
        "name": "",
        "link": "",
        "ico": "/assets/svg/shortcuts/null.svg"
    },
    {
        "name": "Twitch",
        "link": "https://www.twitch.tv/",
        "ico": "/assets/svg/shortcuts/twitch.svg"
    }
]

const shopData =  [
    {
        "name": "Amazon",
        "link": "https://www.amazon.in/",
        "ico": "/assets/svg/shortcuts/amazon.svg"
    },
    {
        "name": "Flipkart",
        "link": "https://www.flipkart.com/",
        "ico": "/assets/svg/shortcuts/flipkart.svg"
    }, 
    {
        "name": "",
        "link": "",
        "ico": "/assets/svg/shortcuts/null.svg"
    }, 
    {
        "name": "",
        "link": "",
        "ico": "/assets/svg/shortcuts/null.svg"
    }, 
    {
        "name": "",
        "link": "",
        "ico": "/assets/svg/shortcuts/null.svg"
    }, 
    {
        "name": "",
        "link": "",
        "ico": "/assets/svg/shortcuts/null.svg"
    }, 
    {
        "name": "",
        "link": "",
        "ico": "/assets/svg/shortcuts/null.svg"
    }, 
    {
        "name": "",
        "link": "",
        "ico": "/assets/svg/shortcuts/null.svg"
    }, 
    {
        "name": "",
        "link": "",
        "ico": "/assets/svg/shortcuts/null.svg"
    }, 
    {
        "name": "",
        "link": "",
        "ico": "/assets/svg/shortcuts/null.svg"
    }
]
