/**
* 
* class Based Stack data structure execution
* @Author Nitin Tyagi
* @Email nitin.1992tyagi@gmail.com
*
*/

class Stack {
    constructor(){
        this._size=0;
        this._storage = {}
    }
    push (data) {
        const size = ++this._size;
        this._storage[size] = data;
        console.log("Storage after pushed data:  ",this._storage);

    }
    pop () {
        let size = this._size,deletedData;
        if(size){
            deletedData = this._storage[size];
            delete this._storage[size]
            this._size--;
            console.log("return pop data :  ",deletedData);
            return deletedData
        }

    }
}

const myStack =  new Stack();
myStack.push(10);
myStack.pop();


