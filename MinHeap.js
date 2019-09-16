function MinHeap(){
  this.arr = [];
  
}

MinHeap.prototype.getParentInd = function(index){
  return Math.floor((index-1)/2);
}

MinHeap.prototype.insert = function(no){
  this.arr.push(no);
  this.heapifyUp(this.arr.length-1);
}

MinHeap.prototype.swap = function(i,j){
  var a = this.arr[i];
  this.arr[i] = this.arr[j];
  this.arr[j] = a;
}

MinHeap.prototype.delete = function(){
    var rval = this.arr[0];
    this.arr[0] = this.arr.pop();
    this.heapifyDown(0);
    return rval;
  }

MinHeap.prototype.getLeftChild = function(ind){
    return (2*ind)+1
  }

MinHeap.prototype.getRightChild = function(ind){
    return (2*ind)+2;
 }

MinHeap.prototype.heapifyUp = function(ci){
    var pi = this.getParentInd(ci);
    if(pi>=0 && this.arr[pi]>this.arr[ci]){
      this.swap(pi,ci);
      this.heapifyUp(pi);
    }
  }

MinHeap.prototype.heapifyDown = function(ci){
    var li = this.getLeftChild(ci);
    var ri = this.getRightChild(ci);
    var ni = 0;
    if(this.arr[ri]<this.arr[li]){
      ni = ri;
    }else{
      ni = li;
    }
    
    if(this.arr[ni]<this.arr[ci]){
      this.swap(ci,ni);
      this.heapifyDown(ni);
    }
 }

// Usage :
// var mp = new MinHeap();
// var eles = [11,13,14,4,12,3,5];

// eles.forEach(function(ele,i){
//   mp.insert(ele);
// })

// eles.forEach(function(ele,i){
//   console.log(mp.arr)
//   console.log(mp.delete());
// })



