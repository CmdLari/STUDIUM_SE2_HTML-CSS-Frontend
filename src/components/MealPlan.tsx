function MealPlan() {
  let items = [
    "Sojageschnetzeltes in Currysoße (So,Sl,Sf,GlW), Reis",
    "Burger mit Blumenkohlbratling, Römersalat, Karottenstiften und Gorgonzolakäse (3,Ei,Mi,GlW), Pfeffer Knoblauchmayonaise , Röstiecken",
    "Flammkuchen vegan Elsässer Art mit Räuchertofu und Zwiebeln (1,3,So,GlW)",
    "Flammkuchen mit Rucola und geriebenen Hartkäse (Mi,GlW)",
  ];
  //items = [];

  return (
    <>
      <h1>Meal Plan</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default MealPlan;
