name := "contentcrawler-web"

version := "1.0"

lazy val `contentcrawler` = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq( /*jdbc,*/ cache, ws, specs2 % Test )

libraryDependencies += filters

libraryDependencies += "mysql" % "mysql-connector-java" % "6.0.5"

libraryDependencies += "com.h2database" % "h2" % "1.4.193"

libraryDependencies += "com.typesafe.play" % "play-jdbc-evolutions_2.11" % "2.5.10"

libraryDependencies += "com.typesafe.slick" % "slick_2.11" % "3.1.1"

libraryDependencies += "com.typesafe.play" % "play-slick_2.11" % "2.0.2"

libraryDependencies +=  "com.typesafe.play" % "play-slick-evolutions_2.11" % "2.0.2"

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )

resolvers += "scalaz-bintray" at "https://dl.bintray.com/scalaz/releases"