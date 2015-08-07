function formSerializer(form) {}

formSerializer.prototype.getformSerializer = function(form) {
  var result = [];
  [].forEach.call(form, function(elem) {
    if ((elem.type === "radio" && elem.checked === false) || (elem.type === "checkbox" && elem.checked === false)) {

    } else {
      var cnt = 0;
      for (var i = 0; i < result.length; i++) {
        if (elem.name === result[i].name) {
          result[i].value.push(elem.value);
          cnt = 1;
        }
      }
      if (cnt === 0) {
        var item = {};
        item.name = elem.name;
        item.type = elem.type;
        item.value = [];
        item.value.push(elem.value);
        result.push(item);
      }
    }
  });
};
