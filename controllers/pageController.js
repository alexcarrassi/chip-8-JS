exports.home = (req, res) => {
    res.render('home', {
      title: 'Home',
      layout: "../views/" + "layout-basic",
      meta: {
        description: "description",
        canonical_link: "canon_link"
      }
    });
  };