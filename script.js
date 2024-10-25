document.addEventListener('DOMContentLoaded', function() {
    const programItems = [
        { icon: 'fas fa-book', title: 'Lecture', description: 'Listen to speakers from various countries about SCO initiatives.' },
        { icon: 'fas fa-comments', title: 'Forum', description: 'Have the time to share your thoughts and opinions with experts.' },
        { icon: 'fas fa-laptop', title: 'Workshop', description: 'Try creating your own SCO project with experts\' guidance.' },
        { icon: 'fas fa-users', title: 'Networking', description: 'Get opportunities to network with SCO leaders from various countries.' },
        { icon: 'fas fa-handshake', title: 'Agreement', description: 'Participate in SCO agreement signing ceremonies between nations.' }
    ];

    const speakers = [
        { name: 'Xi Jinping', role: 'President of China', image: 'Xijinping.jpeg', bio: 'Leader of the People\'s Republic of China and a key figure in SCO.' },
        { name: 'Vladimir Putin', role: 'President of Russia', image: 'Putin.jpg', bio: 'Russian statesman and a prominent voice in SCO affairs.' },
        { name: 'Narendra Modi', role: 'Prime Minister of India', image: 'Modi.jpeg', bio: 'Indian politician leading one of the largest SCO member states.' },
        { name: 'Shehbaz Sharif', role: 'Prime Minister of Pakistan', image: 'Sharif.jpeg', bio: 'Pakistani leader and host of the SCO Summit 2024.' },
        { name: 'Kassym-Jomart Tokayev', role: 'President of Kazakhstan', image: 'Kassym-Jomart_Tokayev.jpg', bio: 'Kazakh politician and an important figure in Central Asian affairs.' },
        { name: 'Emomali Rahmon', role: 'President of Tajikistan', image: 'Emomali.jpeg', bio: 'Tajik leader with extensive experience in SCO cooperation.' }
    ];

    const partners = [
        { name: 'China', logo: 'china flag.png' },
        { name: 'Russia', logo: 'russia flag.png' },
        { name: 'India', logo: 'India flag.png' },
        { name: 'Pakistan', logo: 'Pk Flag.png' },
        { name: 'Kazakhstan', logo: 'Kazakhastan flag.png' }
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
