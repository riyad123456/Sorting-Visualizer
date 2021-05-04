export function bubbleSort(array){
    const animations = [];
    const len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (array[j] > array[j + 1]) {
                animations.push([j,j+1]);
                animations.push([j,j+1]);
                animations.push([j,j+1]);
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j +1] = tmp;
            }
        }
    }
    return animations;
}
class QuickSortObject {
    constructor(i,j,pivot,swap) { 
        this.i = i;
        this.j =j;
        this.pivot = pivot;
        this.swap = swap;
     }
     getI(){ return this.i;}
     getJ(){ return this.j;}
     getPivot(){ return this.pivot;}
     getSwap(){ return this.swap;}
     toString() {
         return `i: ${this.getI()} j: ${this.getJ()} pivot: ${this.getPivot()}`
     }
  }
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}



export function quickSort(items, left, right, animations) {
    if (items.length > 1) {
        var pivotIndex = Math.floor((right + left) / 2);
        var pivot   = items[pivotIndex], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
                animations.push(new QuickSortObject(i,j,pivotIndex,false));
                animations.push(new QuickSortObject(i,j,pivotIndex,false));
                animations.push(new QuickSortObject(i,j,pivotIndex,false));
            }
            while (items[j] > pivot) {
                j--;
                animations.push(new QuickSortObject(i,j,pivotIndex,false));
                animations.push(new QuickSortObject(i,j,pivotIndex,false));
                animations.push(new QuickSortObject(i,j,pivotIndex,false));
            }
            if (i <= j) {
                animations.push(new QuickSortObject(i,j,pivotIndex,true));
                animations.push(new QuickSortObject(i,j,pivotIndex,true));
                animations.push(new QuickSortObject(i,j,pivotIndex,true));
                swap(items, i, j); //sawpping two elements
                i++;
                j--;
                //sawpping two elements
            }
        }
        if (left < i - 1) { //more elements on the left side of the pivot
            quickSort(items, left, i - 1, animations);
        }
        if (i < right) { //more elements on the right side of the pivot
            quickSort(items, i, right,  animations);
        }
    }
    return animations;
}