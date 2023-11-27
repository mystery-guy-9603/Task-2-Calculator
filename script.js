
function addToResult(value) {
  if (value === '()') {
      var result = document.getElementById('result').value;
      if (result.includes('(')) {
          document.getElementById('result').value = result + ')';
      } else {
          document.getElementById('result').value = result + '(';
      }
  } else {
      document.getElementById('result').value += value;
  }
}

function clearResult() {
  document.getElementById('result').value = '';
}

function removeLastChar() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = result.slice(0, -1);
}

function calculateResult() {
  var result = document.getElementById('result').value;
  try {
      var evaluatedResult = eval(result);
      document.getElementById('result').value = evaluatedResult;
  } catch (error) {
      alert('Invalid input');
  }
}
