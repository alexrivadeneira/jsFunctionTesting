// DO NOT CHANGE ANY CODE BELOW IN THIS FILE

describe("addTwoNums", function(){
	it("should return the sum of two nums", function(){
		expect(addTwoNums(2,3)).toEqual(5);
	})
});

describe("addTwoNums", function(){
	it("should return the sum of two nums", function(){
		expect(addTwoNums(11,11)).toEqual(22);
	})
});

describe("addThreeNums", function(){
	it("should return the sum of three nums", function(){
		expect(addThreeNums(1,1,1)).toEqual(3);
	})
});

describe("addThreeNums", function(){
	it("should return the sum of three nums", function(){
		expect(addThreeNums(5,7,10)).toEqual(22);
	})
});

describe("addOneToInput", function(){
	it("should return the input plus one", function(){
		expect(addOneToInput(5)).toEqual(6);
	})
});

describe("addOneToInput", function(){
	it("should return the input plus one", function(){
		expect(addOneToInput(11)).toEqual(12);
	})
});

describe("doubleString", function(){
	it("should return the string twice with no space", function(){
		expect(doubleString("bob")).toEqual("bobbob");
	})
});

describe("doubleString", function(){
	it("should return the string twice with no space", function(){
		expect(doubleString("berkeley")).toEqual("berkeleyberkeley");
	})
});

describe("roundNum", function(){
	it("should round the input to the nearest integer", function(){
		expect(roundNum(1.382)).toEqual(1);
	})
});

describe("roundNum", function(){
	it("should round the input to the nearest integer", function(){
		expect(roundNum(99.982)).toEqual(100);
	})
});
