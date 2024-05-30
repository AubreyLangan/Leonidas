document.addEventListener('DOMContentLoaded', function(){
    const updates = [
        {
            date: '2024-05-29',
            content: 'Leo slept through almost all of Moms stroller strides class.'
        },
        {
            date: '2024-05-25',
            content: 'Leo got to go on his first ferry ride to see his cousins, Rosie and Archer!'
        },
        {
            date: '2024-05-12',
            content: 'Leo spent some quality time with Daddy so that Mommy could get her hair done for Mothers Day.'
        },
      
    ];

    let currentIndex = 0;

    function displayUpdate(index) {
        const updateContent = document.getElementById('update-content');

        const updateDate = document.createElement('p');
        updateDate.classList.add('update-date');
        updateDate.textContent = `Date: ${updates[index].date}`;

        const updateText = document.createElement('p');
        updateText.classList.add('update-text');
        updateText.textContent = updates[index].content;

        updateContent.appendChild(updateDate);
        updateContent.appendChild(updateText);
    }

    function displayLatestUpdate() {
        displayUpdate(currentIndex);
    }

    displayLatestUpdate();

    document.getElementById('more-updates').addEventListener('click', function() {
        currentIndex++;
        if (currentIndex < updates.length) {
            displayUpdate(currentIndex);
        } else {
            alert("No more updates available.");
            document.getElementById('more-updates').disabled = true;
        }
    });
});