package controllers

import java.util.concurrent.TimeUnit

import common.ControllerBeforeAll
import org.junit.runner.RunWith
import org.specs2.mutable.Specification
import org.specs2.runner.JUnitRunner
import play.api.mvc.Result
import play.api.test.{FakeRequest, Helpers}
import play.api.test.Helpers.{GET, OK, status}

import scala.concurrent.Future
import akka.util.Timeout
import models.Host
import play.api.libs.json.JsValue

import scala.concurrent.duration.Duration

@RunWith(classOf[JUnitRunner])
class HostControllerTest extends Specification with ControllerBeforeAll {
  val hostController = application.injector.instanceOf[HostController]

  "Test HostController" should {
    "index" in {
      implicit val timeout: Timeout = Duration(1000, TimeUnit.MILLISECONDS)
      val result: Future[Result] = hostController.index.apply(FakeRequest())
      val json: JsValue = Helpers.contentAsJson(result)
      val hostJson = json \ 0
      val host = hostJson.as[Host]

      host must be equalTo ( Host(1, "모바일다음", "http://m.daum.net", true) )
    }
  }
}
