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
npm run seed:ambassadors
nest g module product
nest g controller product
nest g service product
nest g class product/entities/product.entity --no-spec
nest g class product/dto/create-product.dto --no-spec
nest g class product/dto/update-product.dto --no-spec
npm i @nestjs/mapped-types
docker-compose exec backend sh
npm run seed:products
nest g module order
nest g controller order
nest g service order
nest g service order-item
nest g class order/entities/order.entity --no-spec
nest g class order/entities/order-item.entity --no-spec
docker-compose exec backend sh
npm run seed:orders
nest g module link
nest g controller link
nest g service link
nest g class link/entities/link.entity --no-spec
nest g module common
