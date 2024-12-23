const messageBtn = document.getElementById('message-btn');
const musicBtn = document.getElementById('music-btn');
const photoBtn = document.getElementById('photo-btn');

const overlay = document.getElementById('overlay');

const messageModal = document.getElementById('message-modal');
const musicModal = document.getElementById('music-modal');
const photoModal = document.getElementById('photo-modal');

const backButtons = document.querySelectorAll('.back-button');

const music = document.getElementById('background-music');
music.volume = 0.3; // Set the volume to 30%

const lyricsContainer = document.getElementById('lyrics-container');

const stanzas = [
    {
        lines: [
            "",

        ],
        charDelays: [2],
        lineDelays: [2],
        stanzaDelay: 7.2
    },
    {
        lines: [
            "Ngayon alam ko na ba’t namali",
            "Nang akalang sya ang mag-babalik",
            "Ng ngiting nawala ay nakita sayo"
        ],
        charDelays: [0.1, 0.1, 0.1],
        lineDelays: [0.6, 1, 1],
        stanzaDelay: 5.8
    },
    {
        lines: [
            "Lumiwanag ang dating madilim ",
            "Patay na lupa napuno mo ng tanim",
            "Hanggang walang hanggan ako’y iyo"
        ],
        charDelays: [0.1, 0.1, 0.1],
        lineDelays: [0.7, 1, 1],
        stanzaDelay: 5.7
    },
    {
        lines: [
            "Mahal ako’y tanga",
            "Kung bibitawan ka",
            "Sa dami ng pinagdaanan bago",
            "Maranasan at mahalin ka",
            "Pag-ibig dati kala’y ‘di totoo."
        ],
        charDelays: [0.1, 0.1, 0.1, 0.1, 0.1],
        lineDelays: [0.6, 0.4, 0.8, 0.9, 0.9],
        stanzaDelay: 3
    },
    {
        lines: [
            "Ikaw ang nasa dulo ng bahaghari",
            "Langit ay nakita sa iyong labi",
            "Pwede ka bang angkinin",
            "Tunay aking pag-tingin"
        ],
        charDelays: [0.1, 0.1, 0.1, 0.1],
        lineDelays: [0.7, 1.4, 1.2, 1.9],
        stanzaDelay: 2.6
    },
    {
        lines: [
            "Kahit kailan hindi naging kunwari",
            "Puso mong ako lang ang kahati",
            "‘Wag na sanang aalis",
            "Wala nang bagong dadating."
        ],
        charDelays: [0.1, 0.1, 0.1, 0.1],
        lineDelays: [0.7, 1.1, 1, 1.7],
        stanzaDelay: 4
    },
    {
        lines: [
            "Aminin mo na kasi saking",
            "Gawa sa bituin ang mga mata mo",
            "Nag niningning sa kalawakan ko",
            "Kung ang buhay ay awit, ikaw ang koro"
        ],
        charDelays: [0.06, 0.05, 0.1, 0.1],
        lineDelays: [0.1, 0.1, 0.8, 1],
        stanzaDelay: 5.2
    },
    {
        lines: [
            "Ako ang ‘yong piniling mahalin",
            "Mga demonyo ko’y kilala mo na rin",
            "Kung ito’y imposible, ikaw ang milagro"
        ],
        charDelays: [0.1, 0.1, 0.1],
        lineDelays: [0.7, 0.8, 0.9],
        stanzaDelay: 5.5
    },
    {
        lines: [
            "Sabihin nang tanga",
            "Kung iiwanan ka",
            "Sa dami ng pinagdaanan diba",
            "Ikaw ang natira nung ako’y",
            "Nag-iisa ika’y hindi lumayo"
        ],
        charDelays: [0.1, 0.1, 0.1, 0.1, 0.1],
        lineDelays: [0.65, 0.45, 0.75, 1, 0.85],
        stanzaDelay: 1.5
    },
    
    {
        lines: [
            "Ikaw ang nasa dulo ng bahaghari",
            "Langit ay nakita sa iyong labi",
            "Pwede ka bang angkinin",
            "Tunay aking pag-tingin"
        ],
        charDelays: [0.1, 0.1, 0.1, 0.1],
        lineDelays: [0.6, 1.3, 1, 1.8],
        stanzaDelay: 2.7
    },
    {
        lines: [
            "Kahit kailan hindi naging kunwari",
            "Puso mong ako lang ang kahati",
            "‘Wag na sanang aalis",
            "Wala nang bagong dadating."
        ],
        charDelays: [0.1, 0.1, 0.1, 0.1],
        lineDelays: [0.7, 1.1, 1, 1.7],
        stanzaDelay: 4
    },


];


let typingInterval;

// Function to reset the music state
function resetMusicState() {
    lyricsContainer.innerHTML = '';
    music.pause();
    music.currentTime = 0;
    clearInterval(typingInterval);
}

// Start playing the music and restart the lyrics
function playMusicAndLyrics() {
    resetMusicState();
    music.play();
    typeStanza(stanzas[0], 0);
}

// Function to display a single stanza with typing effect
function typeStanza(stanza, stanzaIndex) {
    let lineIndex = 0;

    function typeLine() {
        if (lineIndex < stanza.lines.length) {
            const line = stanza.lines[lineIndex];
            let charIndex = 0;

            function typeCharacter() {
                if (charIndex < line.length) {
                    lyricsContainer.innerHTML += line[charIndex];
                    charIndex++;
                    typingInterval = setTimeout(typeCharacter, stanza.charDelays[lineIndex] * 1000);
                } else {
                    lyricsContainer.innerHTML += '<br>';
                    lineIndex++;
                    typingInterval = setTimeout(typeLine, stanza.lineDelays[lineIndex] * 1000);
                }
            }

            typeCharacter();
        } else {
            // Delay before moving to the next stanza
            if (stanzaIndex < stanzas.length - 1) {
                setTimeout(() => {
                    lyricsContainer.innerHTML = '';
                    typeStanza(stanzas[stanzaIndex + 1], stanzaIndex + 1);
                }, stanza.stanzaDelay * 1000);
            }
        }
    }

    typeLine();
}

// Function to open the modal and start music and lyrics
function openModal(modal) {
    modal.classList.add('active');
    overlay.classList.add('active');
    if (modal === musicModal) {
        playMusicAndLyrics();
    }
}

// Function to close the modal and reset music state
function closeModal() {
    document.querySelectorAll('.modal').forEach((modal) => {
        modal.classList.remove('active');
    });
    overlay.classList.remove('active');
    resetMusicState();
}

// Event listeners for button actions
messageBtn.addEventListener('click', () => openModal(messageModal));
musicBtn.addEventListener('click', () => openModal(musicModal));
photoBtn.addEventListener('click', () => openModal(photoModal));

// Back buttons to close the modals
backButtons.forEach((button) => {
    button.addEventListener('click', closeModal);
});

// Close the modal if overlay is clicked
overlay.addEventListener('click', closeModal);

// Loop the music and lyrics when the song ends
music.addEventListener('ended', () => {
    playMusicAndLyrics();
});


function openModal(modal) {
    modal.classList.add('active');
    overlay.classList.add('active');

    // Reset the modal animation
    modal.style.animation = 'none';
    requestAnimationFrame(() => {
        modal.style.animation = '';
    });

    if (modal === musicModal) {
        playMusicAndLyrics();
    }
}

