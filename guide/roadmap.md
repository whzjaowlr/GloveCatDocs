# 로드맵

> **최종 업데이트**: 2026-01-01

GloveCat 프로젝트의 개발 계획과 진행 상황입니다.

## 📊 진행 현황

| 우선순위 | 항목                      | 상태       |
| -------- | ------------------------- | ---------- |
| 🔴 P0    | GloveCatCore 배포         | ✅ 완료    |
| 🔴 P0    | BlacklistManager 분리     | ✅ 완료    |
| 🔴 P0    | TieredAccess 마이그레이션 | ✅ 완료    |
| 🔴 P0    | Safe MultiSig 소유권 이전 | 🟡 진행 중 |
| 🟡 P1    | Forta 실시간 모니터링     | ⏳ 계획    |
| 🟡 P1    | Dual Oracle (Pyth 백업)   | ⏳ 계획    |
| 🔵 P2    | Aerodrome DEX 통합        | ⏳ 계획    |
| 🔵 P2    | 다국어 지원               | ✅ 완료 (한/영) |

---

## 🔴 P0: 배포 전 필수

### GloveCatCore 배포 ✅
Base 메인넷에 토큰 컨트랙트 배포 및 검증 완료

### BlacklistManager 분리 ✅
보안 강화를 위한 블랙리스트 관리 컨트랙트 분리

### TieredAccess 마이그레이션 ✅
Owner/Admin 권한 분리 시스템 구현

### Safe MultiSig 소유권 이전 🟡
- 2-of-3 MultiSig 설정
- 모든 컨트랙트 소유권 이전 예정

---

## 🟡 P1: 배포 후 2주 내

### Forta 실시간 모니터링
- 대량 토큰 전송 감지
- 권한 변경 알림
- Slack/Discord 웹훅 연동

### Dual Oracle
| 역할    | 오라클       | 상태      |
| ------- | ------------ | --------- |
| Primary | Chainlink    | ✅ 구현됨 |
| Backup  | Pyth Network | ⏳ 계획   |

---

## 🔵 P2: 장기 계획 (Q1-Q2 2026)

- Aerodrome DEX 통합
- Dune Analytics 대시보드 공개
- 모바일 앱 출시
- 크로스체인 브릿지 (Ethereum, Arbitrum)

---

::: info 참고
로드맵은 시장 상황에 따라 조정될 수 있습니다.
다음 검토: 2026-Q1
:::
