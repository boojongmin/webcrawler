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
import constants.HTTP
import daos.HostDao
import models.Host
import org.mockito.Matchers
import org.specs2.specification.BeforeEach
import play.api.libs.json.{JsValue, Json}
import services.HostService

import scala.concurrent.duration.Duration

@RunWith(classOf[JUnitRunner])
class HostControllerTest extends Specification with ControllerBeforeAll {
  val hostController = application.injector.instanceOf[HostController]
  implicit val timeout: Timeout = Duration(1000, TimeUnit.MILLISECONDS)

  "Test HostController" should {
    "index" in {
      val result: Future[Result] = hostController.list.apply(FakeRequest())
      val json: JsValue = Helpers.contentAsJson(result)
      val hostJson = json \ 0
      val host = hostJson.as[Host]

      host must be equalTo Host(1, "모바일다음", "http://m.daum.net", true)
    }

    "get" in {
      val result: Future[Result] = hostController.show(1).apply(FakeRequest())
      val json: JsValue = Helpers.contentAsJson(result)
      val host = json.as[Host]

      host must be equalTo Host(1, "모바일다음", "http://m.daum.net", true)
    }

    "insert" in {
      val param = Host(2, "테스트2", "http://test2.com", true)
      val result: Future[Result] = hostController.host().apply(FakeRequest(HTTP.POST, "").withJsonBody(Json.toJson[Host](param)))
      val json: JsValue = Helpers.contentAsJson(result)
      val host = json.as[Boolean]
      host must be equalTo true
    }
  }
}

import play.api.mvc._
import play.api.test._
import org.specs2.mock._

@RunWith(classOf[JUnitRunner])
class MockHostControllerTest extends PlaySpecification with Results with Mockito with BeforeEach {

  import scala.concurrent.ExecutionContext.Implicits.global
  val mockHostService = mock[HostService]

  override protected def before: Any = {
    mockHostService.all() returns Future { Seq(Host(1, "테스트",  "http://test.com", true)) }
    mockHostService.get(1) returns Future { Host(1, "테스트",  "http://test.com", true) }
    mockHostService.insertOrUpdate(Matchers.any[Host]) returns Future { true }
  }


  "Test MockHostController" should {
    "index" in {
      val controller = new HostController(mockHostService)
      val result:Future[Result] = controller.list(){FakeRequest()}
      val bodyText: String = contentAsString(result)
      bodyText must be equalTo """[{"id":1,"name":"테스트","url":"http://test.com","status":true}]"""
    }

    "get" in {
      val controller = new HostController(mockHostService)
      val result:Future[Result] = controller.show(1){FakeRequest()}
      val bodyText: String = contentAsString(result)
      bodyText must be equalTo """{"id":1,"name":"테스트","url":"http://test.com","status":true}"""
    }

    "insert" in {
      val controller = new HostController(mockHostService)
      val json = Json.toJson[Host] {Host(2, "테스트2", "http://test2.com", true) }
      val request = FakeRequest("POST", "").withJsonBody(json)
      val result:Future[Result] = controller.host() { request }
      val bodyText: String = contentAsString(result)
      bodyText must be equalTo """true"""

    }
  }
}
