describe("formSerializer", function() {
  var form;

  beforeEach(function() {
    var testContainer = document.createElement("div");

    testContainer.id = "test-container";
    document.body.appendChild(testContainer);
    testContainer.innerHTML = "<form>" +
      "<input name='Q1-1' type='text' value='统一建模语言'  />" +
      "<input name='Q1-2' type='text' value='三'  />" +
      "<input name='Q1-2' type='text' value='二'  />" +
      "<input name='Q1-2' type='text' value='一'  />" +
      "<input name='Q2-1' type='radio' value='A'  />" +
      "<input name='Q2-1' type='radio' value='B' checked='checked' />" +
      "<input name='Q2-1' type='radio' value='C'  />" +
      "<input name='Q2-1' type='radio' value='D'  />" +
      "<input name='Q2-2' type='radio' value='A'  />" +
      "<input name='Q2-2' type='radio' value='B'  />" +
      "<input name='Q2-2' type='radio' value='C' checked='checked'  />" +
      "<input name='Q2-2' type='radio' value='D'  />" +
      "<input name='Q3-1' type='checkbox' value='A'  checked='checked' />" +
      "<input name='Q3-1' type='checkbox' value='B'  checked='checked' />" +
      "<input name='Q3-1' type='checkbox' value='C'  checked='checked' />" +
      "<input name='Q3-1' type='checkbox' value='D'  />" +
      "<input name='Q3-2' type='checkbox' value='A'  checked='checked'/>" +
      "<input name='Q3-2' type='checkbox' value='B'  checked='checked' />" +
      "<input name='Q3-2' type='checkbox' value='C'  />" +
      "<input name='Q3-2' type='checkbox' value='D'  checked='checked' />" +
      "<input name='Q4-1' type='radio' value='对' checked='checked' >" +
      "<input name='Q4-1' type='radio' value='错' >" +
      "<input name='Q4-2' type='radio' value='对'  >" +
      "<input name='Q4-2' type='radio' value='错' checked='checked'>" +
      "<textarea  name='Q5-1'rows='10' cols='100' >模型的表现形式</textarea>" +
      "</form>";
    form = document.getElementsByTagName('form');
  });
  it("should return corrent formSerializer", function() {
    var formserializer = new formSerializer();
    var answerlist = formserializer.getformSerializer(form);
    var realanswerlist = [{
      name: "Q1-1",
      type: 'text',
      value: ["统一建模语言"]
    }, {
      name: "Q1-2",
      type: 'text',
      value: ["三", "二", "一"]
    }, {
      name: "Q2-1",
      type: 'radio',
      value: ["B"]
    }, {
      name: "Q2-2",
      type: 'radio',
      value: ["C"]
    }, {
      name: "Q3-1",
      type: 'checkbox',
      value: ["A", "B", "C"]
    }, {
      name: "Q3-2",
      type: 'checkbox',
      value: ["A", "B", "D"]
    }, {
      name: "Q4-1",
      type: 'radio',
      value: ["对"]
    }, {
      name: "Q4-2",
      type: 'radio',
      value: ["错"]
    }, {
      name: "Q5-1",
      type: 'text',
      value: ['模型的表现形式']
    }];
    expect(answerlist).toBe(realanswerlist);
  });
});
