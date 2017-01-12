//import org.junit.runner.RunWith
//import org.specs2.mutable.Specification
//import org.specs2.runner.JUnitRunner
//import play.api.db.{Database, Databases}
//import play.api.db.evolutions._
//import play.api.test.WithApplication
//
//
//@RunWith(classOf[JUnitRunner])
//class DataBaseSpec extends Specification {
//
//  "DataBaseSpec" should {
//
//    "connect database" in new WithApplication{
//      withMyDatabase { database =>
//        val connection = database.getConnection()
//        connection.prepareStatement("insert into test values (10, 'testing')").execute()
//
//        connection.prepareStatement("select * from test where id = 10")
//          .executeQuery().next() must_== true
//      }
//
//    }
//
//  }
//
//  def withMyDatabase[T](block: Database => T) = {
//
//    Databases.withInMemory(
//      urlOptions = Map(
//        "MODE" -> "MYSQL"
//      ),
//      config = Map(
//        "logStatements" -> true
//      )
//    ) { database =>
//
//      Evolutions.withEvolutions(database, SimpleEvolutionsReader.forDefault(
//        Evolution(
//          1,
//          "create table test (id bigint not null, name varchar(255));",
//          "drop table test;"
//        )
//      )) {
//
//        block(database)
//
//      }
//    }
//  }
//
//}
//
//
//
