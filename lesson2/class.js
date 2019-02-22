
'use strict';

// 1. Write a class called Point, which represents a point in two-dimensional space. A point has x and y properties, given as arguments to its constructor. It also has a single method plus, which takes another point and returns the sum of the two points, that is, a new point whose x is the sum of the x properties of the two original points, and whose y is the sum of their y properties.

class Point {
	constructor (x, y) {
		this.x = x;
		this.y = y;
	}
	plus (p) {
		return new Point(p.x + this.x, p.y + this.y);
	}
}
console.log(new Point(1, 2).plus(new Point(2, 1)));

// 2. How to access the method of class A from C which A is parent of B and B is parent of C.

class A {
  method1(){
    console.log('method 1');
  }
}

class B extends A {
  method1() {
    super.method1();
  }
}

class C extends B {
  method1() {
    super.method1();
  }
}

var obj = new C();
obj.method1();
