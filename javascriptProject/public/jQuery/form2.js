
$(function(){
	$("#emailAddress").change(function(){
	
		let emailAddress = $("select[name='emailAddress'").val();
		
		if($("#emailAddress > option:selected").index() == 5){
			$("#emailDomain").removeAttr("readonly"); // 설정된 속성 제거
			$("#emailDomain").val("");
			$("#emailDomain").focus();
		} else{
			$("#emailDomain").prop("readonly","readonly"); // 속성 설정
			$("#emailDomain").val(emailAddress);
		}
	});
	
	// id속성이 join인 <form>태그 안의 submit 버튼을 누른 경우
	// $("버튼요소").click(function(){ if(조건문){실행문; return; } ... });
	$("#submit").click(function(){
		
		/* 아이디 검사 */
		let userid = $("input[name='user_id']").val();
		
		if(userid.replace(/\s/g,"") == ""){
			alert("아이디를 입력하세요.");
			$("input[name='user_id']").val("");
			$("input[name='user_id']").focus();
			
			//placeholder 속성을 input 요소에 추가하고자 할때 placeholder="아이디를 입력하세요"
			// $("input[name='user_id']").val("");
			// $("input[name='user_id']").attr("placeholder","아이디를 입력하세요.");
			return false;
		}
		
		let idPattern = /(^[a-zA-Z].\w{5,11})/g;
		if(!idPattern.test(userid)){
			alert("아이디를 첫글자 영문, 두번째부터 영문자와 숫자 6글자 이상 12글자 이하로 작성");
			$("#user_id").val("");
			$("#user_id").focus();
			return false;
		}
		
		/* 비밀번호 검사 */
		if($("input[name='user_pw']").val().replace(/\s/g,"")==""){
			alert("비밀번호를 입력하세요.");
			$("input[name='user_pw']").val("");
			$("input[name='user_pw']").focus();
			return false;
		}
		
		/* 이름 검사 */
		if($("#user_name").val().replace(/\s/g,"")==""){
			alert("이름을 입력하세요.");
			$("#user_name").val("");
			$("#user_name").focus();
			return false;
		}
		
		/* 생년월일 검사 */
		if ($("#birth").val().replace(/\s/g,"")==""){
			alert("생년월일을 입력하세요.");
			$("#birth").val("");
			$("#birth").focus();
			return false;
		}
		
		/*라디오 버튼 선택여부 검사*/
		if(!$("input[name='gender']").is(":checked")){
			alert("성별 선택하세요.");
			$("input[name='gender']:eq(0)").focus();
			return false;
		}
		
		/* 이메일 주소 입력여부 검사 */
		if($("input[name='email']").val().replace(/\s/g,"")==""){
			alert("이메일 주소를 입력하세요.");
			$("input[name='email']").val("");
			$("input[name='email']").focus();
			return false;
		}
		
		/* 핸드폰 번호 입력여부 검사 */
		if($("input[name='hpno']").val().replace(/\s/g,"")==""){
			alert("핸드폰 번호 입력");
			$("input[name='hpno']").val("");
			$("input[name='hpno']").focus();
			return false;
		}
		
		/* 체크박스 선택 여부*/ 
		if($("input[name='hobby']").is(":checked")){
			alert("취미 선택");
			$("input[name='hobby']:eq(0)").focus();
			return false;
		}
		
		/* selectbox 선택 여부*/
		if($("select[name='job'] > option:selected").index() < 1){
			alert("직업선택");
			$("select[name='job']").focus();
			return false;
		}
		
		/*화면에 출력*/
		let user_id = $("#user_id").val();
		let user_pw = $("#input[name='user_pw']").val();
		let user_name = $("user_name").val();
		let birth = $("input[name='birth']").val();
		
		let gender = $("input[name='gender']:checked").val();
		let email = $("input[name='email']").val()+"@"+$("input[name='emailDomain']").val();
		
		let hpno = $("input[name='hpno']").val();
		let job = $("select[name='job'] > option:selected").val();
		
		// 체크박스 항목 추출
		let hobby = $(".hobby_check:checked");
		
		let select_hobby = "";
		// each() 함수에 hobby의 개체 수만큼 반복적으로 function()실행
		hobby.each(function(){
			// 이벤트가 발생한 자기 자신을 가리키는 키워드
			select_hobby += $(this).val() + " ";
		});
		
		
		// 출력할 문자열
		let result = "<h1>회원가입 입력 데이터</h1><ul>";
		result += "<li>아이디: " + user_id + "</li>";
		result += "<li>비밀번호: " + user_pw + "</li>";
		result += "<li>이름: " + user_name + "</li>";
		result += "<li>성별: " + gender + "</li>";
		result += "<li>이메일: "  + email + "</li>";
		result += "<li>핸드폰번호: "+  hpno + "</li>";
		result += "<li>취미: " + select_hobby + "</li>";
		result += "<li>직업: " + job + "</li>";
		result += "</ul>";
		$("#formResult").show();
		$("#formResult").html(result);
		
		// submit 되면 결과확인 안되므로 전송 강종
		return false;
		
		
	});
	
	
	
	
	
})