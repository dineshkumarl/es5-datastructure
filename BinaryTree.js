function Node(value,leftChild,rightChild){
    this.value = value;
    this.left = leftChild;
    this.right = this.rightChild;
    this.parent = null;
  }
  
function BinaryTree(){
  this.root = undefined;
  
  this.swapValue = function(node1,node2){
    var temp = node1.value;
    node2.value = node1.value;
    node1.value = temp;
  }
  
  this.delete = function(value){
      debugger;
      var targetNode = this.find(value);
    if(targetNode){
      this.deleteNode(targetNode);
    }else{
      console.log("node not found");
    }
  }
  
  this.deleteNode = function(targetNode){
    var left = targetNode.left;
    var right = targetNode.right;
    var parent = targetNode.parent;
    
    if(!left && !right){
      if(parent){
        if(parent.left == targetNode){
          parent.left = undefined;
        }
        if(parent.right == targetNode){
          parent.right = undefined;
        }
      }else{
        this.root = undefined;
      }
    }else if(left && right){
        var tg = left;
        while(tg.right){
            tg = tg.right;
        }
        this.deleteNode(tg);
        targetNode.value = tg.value;
    }else{
        if(left && parent){
          if(parent.left === targetNode){
          parent.left = left;
          }else if(parent.right === targetNode){
            parent.right = left;
          }
        }else if(right && parent){
        if(parent.left === targetNode){
          parent.left = right;
          }else if(parent.right === targetNode){
            parent.right = right;
          }
        }else if(!parent){
          if(right){
            this.root = right;
            right.parent = null;
          }else if(left){
            this.root = left;
            left.parent = null;
          }else{
            this.root = undefined;
          }
        }
    }
  }
  
  this.find = function(value){
    if(!this.root){
      return null;
    }
    return this.findNode(this.root,value);
  }
  
  this.findNode = function(node,value){
    if(!node){
      return null;
    }
    if(node.value === value){
      return node;
    }
    if(value > node.value){
      return this.findNode(node.right,value);
    }else if(value < node.value){
      return this.findNode(node.left,value);
    }
  }
  
  this.insert = function(value){
    var node = new Node(value);
    if(!this.root){
      this.root = node;
      return;
    }
    this.checkAndInsert(this.root,node);
  }
  
  this.checkAndInsert = function(node,newNode){
    if(newNode.value < node.value){
      if(!node.left){
        node.left = newNode;
        newNode.parent = node;
      }else{
        this.checkAndInsert(node.left,newNode)
      }
      return;
    }
    
    if(newNode.value >= node.value){
      if(!node.right){
        node.right = newNode;
        newNode.parent = node;
      }else{
        this.checkAndInsert(node.right,newNode)
      }
      return;
    }
  }
}
  
function logInfix(node){

  if(!node){
    console.log("empty node")
    return
  }
  
  var left = node.left;
  var right = node.right;
  var value = node.value;
  
  if(left){
    logInfix(left);
  }
  
    if(value){
    console.log(value);
    }
  
  if(right){
    logInfix(right);
  }
  
}
  
// var bt = new BinaryTree();

// var arr = [34,1,12,3,5,4];

// arr.forEach(function(value){
//   bt.insert(value);
// });

// arr.forEach(function(value){
//   bt.delete(value);
//   logInfix(bt.root)
//   console.log("----------")
// });
