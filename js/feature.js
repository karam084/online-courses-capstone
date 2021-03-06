const speakers = [
  {
    name: 'Abdel Rahman',
    image: './src-image/drzekri.jpg',
    text: ' Vice President for Reasearch',
    description: 'ational Cancer Institute',
  },
  {
    name: 'Mohamed Samy ',
    image: './src-image/profa.jpg',
    text: ' Cairo University Vice President',
    description: 'Doctor of Philosophy',
  },
];

speakers.forEach((speaker) => {
  const div = document.querySelector('.speaker-info');
  const dynamicContent = `
       <card class="speaker ">
                  <img src=${speaker.image} alt="Speaker" class="speaker-img">
                  <div class="speaker-info">
                    <h3 class="speaker-name">${speaker.name}
                    </h3>
                    <p class="speaker-desc">${speaker.text}
                    </p>
                    <p class="speaker-mor">${speaker.description}
                    </p>
                  </div>
                </card>
              </div>
  `;
  div.innerHTML += dynamicContent;
});

const speaker = [
  {
    image: './src-image/salma.jpg',
    name: 'Salima Ikram',
    text: 'Distinguished University Professor',
    description:
      ' worked as an archaeologist in Turkey',
  },
  {
    image: './src-image/nagw.jpg',
    name: 'Nagwa Sherif',
    text: 'The American University in Cairo',
    description:
      'PhD degree from University of Montreal',
  },
  {
    image: './src-image/mohamed-othman.jpg',
    name: 'Mohamed Othman',
    text: 'Cairo University President',
    description: 'ational Cancer Institute',
  },
  {
    image: './src-image/ProfGamal2.png',
    name: ' Gamal Elshazly',
    text: ' Vice President for Students affairs',
    description: 'Doctor of Philosophy in Law from Faculty',
  },
];
speaker.forEach((speaker1) => {
  const div = document.querySelector('#hidee');
  const dynamicContent = `
       <card class="speaker ">
                  <img src=${speaker1.image} alt="Speaker" class="speaker-img">
                  <div class="speaker-info">
                    <h3 class="speaker-name">${speaker1.name}
                    </h3>
                    <p class="speaker-desc">${speaker1.text}
                    </p>
                    <p class="speaker-mor">${speaker1.description}
                    </p>
                  </div>
                </card>
              </div>
  `;
  div.innerHTML += dynamicContent;
});

function showImage() {
  const elems = document.getElementsByClassName('showHide');
  for (let i = 0; i < elems.length; i += 1) {
    if (
      elems[i].style.visibility === 'visible' || elems[i].style.visibility === '') {
      elems[i].style.visibility = 'hidden';
    } else if (elems[i].style.visibility === 'hidden') {
      elems[i].style.visibility = 'visible';
    }
  }
}
document.addEventListener('DOMContentLoaded', showImage);
