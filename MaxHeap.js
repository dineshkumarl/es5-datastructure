function MaxHeap(){
  this.arr = [];
  
}

MaxHeap.prototype.getParentInd = function(index){
  return Math.floor((index-1)/2);
}

MaxHeap.prototype.insert = function(no){
  this.arr.push(no);
  this.heapifyUp(this.arr.length-1);
}

MaxHeap.prototype.swap = function(i,j){
  var a = this.arr[i];
  this.arr[i] = this.arr[j];
  this.arr[j] = a;
}

MaxHeap.prototype.delete = function(){
    var rval = this.arr[0];
    this.arr[0] = this.arr.pop();
    this.heapifyDown(0);
    return rval;
  }

MaxHeap.prototype.getLeftChild = function(ind){
    return (2*ind)+1
  }

MaxHeap.prototype.getRightChild = function(ind){
    return (2*ind)+2;
 }

MaxHeap.prototype.heapifyUp = function(ci){
    var pi = this.getParentInd(ci);
    if(pi>=0 && this.arr[pi]<this.arr[ci]){
      this.swap(pi,ci);
      this.heapifyUp(pi);
    }
}

MaxHeap.prototype.heapifyDown = function(ci){
    var li = this.getLeftChild(ci);
    var ri = this.getRightChild(ci);
    var ni = 0;
    if(this.arr[ri]>this.arr[li]){
      ni = ri;
    }else{
      ni = li;
    }
    
    if(this.arr[ni]>this.arr[ci]){
      this.swap(ci,ni);
      this.heapifyDown(ni);
    }
}
