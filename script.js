document.addEventListener('DOMContentLoaded', function() {
    const programItems = [
        { icon: 'fas fa-book', title: 'Lecture', description: 'Listen to speakers from various countries about SCO initiatives.' },
        { icon: 'fas fa-comments', title: 'Forum', description: 'Have the time to share your thoughts and opinions with experts.' },
        { icon: 'fas fa-laptop', title: 'Workshop', description: 'Try creating your own SCO project with experts\' guidance.' },
        { icon: 'fas fa-users', title: 'Networking', description: 'Get opportunities to network with SCO leaders from various countries.' },
        { icon: 'fas fa-handshake', title: 'Agreement', description: 'Participate in SCO agreement signing ceremonies between nations.' }
    ];

    const speakers = [
        { name: 'Xi Jinping', role: 'President of China', image: 'speaker1.jpg', bio: 'Leader of the People\'s Republic of China and a key figure in SCO.' },
        { name: 'Vladimir Putin', role: 'President of Russia', image: 'speaker2.jpg', bio: 'Russian statesman and a prominent voice in SCO affairs.' },
        { name: 'Narendra Modi', role: 'Prime Minister of India', image: 'speaker3.jpg', bio: 'Indian politician leading one of the largest SCO member states.' },
        { name: 'Shehbaz Sharif', role: 'Prime Minister of Pakistan', image: 'speaker4.jpg', bio: 'Pakistani leader and host of the SCO Summit 2024.' },
        { name: 'Kassym-Jomart Tokayev', role: 'President of Kazakhstan', image: 'speaker5.jpg', bio: 'Kazakh politician and an important figure in Central Asian affairs.' },
        { name: 'Emomali Rahmon', role: 'President of Tajikistan', image: 'speaker6.jpg', bio: 'Tajik leader with extensive experience in SCO cooperation.' }
    ];

    const partners = [
        { name: 'China', logo: 'china-logo.png' },
        { name: 'Russia', logo: 'russia-logo.png' },
        { name: 'India', logo: 'india-logo.png' },
        { name: 'Pakistan', logo: 'pakistan-logo.png' },
        { name: 'Kazakhstan', logo: 'kazakhstan-logo.png' }
    ];

    // Populate program items
    const programGrid = document.querySelector('.program-grid');
    programItems.forEach(item => {
        const programItem = document.createElement('div');
        programItem.className = 'program-item';
        programItem.innerHTML = `
            <i class="${item.icon}"></i>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        programGrid.appendChild(programItem);
    });

    // Populate speakers
    const speakersGrid = document.querySelector('.speakers-grid');
    speakers.forEach(speaker => {
        const speakerItem = document.createElement('div');
        speakerItem.className = 'speaker-item';
        speakerItem.innerHTML = `
            <img src="${speaker.image}" alt="${speaker.name}">
            <div class="speaker-info">
                <h3>${speaker.name}</h3>
                <h4>${speaker.role}</h4>
                <p>${speaker.bio}</p>
            </div>
        `;
        speakersGrid.appendChild(speakerItem);
    });

    // Populate partners
    const partnersGrid = document.querySelector('.partners-grid');
    partners.forEach(partner => {
        const partnerItem = document.createElement('div');
        partnerItem.className = 'partner-item';
        partnerItem.innerHTML = `
            <img src="${partner.logo}" alt="${partner.name}">
        `;
        partnersGrid.appendChild(partnerItem);
    });
});
