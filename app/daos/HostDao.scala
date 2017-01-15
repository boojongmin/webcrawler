package daos

import javax.inject.Inject

import models.Host
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import slick.driver.JdbcProfile
import slick.lifted.ProvenShape

import scala.concurrent.Future

class HostDao @Inject()(val dbConfigProvider: DatabaseConfigProvider) extends HasDatabaseConfigProvider[JdbcProfile] {


  import driver.api._

  val Hosts = TableQuery[HostTable]

  def all(): Future[Seq[Host]] = db.run(Hosts result)

  def get(id: Long): Future[Host] = db.run( Hosts.filter{ _.id === id }.result.head  )

  def insert(host: Host): Future[Int] = db.run( Hosts.insertOrUpdate(host) )

  def delete(id: Long): Future[Int] = db.run( Hosts.filter{_.id === id}.delete )

  class HostTable(tag: Tag) extends Table[Host](tag, "HOST") {

    def id = column[Long]("ID", O.PrimaryKey, O.AutoInc)
    def name = column[String]("NAME")
    def url = column[String]("URL")
    def status = column[Boolean]("STATUS")

    override def * : ProvenShape[Host] = (id, name, url, status) <> ((Host.apply _).tupled, Host.unapply _ )
  }

}
