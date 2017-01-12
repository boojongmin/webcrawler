package models

import play.api.libs.json.Json

object Content {
  implicit val contentReads = Json.reads[Content]
  implicit val contentWrites = Json.writes[Content]
}

case class Content(id: Long, title: String)


