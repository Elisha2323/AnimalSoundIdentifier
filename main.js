function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
        classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/814_tLaEs/model.json', modelReady);
    })
    .catch(error => {
        console.error('Error accessing microphone:', error);
    });
}  // End of startClassification function (line 9)

function modelReady() {
    classifier.classify(gotResults);
}  // End of modelReady function (line 13)

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);

       

        document.getElementById('result_label').innerHTML = 'I can hear - ' + results[0].label;  // Line 24
        document.getElementById("result_accuracy").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + "%";  // Line 25
       

        let img1 = document.getElementById('img1');
        let img2 = document.getElementById('img2');
        let img3 = document.getElementById('img3');
        let img4 = document.getElementById('img4');

        img1.style.display = 'none';
        img2.style.display = 'none';
        img3.style.display = 'none';
        img4.style.display = 'none';

 
        if (results[0].label === "background noise") {
            // Do nothing
        } else if (results[0].label === "bark") {
            img1.src = 'pngtree-cute-little-beagle-dog-cartoon-running-png-image_6365898.png';  // Replace with correct path
            img1.style.display = 'block';
        } else if (results[0].label === "chirp") {
            img3.src = 'images (1).jpeg';  // Replace with correct path
            img3.style.display = 'block';
        } else if (results[0].label === "cluck") {
            img4.src = '208-2088700_hen-png-cartoon-chicken-clipart-transparent-png.png';  // Replace with correct path
            img4.style.display = 'block';
        } else if (results[0].label === "meow") {
            img1.src = '1-17991_cat-png-cartoon-graphic-black-and-white-transparent.png';  // Replace with correct path
            img1.style.display = 'block';
        } else {
            img2.src = 'images.jpeg';  // Replace with correct path
            img2.style.display = 'block';
        }
    }
}  // End of gotResults function (line 56)
