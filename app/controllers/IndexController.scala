package controllers

import javax.inject.Inject

import daos.ContentDAO
import models.Content
import play.api._
import play.api.db.slick.DatabaseConfigProvider
import play.api.mvc.{Action, BodyParsers, Controller}
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.json.Json


//class Application extends Controller {
class IndexController @Inject()(contentDao: ContentDAO) extends Controller {

  def index = Action.async { request =>

    contentDao.all().map { case(contents) => Ok(Json.toJson(contents))}
  }

  def rt = Action { request =>
    val content = Map("1" -> List("22", "11"))
    Ok(Json.toJson(content))
  }
}