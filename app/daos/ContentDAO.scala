package daos

import javax.inject.Inject

import models.Content
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import slick.driver.JdbcProfile
import slick.lifted.ProvenShape

import scala.concurrent.Future

class ContentDAO @Inject()(val dbConfigProvider: DatabaseConfigProvider) extends HasDatabaseConfigProvider[JdbcProfile]{
  import driver.api._

  val Contents = TableQuery[ContentTable]

  def all(): Future[Seq[Content]] = db.run(Contents.result)

  class ContentTable(tag: Tag) extends Table[Content](tag, "CONTENT") {
    def id = column[Long]("ID", O.PrimaryKey, O.AutoInc)
    def title = column[String]("TITLE")

    override def * : ProvenShape[Content] = (id, title) <> (Content.tupled, Content.unapply _)
  }

}
