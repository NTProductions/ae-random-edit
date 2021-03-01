// ae random edit
// takes all footage clips and randomly reorganises them

randomEdit(app.project.activeItem);

function randomEdit(comp) {
    app.beginUndoGroup("Random Edit");
    var layers = [];
    for(var i = 1; i <= comp.numLayers; i++) {
        layers.push(comp.layer(i));
        }
    
    layers = shuffleArray(layers);
    var time = 0;
    for(var i = 0; i < layers.length; i++) {
        layers[i].startTime = time;
        time+=layers[i].outPoint - layers[i].inPoint;
        }
    
    app.endUndoGroup();
    }

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffleArray(array) {
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
    }