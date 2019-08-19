"use strict";

const Journal = use("App/Models/Journal");

class JournalController {
  async index({ view, auth }) {
    const reflections = await auth.user.journals().fetch();
    console.log(await auth.user.journals().fetch())

    return view.render("journal", { reflections: reflections.toJSON() });
  }

  async store({ request, response, session, auth }) {
    const body = await request.all();

    console.log(body)

    const reflection1 = await auth.user.journals().create({
      reflection: body.reflectionWho,
      question: "who"
    });

    const reflection2 = await auth.user.journals().create({
      reflection: body.reflectionWhat,
      question: "what"
    });

    const reflection3 = await auth.user.journals().create({
      reflection: body.reflectionWhen,
      question: "when"
    });

    const reflection4 = await auth.user.journals().create({
      reflection: body.reflectionWhere,
      question: "where"
    });

    const reflection5 = await auth.user.journals().create({
      reflection: body.reflectionWhy,
      question: "why"
    });

    session.flash({ notification: "Today has been captured." });

    return response.redirect("/journal");
  }
}

module.exports = JournalController;
