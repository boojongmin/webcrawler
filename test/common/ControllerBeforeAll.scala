package common

import java.io.File

import controllers.IndexController
import org.specs2.mutable.BeforeAfter
import org.specs2.specification.BeforeAll
import org.specs2.specification.core.SpecStructure
import play.api.{Application, Mode}
import play.api.inject.guice.GuiceApplicationBuilder

trait ControllerBeforeAll extends BeforeAfter{
  var application: Application = null


  override def before: Any = {
    val app = new GuiceApplicationBuilder()
//        .in(new File("/Users/james.boo/dev/workspace/idea_kakao/contentcrawler/conf/application.conf"))
        .in(Mode.Test)
//        .in(this.getClass.getClassLoader)
        .build()
    val controller = app.injector.instanceOf[IndexController]
    this.application = app
  }

  override def after: Any = {}
}
