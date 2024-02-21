FROM maven:3.8.4-openjdk-17 AS builder
WORKDIR /app
COPY . .
# Ejecuta el comando 'mvn package'
RUN mvn package
FROM maven:3.8.4-openjdk-17
COPY --from=builder /app/target/*.jar /app/app.jar
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
EXPOSE 8080

