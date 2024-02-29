FROM maven:3.9.6-amazoncorretto-21 AS builder
WORKDIR /app
COPY . .
RUN mvn package -DskipTests
FROM maven:3.9.6-amazoncorretto-21
COPY --from=builder /app/target/*.jar /app/app.jar
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
EXPOSE 8080
