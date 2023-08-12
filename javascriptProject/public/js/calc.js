	// 빈 객체 선언
	let calc = {};
	
	// 객체에 포함된 데이터 하나(이름과 값의 한쌍)을 가리켜 객체의 프로퍼티라고 한다.
	calc.num1 = 0;
	calc.num2 = 0;
	
	// 함수 객체의 참조를 값으로 담고 있는 프로퍼티를 가리켜 메서드라고 한다.
	calc.setValue = function(num1, num2){
		this.num1 = num1;
		this.num2 = num2;
	};
	
	// 멤버변수끼리의 덧셈결과를 리턴
	calc.plus = function(){
		return this.num1 + this.num2;
	};
	
	// 멤버변수끼리의 뺄셈 결과를 리턴
	calc.minus = function(){
		return this.num1 - this.num2;
	};
	
	// 곱셈
	calc.multiplay = function(){
		return this.num1 * this.num2;
	};
	
	// 나눗셈
	calc.divide = function(){
		return this.num1 / this.num2;
	};
	
	calc.result = function(oper, area){
		// 어떤 메서드 안에서 같은 객체 안에 존재하는 다른 메서드를 호출하는 경우에도 "this."라는 예약어를 사용해야한다.
		let value = 0;
		console.log("oper = " + oper);
		
		switch(oper){
			case "+": value = this.plus(); break;
			case "-": value = this.minus(); break;
			case "x": value = this.multiplay(); break;
			case "/": value = this.divide(); break;			
		}
		area.innerHTML = value;
	}