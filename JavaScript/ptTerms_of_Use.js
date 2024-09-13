// DOMContentLoaded = HTML이 모두 로드된 후 스크립트 실행
// addEventListener = 특정 이벤트가 발생시 실행할 함수를 등록하는 메서드
document.addEventListener('DOMContentLoaded', function(){
    // '모든 약관에 동의합니다' 체크박스 선택 후 변수에 저장
    const termsOfUseAll = document.querySelector("#termsOfUseAll");

    // 'termsOfUse'로 시작하는 모든 체크박스 선택 후 변수에 저장
    const termsOfUseCheckboxes = document.querySelectorAll(".termsOfUse");

    //
    const joinButton = document.querySelector(".joinLocation");

    // '모든 약관에 동의합니다' 체크박스 클릭 이벤트 처리
    termsOfUseAll.addEventListener('click', function(){

        //모든 개별 약관 체크박스 상태를 '모든 약관에 동의합니다'와 동일하게 설정
        termsOfUseCheckboxes.forEach(checkbox => {//function(checkbox)와 동일함.
            
            //모든 개별 약관 체크박스 상태를 '모든 약관에 동의합니다'와 동일하게 설정
            checkbox.checked = termsOfUseAll.checked;
        });
    });

    function updateTermsOfUseAll(){
        const allChecked = Array.from(termsOfUseCheckboxes).every(cb => cb.checked);
        termsOfUseAll.checked = allChecked;
    }
    
    // 각 개별 약관 체크박스 클릭 이벤트 처리
    termsOfUseCheckboxes.forEach(checkbox =>{
        checkbox.addEventListener('click', updateTermsOfUseAll);
    });

    // 회원가입 버튼 클릭 이벤트 처리
    joinButton.addEventListener('click', function(event){
        //기본 동작 방지
        event.preventDefault(); 

        // 모든 개별 약관이 체크되었는지 확인
        const allChecked = Array.from(termsOfUseCheckboxes).every(cb => cb.checked);

        if(allChecked){
            location.href = 'ptJoin.html';
        }else{
            //동의 하지 않은 약관이 있는 경우
            alert("모든 약관에 동의해야 회원가입이 가능합니다.");
            location.reload();//페이지 새로고침
        }
    })
});