FROM openjdk:17
VOLUME /tmp
EXPOSE 8080
COPY target/dbapplication-0.0.1-SNAPSHOT.jar database.jar
ENTRYPOINT [ "java", "-jar", "/database.jar" ]