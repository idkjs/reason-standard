let () = {
  Alcotest.run(
    "Standard",
    [
      (
        "tests",
        [
          ArrayTest.suite,
          ArrayOcamlSyntaxSpecificTest.suite,
          BoolTest.suite,
          CharTest.suite,
          ComparatorTest.suite,
          FloatTest.suite,
          FunTest.suite,
          IntegerTest.suite,
          IntegerPlatformSpecificTest.suite,
          IntTest.suite,
          ListTest.suite,
          MapTest.suite,
          MapOcamlSyntaxSpecificTest.suite,
          OptionTest.suite,
          ResultTest.suite,
          SetTest.suite,
          SetOcamlSyntaxSpecificTest.suite,
          StringTest.suite,
          StringOcamlSyntaxSpecificTest.suite,
          Tuple3Test.suite,
          TupleTest.suite,
          VectorTest.suite,
        ],
      ),
    ],
  );
};
