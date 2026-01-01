# 관리자 함수

GloveCat 컨트랙트의 관리자 전용 함수들입니다.

## 토큰 관리

### pause() / unpause()
긴급 상황 시 거래를 일시 정지/재개합니다.

### setTaxRate(uint256 rate)
거래 세율을 조정합니다 (최대 10%).

## 화이트리스트

### addToWhitelist(address account)
### removeFromWhitelist(address account)
특정 주소를 화이트리스트에 추가/제거합니다.

## 블랙리스트

### addToBlacklist(address account)
### removeFromBlacklist(address account)
악의적 주소를 블랙리스트에 추가/제거합니다.
