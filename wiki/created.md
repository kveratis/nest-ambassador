npm i @nestjs/typeorm typeorm pg
nest g module user
nest g controller user
nest g service user
nest g class user/entities/user.entity --no-spec
nest g module auth
nest g controller auth
nest g service auth
nest g class auth/dto/register.dto --no-spec
npm i class-validator class-transformer
npm i bcryptjs
npm i -D @types/bcryptjs
npm i @nestjs/jwt passport-jwt
npm i -D @types/passport-jwt
npm i cookie-parser
npm i reflect-metadata
nest g class auth/auth.guard --no-spec
npm i -D faker @types/faker
docker-compose exec backend sh
