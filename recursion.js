function a(ctr) {
  if (ctr > 10) return;
  console.log(ctr);
  a(ctr + 1);
}
a(0);
//Traverse to move across or through something in the case of tree data struture we mean
//to move from element to element that is from parent to child to sibling
// inorder preorder postorder level order depth first search are some of the ways to traverse
//react avoids recursion because of memory it will iterative
//pojos simple collections of name/value pairs
