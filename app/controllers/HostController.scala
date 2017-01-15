package controllers

import javax.inject.Inject

import constants.HTTP
import daos.HostDao
import models.Host
import play.api.libs.json.Json
import play.api.mvc.{Action, Controller}
import services.HostService

class HostController @Inject()(hostService: HostService) extends Controller {


  import play.api.libs.concurrent.Execution.Implicits.defaultContext

  def list = Action.async { request =>
    hostService.all().map{ case( hosts ) => Ok(Json.toJson(hosts)) }
  }

  def show(id: Long) = Action.async { request => {
    hostService.get(id).map { case(host) => Ok(Json.toJson(host)) }
  }}

  def host() = Action.async { request =>
     val host = request.body.asJson.get.as[Host]
    request.method match {
      case HTTP.POST | HTTP.PUT => {
        hostService.insertOrUpdate(host).map { case true => Ok(Json.toJson(true)) }
      }
      case HTTP.DELETE => {
        hostService.delete(host.id).map { case true => Ok(Json.toJson(true)) }
      }
    }
  }
//  def host() = Action.async { request =>
//    val host = request.body.asJson.get.as[Host]
//    request.method match {
//      case HTTP.POST | HTTP.PUT => {
//        hostService.insertOrUpdate(host).map { case true => Ok(Json.toJson(true)) }
//      }
//      case HTTP.DELETE => {
//        hostService.delete(host.id).map { case true => Ok(Json.toJson(true)) }
//      }
//    }
//  }


//  def insert(host: Host) = Action.async { request =>
//    hostService.insert(host)
//  }
}
