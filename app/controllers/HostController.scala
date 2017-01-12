package controllers

import javax.inject.Inject

import daos.HostDAO
import play.api.libs.json.Json
import play.api.mvc.{Action, Controller}

class HostController @Inject()(hostDAO: HostDAO) extends Controller {
  import play.api.libs.concurrent.Execution.Implicits.defaultContext

  def index = Action.async { request =>
    hostDAO.all().map{ case( hosts ) => Ok(Json.toJson(hosts)) }
  }
}
