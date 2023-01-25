document.addEventListener('DOMContentLoaded', () => {
    const ratings = document.querySelector('.ratings');
    const submit = document.querySelector('.submit');
    const thanksTab = document.querySelector('.thanks');
    const ratingTab = document.querySelector('.rating');
    const selectedRating = document.getElementById('selected-rating');


    ratings.addEventListener('mouseup', selectRating);
    submit.addEventListener('click', submitRating);


    // Bellow is a function for selecting a rating
    function selectRating(e){
        if (e.target.classList.contains('R')){
            resetBackground();
            e.target.className = 'selected'
            selectedRating.textContent = e.target.textContent;
        };
    };


    // Function for submiting our rating
    function submitRating(){
        if (selectedRating.textContent === ''){
            alert('Please select a rating!')
        } else{
            ratingTab.className = 'rating animate__animated animate__zoomOut'
            setTimeout(() => {thanksTab.style.display = 'block'}, 500);
        };
        
    }


    // function for resetting the li backgrounds
    function resetBackground(){
        const list = document.querySelectorAll('li');
        for(i = 0; i < list.length; i++){
            list[i].className = 'R';
        };
    };
});

