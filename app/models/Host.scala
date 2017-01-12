package models

import play.api.libs.json.Json

object Host {
  implicit val hostReads = Json.reads[Host]
  implicit val hostWrites = Json.writes[Host]
}

case class Host(id: Long, name: String, url: String, status: Boolean)
