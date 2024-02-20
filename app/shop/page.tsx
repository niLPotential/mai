import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="mt-4 flex flex-col justify-center gap-5">
      <Card>
        <CardHeader>
          <CardTitle>사운드 디자이너 (기본)</CardTitle>
          <CardDescription>월 12900원 / 120 크레딧</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc">
            <li>렌더링 음악 길이 최대 2분</li>
            <li>
              다운로드
              <ul className="ml-2">
                <li>30초 미만 : 25 크레딧</li>
                <li>1분 : 30 크레딧</li>
                <li>2분 : 50 크레딧</li>
              </ul>
              <ul></ul>
            </li>
            <li>작곡가 편집 1500 크레딧</li>
            <li>라이브러리 저장 공간 20개</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>크리에이터 (프리미어)</CardTitle>
          <CardDescription>월 59000원 / 500 크레딧</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc">
            <li>AI로 만든 샘플 렌더링 하루 5회 무료</li>
            <li>렌더링 음악 길이 최대 10분</li>
            <li>
              다운로드
              <ul className="ml-2">
                <li>30초 미만 : 20 크레딧</li>
                <li>1분 : 25 크레딧</li>
                <li>2분 : 40 크레딧</li>
              </ul>
            </li>
            <li>작곡가 편집 1000 크레딧</li>
            <li>라이브러리 저장 공간 무제한</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>크레딧</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc">
            <li>10개 : 1200원</li>
            <li>100개 : 11900원</li>
            <li>300 + 30개 : 38700원</li>
            <li>500 + 50개 : 64500원</li>
            <li>1000 + 100개 : 129000원</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
