'use strict'

class HomeController {

  /**
   * Display a listing of the resource.
   */
  index({
    request,
    response,
    view
  }) {
    let usia = 10;
    return view.render('home', {
      nama: "Nama Kalian",
      usia: usia
    })
  }

}

module.exports = HomeController
