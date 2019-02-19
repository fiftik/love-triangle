/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0;
    var prefLength = preferences.length;

    for (let x = 0; x < prefLength; x++) {

        let a = preferences[x] - 1;
        if(a == x) continue;
        let b = preferences[a] - 1;
        if(b == a) continue;
        let c = preferences[b] - 1;
        if(c == b) continue;

        if(c == x){
            count++;

        }

    }

    return count / 3;

};

