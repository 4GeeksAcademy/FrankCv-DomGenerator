let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['us', 'org', 'ong', 'net', 'dev', 'me', 'pe', 'arg', 'co', 'er']


function domExtGenerator(arr1, arr2, arr3, arr4) {
    let dom = "";
    let allArrays = [arr1, arr2, arr3, arr4];
    let randomIndex;
    for (let i = 0; i < allArrays.length; i++) {
        randomIndex = Math.floor(Math.random() * allArrays[i].length);
        if (i === allArrays.length - 1) dom += "." + allArrays[i][randomIndex];
        else dom += allArrays[i][randomIndex]
    }

    return dom
}

function domGenerator(arr1, arr2, arr3) {
    let dom = "";
    let allArrays = [arr1, arr2, arr3];
    let randomIndex;
    for (let i = 0; i < allArrays.length; i++) {
        randomIndex = Math.floor(Math.random() * allArrays[i].length);
        if (i === allArrays.length - 1) dom += "." + allArrays[i][randomIndex];
        else dom += allArrays[i][randomIndex]
    }

    return dom
}
function domGeneratorSlice(arr1, arr2, arr3) {
    let dom = "";
    let allArrays = [arr1, arr2, arr3];
    let randomIndex;
    for (let i = 0; i < allArrays.length; i++) {
        randomIndex = Math.floor(Math.random() * allArrays[i].length);
        if (i === allArrays.length - 1) dom += "." + allArrays[i][randomIndex].slice(allArrays[i][randomIndex].length - 2, allArrays[i][randomIndex].length);
        else dom += allArrays[i][randomIndex]

    }

    return dom
}

function containDomGenerator(arr1, arr2, arr3, arr4, repetir) {
    let dom = "";
    let allArrays = [arr1, arr2, arr3];
    let randomIndex;
    //allArrays content finder

    for (let i = 0; i < allArrays.length; i++) {
        randomIndex = Math.floor(Math.random() * allArrays[i].length);
        //last array
        if (i === allArrays.length - 1) {
            //finding for extensions inside arr3
            let index = randomIndex;
            for (let k = 0; k < arr4.length; k++) {

                posicionSlice = allArrays[i][index].lastIndexOf(arr4[k]);
                if (posicionSlice !== -1 && allArrays[i][index].length - posicionSlice <= arr4[k].length) {
                    dom += allArrays[i][index].slice(0, posicionSlice) + "." + allArrays[i][index].slice(posicionSlice, allArrays[i][index].length + posicionSlice);
                } else {

                    dom += allArrays[i][index] + ".com";
                    break;
                }


            }

        }
        else dom += allArrays[i][randomIndex]

    }

    return dom
}

function ultimateGenerator(arr1, arr2, arr3, arr4) {

    for (let j = 0; j < arr1.length; j++) {

        for (let k = 0; k < arr2.length; k++) {

            for (let l = 0; l < arr3.length; l++) {
                let sliced = -1;
                for (let m = 0; m < arr4.length; m++) {
                    const candidate = arr3[l].lastIndexOf(arr4[m]);
                    if (arr3[l].endsWith(arr4[m])) {
                        sliced = candidate;
                        break;
                    }

                }
                let dom;
                if (sliced !== -1) { dom = arr1[j] + arr2[k] + arr3[l].slice(0, sliced) + "." + arr3[l].slice(sliced, arr3[l].length) }
                else {
                    dom = arr1[j] + arr2[k] + arr3[l] + ".com"
                    
                }

                console.log(dom)

            }

        }

    }

}

ultimateGenerator(pronoun, adj, noun, extension);