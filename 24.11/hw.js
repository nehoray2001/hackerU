(function (window, document) {
  //Q1
  function getVoteCount(obj) {
    return obj.upvotes - obj.downvotes;
  }

  //Q2
  function fiftyThirtyTwenty(ati) {
    return { Needs: ati * 0.5, Wants: ati * 0.3, Savings: ati * 0.2 };
  }

  //Q3
  const movies = [
    { title: "somthing", rating: 5, hasWatched: true },
    { title: "somthing2", rating: 4.5, hasWatched: false },
    { title: "somthing3", rating: 3.5, hasWatched: true },
  ];
  movies.forEach((element) => {
    if (element.hasWatched) {
      console.log(
        `you have watched "${element.title}" - ${element.rating} stars`
      );
    } else {
      console.log(
        `you have not seen "${element.title}" - ${element.rating} stars`
      );
    }
  });

  //Q4
  function volumeOfBox(box) {
    return box.width * box.length * box.height;
  }

  //Q5
  function relationToLuke(name) {
    switch (name) {
      case "DarthVader":
        return "Luke, I am your father.";
        break;
      case "Leia":
        return "Luke, I am your sister.";
        break;
      case "Han":
        return "Luke, I am your brother in law.";
        break;
      case "R2D2":
        return "Luke, I am your droid";
        break;
      default:
        return "Luke, i don't know you :)";
        break;
    }

    const family = {
      Leia: "Luke, I am your sister.",
      DarthVader: "Luke, I am your father.",
      Han: "Luke, I am your brother in law.",
      R2D2: "Luke, I am your droid",
    };
    return family[name];
  }

  //Medium:Q1
})(window, document);
