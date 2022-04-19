 // Search something on google, if no arguments are provided => www.google.com
g = google;
function google(args) {
    if (args != "") {
        search = args.replace(" ", "+")
        window.open("https://www.google.com/search?q=" + search);
    } else {
        window.open("https://www.google.com");
    }
}

 // Search something on duckduckgo, if no arguments are provided => www.duckduckgo.com
 ddg = duckduckgo;
 function duckduckgo(args) {
     if (args != "") {
         search = args.replace(" ", "+")
         window.open("https://duckduckgo.com/?q=" + search);
     } else {
         window.open("https://www.duckduckgo.com");
     }
 }

// Search something on youtube, if no arguments are provided => google.by/maps
gmaps = googlemaps
function googlemaps(args) {
    if (args != "") {
        search = args.replace(" ", "+")
        window.open("https://www.google.by/maps/search/" + search);
    } else {
        window.open("https://www.google.by/maps/");
    }
}

// Search something on youtube, if no arguments are provided => www.youtube.com
yt = youtube
function youtube(args) {
    if (args != "") {
        search = args.replace(" ", "+")
        window.open("https://www.youtube.com/results?search_query=" + search);
    } else {
        window.open("https://www.youtube.com/");
    }
}

// Search something on wikipedia, if no arguments are provided => wikipedia.org
wiki = wikipedia
 function wikipedia(args) {
     if (args != "") {
         search = args.replace(" ", "+")
         window.open("https://wikipedia.org/w/index.php?search=" + search);
     } else {
         window.open("https://wikipedia.org");
     }
 }

// Search something on Stack Overflow, if no arguments are provided => stackoverflow.com
so = stackoverflow
function stackoverflow(args) {
    if (args != "") {
        search = args.replace(" ", "+")
        window.open("https://stackoverflow.com/search?q" + search);
    } else {
        window.open("https://stackoverflow.com/");
    }
}

// Search something on github, if no arguments are provided => github.com
gh = github
function github(args) {
    if (args != "") {
        search = args.replace(" ", "+")
        window.open("https://github.com/search?q" + search);
    } else {
        window.open("https://github.com/");
    }
}

// Search something on twitch, if no arguments are provided => twitch.tv
function twitch(args) {
    if (args != "") {
        search = args.replace(" ", "+")
        window.open("https://www.twitch.tv/search?term=" + search);
    } else {
        window.open("https://twitch.tv/");
    }
}

// Search something on imdb, if no arguments are provided => imdb.com
function imdb(args) {
    if (args != "") {
        search = args.replace(" ", "+")
        window.open("https://www.imdb.com/find?q=" + search);
    } else {
        window.open("https://imdb.com/");
    }
}

// Search something on spotify, if no arguments are provided => open.spotify.com
function spotify(args) {
    if (args != "") {
        search = args.replace(" ", "%20")
        window.open("https://open.spotify.com/search/" + search);
    } else {
        window.open("https://open.spotify.com/");
    }
}

// Search something on deezer, if no arguments are provided => www.deezer.com
function deezer(args) {
    if (args != "") {
        search = args.replace(" ", "%20")
        window.open("https://www.deezer.com/search/" + search);
    } else {
        window.open("https://www.deezer.com/");
    }
}

// Search something on amazon, if no arguments are provided => amazon.com
function amazon(args) {
    if (args != "") {
        search = args.replace(" ", "%20")
        window.open("https://amazon.com/s?k=" + search);
    } else {
        window.open("https://amazon.com");
    }
}

// Open gmail with the account number as an argument, if no arguments are provided => mail.google.com
function gmail(args) {
    if (args != "") {
        window.open("https://mail.google.com/mail/u/" + args.split(" ").slice(1)[0]);
    } else {
        window.open("https://mail.google.com");
    }
}

// Open google docs with the account number as an argument, if no arguments are provided => docs.google.com
gdocs = googledocs
function googledocs(args) {
    if (args != "") {
        window.open("https://docs.google.com/document/u/0" + args.split(" ").slice(1)[0]);
    } else {
        window.open("https://docs.google.com/");
    }
}

// Open google sheets with the account number as an argument, if no arguments are provided => docs.google.com/spreadsheets
gsheets = googlesheets
function googlesheets(args) {
    if (args != "") {
        window.open("https://docs.google.com/spreadsheets/u/0" + args.split(" ").slice(1)[0]);
    } else {
        window.open("https://docs.google.com/spreadsheets/");
    }
}

// Open google slides with the account number as an argument, if no arguments are provided => docs.google.com/presentation
gslides = googleslides
function googleslides(args) {
    if (args != "") {
        window.open("https://docs.google.com/presentation/u/0" + args.split(" ").slice(1)[0]);
    } else {
        window.open("https://docs.google.com/presentation/");
    }
}

// Open google forms with the account number as an argument, if no arguments are provided => docs.google.com/forms
gforms = googleforms
function googleforms(args) {
    if (args != "") {
        window.open("https://docs.google.com/forms/u/0" + args.split(" ").slice(1)[0]);
    } else {
        window.open("https://docs.google.com/forms/");
    }
}

// Open google drive with the account number as an argument, if no arguments are provided => drive.google.com
gdrive = googledrive
function googledrive(args) {
    if (args != "") {
        window.open("https://drive.google.com/drive/u/0" + args.split(" ").slice(1)[0]);
    } else {
        window.open("https://drive.google.com/");
    }
}

// Open google reddit with the subreddit as an argument, if no arguments are provided => www.reddit.com
r = reddit
function reddit(args) {
    if (args != "") {
        window.open("https://www.reddit.com/r/" + args.split(" ").slice(1)[0]);
    } else {
        window.open("https://www.reddit.com/");
    }
}

// Open the application discord
function discord(args) {
    window.open("discord://");
}

// Open the application visual studio code
function code(args) {
    window.open("vscode://");
}

// Translate something using google translate, if no arguments are provided => translate.google.com
gt = googletranslate
function googletranslate(args) {
    if (args != "") {
        window.open("https://translate.google.com/?sl=auto&tl=en&text=" + args + "&op=translate");
    } else {
        window.open("https://translate.google.com/");
    }
}

//Display the list of available commands
function help() {
    block_log("reddit [subreddit]");
    block_log("google [search]");
    block_log("duckduckgo [search]");
    block_log("youtube [search]");
    block_log("wikipedia [search]");
    block_log("amazon [search]");
    block_log("stackoverflow [search] (or so [search])");
    block_log("github [search]");
    block_log("googletranslate [sentence] (or gt [sentence])");
    block_log("googlemaps [search] (or gmaps [search])");
    block_log("twitch [search]");
    block_log("imdb [search]");
    block_log("gdocs [account_number] (or googledocs [account_number])");
    block_log("gdrive [account_number] (or googledrive [account_number])");
    block_log("gslides [account_number] (or googleslides [account_number])");
    block_log("gsheets [account_number] (or googlesheets[account_number])");
    block_log("gforms [account_number] (or googleforms [account_number])");
    block_log("clear (or cls)");
    block_log("discord");
    block_log("code");
    block_log("date");
    block_log("help");
    block_log("time");
}

// Display time
time = clock;
function clock(args) {
    var today = new Date();
    block_log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
}

// Clear the terminal
cls = clear;
function clear(args) {
    document.getElementById('wrapper').innerHTML = "";
}





