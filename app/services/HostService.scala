package services

import javax.inject.Inject

import daos.HostDao
import models.Host

import scala.concurrent.Future

class HostService @Inject()(hostDao: HostDao) {

  import scala.concurrent.ExecutionContext.Implicits.global

  def all() = {
    hostDao.all()
  }

  def get(id: Long) = {
    hostDao.get(id)
  }

  def insertOrUpdate(host: Host): Future[Boolean] = {
    hostDao.insert(host).map {
      case 1 => true
    }
  }

  def delete(id: Long): Future[Boolean] =  {
    hostDao.delete(id).map {
      case 1 => true
    }
  }
}
