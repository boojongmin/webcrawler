package daos

import javax.inject.Inject

import models.Host
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import slick.driver.JdbcProfile
import slick.lifted.ProvenShape

import scala.concurrent.Future

class HostDAO @Inject()(val dbConfigProvider: DatabaseConfigProvider) extends HasDatabaseConfigProvider[JdbcProfile] {
  import driver.api._

  val Hosts = TableQuery[HostTable]

  def all(): Future[Seq[Host]] = db.run(Hosts.result)

  class HostTable(tag: Tag) extends Table[Host](tag, "HOST") {

    def id = column[Long]("ID", O.PrimaryKey, O.AutoInc)
    def name = column[String]("NAME")
    def url = column[String]("URL")
    def status = column[Boolean]("STATUS")

    override def * : ProvenShape[Host] = (id, name, url, status) <> ((Host.apply _).tupled, Host.unapply _ )
  }

}
