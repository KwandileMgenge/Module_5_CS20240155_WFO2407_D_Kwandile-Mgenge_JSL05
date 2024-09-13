// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
    { title: "Bring It on Home to Me", artist: "Sam Cooke", genre: "R&B" },
    { title: "Southern Nights", artist: "The Runaways", genre: "Pop" },
    { title: "Mr. Blue Sky", artist: "Electric Light Orchestra", genre: "R&B" },
    { title: "The Rubberband Man", artist: "Spinners", genre: "R&B" },
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    const playlistsContainer = document.getElementById('playlists');

    // Maping through the guardians to create a playlist for each of them
    Object.entries(guardians).map(([guardian, genre]) => {
        // Creating a div element for each guardian's playlist
        const playlistDiv = document.createElement('div');
        playlistDiv.className = 'playlist';

        // Create a heading element for the guardian's name
        const heading = document.createElement('h2');
        heading.textContent = `${guardian}'s Playlist`;
        playlistDiv.appendChild(heading);

        // Creating a list element for the songs
        const songList = document.createElement('ul');
        songList.style.listStyleType = 'none'; // Removes default bullet points from list

        // Filtering songs by the guardian's preferred genre
        const filteredSongs = songs.filter(song => song.genre === genre);

        // Adding each song to the list
        filteredSongs.map(song => {
            const listItem = document.createElement('li');
            listItem.className = 'song';

            // Creating a span for the song title with specific styling
            const titleSpan = document.createElement('span');
            titleSpan.className = 'song-title';
            titleSpan.textContent = song.title;

            // Appending the title and artist to the list item
            listItem.appendChild(titleSpan);
            listItem.appendChild(document.createTextNode(` by ${song.artist}`));

            // Appending the list item to the list of songs
            songList.appendChild(listItem);
        });

        // Appending the song list to the playlist div
        playlistDiv.appendChild(songList);

        // Appending the playlist div to the playlists container
        playlistsContainer.appendChild(playlistDiv);
    });
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


