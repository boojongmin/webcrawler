import java.io.File

import common.ControllerBeforeAll
import controllers.IndexController
import org.specs2.mutable._
import org.specs2.runner._
import org.junit.runner._
import org.specs2.specification.BeforeAll
import play.api.Mode
import play.api.inject.guice.GuiceApplicationBuilder
import play.api.test._
import play.api.test.Helpers._

/**
 * Add your spec here.
 * You can mock out a whole application including requests, plugins etc.
 * For more information, consult the wiki.
 */
@RunWith(classOf[JUnitRunner])
class ApplicationSpec extends Specification with ControllerBeforeAll{

//  "The 'Hello world' string" should {
//    "contain 11 characters" in {
//      "Hello world" must have size(11)
//    }
//    "start with 'Hello'" in {
//      "Hello world" must startWith("Hello")
//    }
//    "end with 'world'" in {
//      "Hello world" must endWith("world")
//    }
//  }



  "Test" should {
    "1" in {
      print(application)
      "Hello world" must endWith("world")
    }
  }

//  "Application" should {
//
//    "send 404 on a bad request" in new WithApplication{
//      route(FakeRequest(GET, "/boum")) must beNone
//    }
//
//    "render the index page" in new WithApplication{
//      val home = route(FakeRequest(GET, "/")).get
//
//      status(home) must equalTo(OK)
//      contentType(home) must beSome.which(_ == "text/html")
//      contentAsString(home) must contain ("Your new application is ready.")
//    }
//  }
}
