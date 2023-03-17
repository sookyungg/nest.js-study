import { TypeOrmModuleOptions } from "@nestjs/typeorm"

export const typeORMConfig : TypeOrmModuleOptions ={
    type : 'postgres',
    host: 'localhost',
    port : 5432,
    username: 'postgres',
    database: 'board-app',
    entities: [__dirname + '/../**/*.entity.{js,ts}'], //엔티티 이용해서 데이터베이스테이블 생성, 엔티티 파일 위치 설정
    synchronize: true //true 값을 주면 애플리케이션을 다시 실행할때 엔티티 안에서 수정된 컬럼의 길이 타입 변경값등을 해당 테이블에 Drop 한 후 다시 생성
}