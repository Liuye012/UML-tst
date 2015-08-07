function formSerializer(form) {}

function newResultItem(elem, result) {
  var item = {};
  item.name = elem.name;
  item.type = elem.type;
  item.value = [];
  item.value.push(elem.value);
  result.push(item);
  return result;
}

formSerializer.prototype.getformSerializer = function(form) {
  var result = [];
  [].forEach.call(form, function(elem) {
    if ((elem.type === "radio" && elem.checked === "checked") || (elem.type === "checkbox" && elem.checked === "checked")) {

    } else {
      for (var i = 0,cnt=0; i < result.length; i++) {
        if (elem.name === result[i].name) {
          result[i].value.push(elem.value);
          cnt = 1;
        }
      }
      if (cnt === 0) {
        newResultItem(elem, result);
      }
    }
  });

};
