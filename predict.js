let imageLoaded = false;
$("#image-selector").change(function () {
	imageLoaded = false;
	let reader = new FileReader();
	reader.onload = function () {
		let dataURL = reader.result;
		$("#selected-image").attr("src", dataURL);
		$("#prediction-list").empty();
		imageLoaded = true;
	}
	
	let file = $("#image-selector").prop('files')[0];
	reader.readAsDataURL(file);
});

document.getElementById('image-selector').addEventListener('change', function() {
	const fileName = this.files[0] ? this.files[0].name : 'Choose an Image';
	const label = document.querySelector('label[for="image-selector"]');
	label.textContent = fileName;
});

let model;
let modelLoaded = false;
$(document).ready(async function () {
    modelLoaded = false;
    $('.progress-bar').show();  

    try {
        console.log("Loading model...");
        model = await tf.loadGraphModel('tfjs_model/model.json');
        console.log("Model loaded successfully.");
        modelLoaded = true;
    } catch (error) {
        console.error("Error loading the model:", error);
        alert("Failed to load the model. Please check the console for details.");
    } finally {
        $('.progress-bar').hide(); 
    }
});

let TARGET_CLASSES = {};  

async function loadTargetClasses() {
    try {
        let response = await fetch('target_class.json'); 
        TARGET_CLASSES = await response.json(); 
        console.log("TARGET_CLASSES loaded: ", TARGET_CLASSES);
    } catch (error) {
        console.error("Error loading TARGET_CLASSES:", error);
    }
}

$("#predict-button").click(async function () {
    if (!modelLoaded) { alert("The model must be loaded first"); return; }
    if (!imageLoaded) { alert("Please select an image first"); return; }

    let image = $('#selected-image').get(0);

    // Pre-process the image
    console.log("Loading image...");
    let tensor = tf.browser.fromPixels(image, 3)
        .resizeNearestNeighbor([224, 224])
        .expandDims()
        .toFloat()
        .reverse(-1);  // RGB -> BGR

    let predictions = await model.predict(tensor).data();
    console.log(predictions);
    
    let top5 = Array.from(predictions)
        .map(function (p, i) {
            return {
                probability: p,
                className: TARGET_CLASSES[i] 
            };
        }).sort(function (a, b) {
            return b.probability - a.probability;
        }).slice(0, 5);

    $("#prediction-list").empty();
    top5.forEach(function (p) {
        $("#prediction-list").append(`<li>${p.className}: ${p.probability.toFixed(6)}</li>`);
    });
});

$(document).ready(function() {
    loadTargetClasses(); 
});

function displayPredictions(predictions) {
	const predictionList = document.getElementById('prediction-list');
	predictionList.innerHTML = ''; 

	predictions.forEach((prediction, index) => {
		const listItem = document.createElement('li');
		listItem.textContent = `${prediction.label}: ${prediction.confidence.toFixed(2)}`;
		predictionList.appendChild(listItem);
	});
}